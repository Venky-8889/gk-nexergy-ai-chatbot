/**
 * GK Nexergy AI Chatbot Controller
 * Handles conversation flow, built-in RAG knowledge retrieval,
 * optional Gemini / OpenAI LLM integration, speech, and UI interactions.
 */

// Application State
const STATE = {
  mode: localStorage.getItem('gk_mode') || 'builtin', // 'builtin' | 'gemini' | 'openai'
  apiKey: localStorage.getItem('gk_api_key') || '',
  model: localStorage.getItem('gk_model') || 'gemini-1.5-flash',
  soundEnabled: localStorage.getItem('gk_sound') !== 'false',
  voiceLang: localStorage.getItem('gk_voice_lang') || 'en-IN',
  wasVoiceQuery: false,
  chatHistory: [],
  isGenerating: false,
  isRecording: false,
  isSpeaking: false,
  recognition: null,
  availableVoices: []
};

// Master Grounding Context for LLMs
const GK_SYSTEM_INSTRUCTION = `You are Nexergy AI, the official virtual assistant for GK Nexergy (https://www.gknexergy.com/).
Tagline: "Train. Build. Transform."
Philosophy: "Technology Built Around People. Solutions Built Around Purpose."
Experience: Founded by IT professionals with over 25 years of industry experience.

Core Pillars:
1. TRAIN: Nexergy Academy (Foundation Program in Python/PostgreSQL/Cloud/AI, Cyber Security & Ethical Hacking, Databases In-Depth SQL/PostgreSQL, AI Tools & Digital Marketing).
2. BUILD: Enterprise Solutions (Software & Web Engineering, Mobile App Development Flutter/Native, Data & Analytics, Digital Growth & Marketing).
3. TRANSFORM: AI & Automation (Generative AI workflows, NLP document parsing, predictive systems, legacy digital transformation).

Projects: NutriBest (E-Commerce wellness platform), Quintera Holdings (Corporate insurance & real estate advisory), AYU S.S. Pharmacy (Licensed Ayurvedic pharma platform in Kadapa, AP), Upcoming AI systems (AI Hospital Management, AI Real Estate, AI Restaurant Management).
Careers: Openings for Software Engineers, QA Testing Engineers, Technical Mentors/Trainers, Digital Marketing Specialists, Tele Calling Counselors, Admin.
Contact: contact@gknexergy.com | WhatsApp: +91 97045 85960 | Mon-Sat 9AM-7PM IST.

Rules:
- Be professional, welcoming, encouraging, and clear.
- Multilingual Support: You are fully fluent in English, Telugu (తెలుగు), and Hindi (हिंदी). If the user asks in Telugu, Hindi, or transliterated Tanglish/Hinglish (e.g. 'courses enti', 'courses bataiye', 'fees kitni hai'), respond fluently and naturally in that same language!
- Format responses cleanly with bolding, bullet points, and markdown.
- Ground all facts strictly in GK Nexergy's offerings. If asked about exact course fees or custom quotes, invite the user to connect on WhatsApp (+91 97045 85960) or email contact@gknexergy.com.`;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadChatHistory();
  updateModeBadge();
  setupSpeechRecognition();
  updateSoundIcon();

  const voiceSelect = document.getElementById('voiceLangSelect');
  if (voiceSelect) {
    voiceSelect.value = STATE.voiceLang;
  }

  // Pre-load speech synthesis voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      STATE.availableVoices = window.speechSynthesis.getVoices();
    };
    STATE.availableVoices = window.speechSynthesis.getVoices();
  }
});

// Sound feedback using Web Audio API synthesized tone
function playChime(type = 'send') {
  if (!STATE.soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'send') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.16);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    }
  } catch (e) {
    // Audio context not allowed or supported
  }
}

// Toggle Sound
function toggleSound() {
  STATE.soundEnabled = !STATE.soundEnabled;
  localStorage.setItem('gk_sound', STATE.soundEnabled);
  updateSoundIcon();
}

function updateSoundIcon() {
  const icon = document.getElementById('soundIcon');
  if (STATE.soundEnabled) {
    icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>`;
  } else {
    icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`;
  }
}

// Change Voice Language
function changeVoiceLanguage(lang) {
  STATE.voiceLang = lang;
  localStorage.setItem('gk_voice_lang', lang);
  if (STATE.recognition) {
    STATE.recognition.lang = lang;
  }
}

// Speech Recognition (Voice Input)
function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) voiceBtn.style.display = 'none';
    return;
  }

  STATE.recognition = new SpeechRecognition();
  STATE.recognition.continuous = false;
  STATE.recognition.interimResults = false;
  STATE.recognition.lang = navigator.language || 'en-IN';

  STATE.recognition.onstart = () => {
    STATE.isRecording = true;
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) {
      voiceBtn.classList.remove('speaking');
      voiceBtn.classList.add('recording');
    }

    const banner = document.getElementById('voiceStatusBanner');
    const textEl = document.getElementById('voiceStatusText');
    if (banner && textEl) {
      banner.style.display = 'flex';
      textEl.textContent = '🎙️ Listening... Speak your question now';
    }
  };

  STATE.recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById('messageInput');
    input.value = transcript;
    autoResizeTextarea(input);

    // Flag that this query was asked by voice -> bot will automatically speak the answer!
    STATE.wasVoiceQuery = true;

    const banner = document.getElementById('voiceStatusBanner');
    const textEl = document.getElementById('voiceStatusText');
    if (banner && textEl) {
      textEl.textContent = '⚡ Processing your question...';
    }

    handleSendMessage();
  };

  STATE.recognition.onerror = (e) => {
    console.warn("Speech recognition error:", e);
    STATE.isRecording = false;
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) {
      voiceBtn.classList.remove('recording');
      voiceBtn.classList.remove('speaking');
    }
    if (!STATE.isSpeaking) {
      const banner = document.getElementById('voiceStatusBanner');
      if (banner) banner.style.display = 'none';
    }
  };

  STATE.recognition.onend = () => {
    STATE.isRecording = false;
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) voiceBtn.classList.remove('recording');
    if (!STATE.isSpeaking) {
      const banner = document.getElementById('voiceStatusBanner');
      if (banner) banner.style.display = 'none';
    }
  };
}

// Voice Assistant Click: Greets "Hey! How can I help you?" then starts listening!
function toggleVoiceInput() {
  if (!STATE.recognition) {
    alert("Speech recognition is not supported in this browser. Please try Google Chrome or Microsoft Edge.");
    return;
  }

  // If already speaking or listening, clicking stops it
  if (STATE.isSpeaking || STATE.isRecording) {
    stopAllVoice();
    return;
  }

  // Open the widget if minimized
  openChatWidget();

  const voiceBtn = document.getElementById('voiceBtn');
  const banner = document.getElementById('voiceStatusBanner');
  const textEl = document.getElementById('voiceStatusText');

  if (voiceBtn) voiceBtn.classList.add('speaking');
  if (banner && textEl) {
    banner.style.display = 'flex';
    textEl.textContent = '🔊 "Hey! How can I help you?"';
  }

  // Speak greeting "Hey! How can I help you?"
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const greetingText = "Hey! How can I help you?";
    const utterance = new SpeechSynthesisUtterance(greetingText);
    utterance.rate = 1.05;

    const voices = STATE.availableVoices.length > 0 ? STATE.availableVoices : window.speechSynthesis.getVoices();
    const friendlyVoice = voices.find(v => v.lang === 'en-IN' || v.name.toLowerCase().includes('natural') || v.lang.startsWith('en'));
    if (friendlyVoice) utterance.voice = friendlyVoice;

    STATE.isSpeaking = true;

    utterance.onend = () => {
      STATE.isSpeaking = false;
      if (voiceBtn) voiceBtn.classList.remove('speaking');
      playChime('send');
      startListeningMicrophone();
    };

    utterance.onerror = () => {
      STATE.isSpeaking = false;
      if (voiceBtn) voiceBtn.classList.remove('speaking');
      startListeningMicrophone();
    };

    window.speechSynthesis.speak(utterance);
  } else {
    startListeningMicrophone();
  }
}

// Start microphone listening after greeting
function startListeningMicrophone() {
  if (!STATE.recognition) return;
  try {
    STATE.recognition.lang = navigator.language || 'en-IN';
    STATE.recognition.start();
  } catch (e) {
    console.warn("Could not start microphone:", e);
  }
}

// Text-to-Speech (Read Aloud with Automatic Multilingual Voice Detection)
function readAloud(text, forcedLang = null) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  // Strip markdown, URLs, phone numbers, and emojis for natural speech
  let cleanText = text
    .replace(/[*#_`\[\]]/g, '')
    .replace(/https?:\/\/[^\s]+/g, '')
    .replace(/\+?\d[\d\s\-]{8,15}\d/g, '')
    .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    .trim();

  // Automatic language detection under the hood
  let speechLang = forcedLang;
  if (!speechLang) {
    if (/[\u0C00-\u0C7F]/.test(cleanText)) {
      speechLang = 'te-IN';
    } else if (/[\u0900-\u097F]/.test(cleanText)) {
      speechLang = 'hi-IN';
    } else {
      speechLang = 'en-IN';
    }
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = speechLang;
  utterance.rate = 0.98;

  // Find best matching voice under the hood
  const voices = STATE.availableVoices.length > 0 ? STATE.availableVoices : window.speechSynthesis.getVoices();
  let matchedVoice = null;

  if (speechLang.startsWith('te')) {
    matchedVoice = voices.find(v => v.lang.startsWith('te') || v.name.toLowerCase().includes('telugu') || v.name.toLowerCase().includes('mohan'));
  } else if (speechLang.startsWith('hi')) {
    matchedVoice = voices.find(v => v.lang.startsWith('hi') || v.name.toLowerCase().includes('hindi') || v.name.toLowerCase().includes('kalpana') || v.name.toLowerCase().includes('hemant'));
  } else {
    matchedVoice = voices.find(v => v.lang === 'en-IN' || v.name.toLowerCase().includes('india') || v.lang.startsWith('en'));
  }

  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onstart = () => {
    STATE.isSpeaking = true;
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) voiceBtn.classList.add('speaking');

    const banner = document.getElementById('voiceStatusBanner');
    const textEl = document.getElementById('voiceStatusText');
    if (banner && textEl) {
      banner.style.display = 'flex';
      textEl.textContent = '🔊 Speaking response aloud...';
    }
  };

  utterance.onend = () => {
    STATE.isSpeaking = false;
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) voiceBtn.classList.remove('speaking');
    const banner = document.getElementById('voiceStatusBanner');
    if (banner) banner.style.display = 'none';
  };

  utterance.onerror = () => {
    STATE.isSpeaking = false;
    const voiceBtn = document.getElementById('voiceBtn');
    if (voiceBtn) voiceBtn.classList.remove('speaking');
    const banner = document.getElementById('voiceStatusBanner');
    if (banner) banner.style.display = 'none';
  };

  window.speechSynthesis.speak(utterance);
}

// Stop all voice speech and microphone activity
function stopAllVoice() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (STATE.recognition && STATE.isRecording) {
    STATE.recognition.stop();
  }
  STATE.isSpeaking = false;
  STATE.isRecording = false;

  const voiceBtn = document.getElementById('voiceBtn');
  if (voiceBtn) {
    voiceBtn.classList.remove('recording');
    voiceBtn.classList.remove('speaking');
  }

  const banner = document.getElementById('voiceStatusBanner');
  if (banner) banner.style.display = 'none';
}

// Textarea auto-resize
function autoResizeTextarea(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 140) + 'px';
}

function handleKeyDown(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    handleSendMessage();
  }
}

// Widget Visibility Controls
function openChatWidget() {
  const widget = document.getElementById('chatbotWidget');
  if (widget) {
    widget.classList.remove('minimized');
    const input = document.getElementById('messageInput');
    if (input) setTimeout(() => input.focus(), 150);
  }
}

function closeChatWidget() {
  const widget = document.getElementById('chatbotWidget');
  if (widget) {
    widget.classList.add('minimized');
    stopAllVoice();
  }
}

function toggleChatWidget() {
  const widget = document.getElementById('chatbotWidget');
  if (widget) {
    if (widget.classList.contains('minimized')) {
      openChatWidget();
    } else {
      closeChatWidget();
    }
  }
}

// Modal Management
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    if (modalId === 'settingsModal') {
      document.getElementById('engineMode').value = STATE.mode;
      document.getElementById('apiKeyInput').value = STATE.apiKey;
      document.getElementById('modelSelect').value = STATE.model;
      handleEngineChange();
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// Update Header Mode Badge
function updateModeBadge() {
  const badge = document.getElementById('modeBadge');
  const sub = document.querySelector('.widget-subtitle');
  if (badge) {
    if (STATE.mode === 'gemini') {
      badge.textContent = 'Gemini Live AI';
      badge.style.color = '#38bdf8';
    } else if (STATE.mode === 'openai') {
      badge.textContent = 'OpenAI Live';
      badge.style.color = '#10b981';
    } else {
      badge.textContent = 'Knowledge Engine';
      badge.style.color = '#38bdf8';
    }
  }
  if (sub) {
    if (STATE.mode === 'gemini') sub.textContent = 'Gemini Live AI';
    else if (STATE.mode === 'openai') sub.textContent = 'OpenAI Live';
    else sub.textContent = 'GK Nexergy Assistant';
  }
}

function handleEngineChange() {
  const mode = document.getElementById('engineMode').value;
  const keyGroup = document.getElementById('apiKeyGroup');
  const keyLabel = document.getElementById('apiKeyLabel');
  const modelSelect = document.getElementById('modelSelect');

  if (mode === 'builtin') {
    keyGroup.style.display = 'none';
  } else {
    keyGroup.style.display = 'block';
    if (mode === 'gemini') {
      keyLabel.textContent = 'Google Gemini API Key';
      modelSelect.innerHTML = `
        <option value="gemini-1.5-flash">gemini-1.5-flash (Fast & Accurate)</option>
        <option value="gemini-2.0-flash">gemini-2.0-flash (Latest)</option>
      `;
    } else if (mode === 'openai') {
      keyLabel.textContent = 'OpenAI API Key';
      modelSelect.innerHTML = `
        <option value="gpt-4o-mini">gpt-4o-mini (Fast & Recommended)</option>
        <option value="gpt-4o">gpt-4o</option>
      `;
    }
  }
}

function saveSettings() {
  STATE.mode = document.getElementById('engineMode').value;
  STATE.apiKey = document.getElementById('apiKeyInput').value.trim();
  STATE.model = document.getElementById('modelSelect').value;

  localStorage.setItem('gk_mode', STATE.mode);
  localStorage.setItem('gk_api_key', STATE.apiKey);
  localStorage.setItem('gk_model', STATE.model);

  updateModeBadge();
  closeModal('settingsModal');

  appendBotMessage(`⚙️ Assistant settings updated to **${STATE.mode.toUpperCase()}** mode!`);
}

// Quick Prompts
function sendQuickPrompt(promptText) {
  openChatWidget();
  const input = document.getElementById('messageInput');
  if (input) {
    input.value = promptText;
  }
  handleSendMessage();
}

// Send Message Handler
async function handleSendMessage() {
  const input = document.getElementById('messageInput');
  const text = input.value.trim();
  if (!text || STATE.isGenerating) return;

  // Append user message
  appendUserMessage(text);
  input.value = '';
  input.style.height = 'auto';
  playChime('send');

  STATE.isGenerating = true;
  document.getElementById('sendBtn').disabled = true;

  // Show typing indicator
  const typingIndicator = showTypingIndicator();

  try {
    let botReply = '';

    if (STATE.mode === 'gemini' && STATE.apiKey) {
      botReply = await callGeminiApi(text);
    } else if (STATE.mode === 'openai' && STATE.apiKey) {
      botReply = await callOpenAiApi(text);
    } else {
      // Simulate realistic intelligent response latency (400ms - 800ms)
      await new Promise(r => setTimeout(r, 450));
      botReply = findBestGkResponse(text);
    }

    typingIndicator.remove();
    appendBotMessage(botReply);
    playChime('receive');

    // Automatically speak response when query was initiated by Voice Assistant
    if (STATE.wasVoiceQuery) {
      readAloud(botReply);
      STATE.wasVoiceQuery = false;
    }
  } catch (error) {
    console.error("AI Generation Error:", error);
    typingIndicator.remove();
    // Graceful fallback to knowledge base
    const fallbackAnswer = findBestGkResponse(text);
    appendBotMessage(fallbackAnswer);
    playChime('receive');

    if (STATE.wasVoiceQuery) {
      readAloud(fallbackAnswer);
      STATE.wasVoiceQuery = false;
    }
  } finally {
    STATE.isGenerating = false;
    document.getElementById('sendBtn').disabled = false;
  }
}

// Append User Message to UI
function appendUserMessage(text) {
  const container = document.getElementById('chatMessages');
  const row = document.createElement('div');
  row.className = 'message-row user';

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  row.innerHTML = `
    <div class="message-avatar user-avatar">You</div>
    <div class="message-content-wrapper">
      <div class="message-bubble">${escapeHtml(text)}</div>
      <span class="message-time">${time}</span>
    </div>
  `;

  container.appendChild(row);
  scrollToBottom();

  STATE.chatHistory.push({ role: 'user', content: text, time });
  saveChatHistory();
}

// Append Bot Message to UI
function appendBotMessage(markdownText) {
  const container = document.getElementById('chatMessages');
  const row = document.createElement('div');
  row.className = 'message-row bot';

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const parsedHtml = (typeof marked !== 'undefined') ? marked.parse(markdownText) : markdownText;

  row.innerHTML = `
    <div class="message-avatar bot-avatar">
      <img src="logo.png" alt="GK" onerror="this.src='';this.alt='GK';">
    </div>
    <div class="message-content-wrapper">
      <div class="message-bubble">${parsedHtml}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:0 4px;">
        <span class="message-time">${time}</span>
        <div style="display:flex;gap:6px;">
          <button class="action-chip-btn" style="padding:2px 6px;" title="Listen to response" onclick="readAloud(${JSON.stringify(markdownText)})">
            🔊 Listen
          </button>
          <button class="action-chip-btn" style="padding:2px 6px;" title="Copy response" onclick="copyToClipboard(${JSON.stringify(markdownText)})">
            📋 Copy
          </button>
        </div>
      </div>
    </div>
  `;

  container.appendChild(row);
  scrollToBottom();

  STATE.chatHistory.push({ role: 'model', content: markdownText, time });
  saveChatHistory();
}

// Typing Indicator
function showTypingIndicator() {
  const container = document.getElementById('chatMessages');
  const row = document.createElement('div');
  row.className = 'message-row bot';
  row.innerHTML = `
    <div class="message-avatar bot-avatar">
      <img src="logo.png" alt="GK" onerror="this.src='';this.alt='GK';">
    </div>
    <div class="message-content-wrapper">
      <div class="message-bubble typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;
  container.appendChild(row);
  scrollToBottom();
  return row;
}

// Copy to Clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  }).catch(e => console.error(e));
}

function scrollToBottom() {
  const container = document.getElementById('chatMessages');
  container.scrollTop = container.scrollHeight;
}

function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}

// Chat Storage
function saveChatHistory() {
  try {
    localStorage.setItem('gk_chat_history', JSON.stringify(STATE.chatHistory));
  } catch (e) {
    console.warn("Storage full or error:", e);
  }
}

function loadChatHistory() {
  const saved = localStorage.getItem('gk_chat_history');
  if (saved) {
    try {
      const history = JSON.parse(saved);
      if (Array.isArray(history) && history.length > 0) {
        STATE.chatHistory = history;
        // Optionally render past history if desired
      }
    } catch (e) {
      console.warn("Failed to parse history");
    }
  }
}

function clearChatHistory() {
  if (confirm("Are you sure you want to clear this conversation?")) {
    STATE.chatHistory = [];
    localStorage.removeItem('gk_chat_history');
    const container = document.getElementById('chatMessages');
    container.innerHTML = `
      <div class="message-row bot">
        <div class="message-avatar bot-avatar">
          <img src="logo.png" alt="GK" onerror="this.src='';this.alt='GK';">
        </div>
        <div class="message-content-wrapper">
          <div class="message-bubble">
            <p>Conversation cleared. How can I assist you with **GK Nexergy** today?</p>
            <div class="message-actions">
              <button class="action-chip-btn" onclick="sendQuickPrompt('What courses does Nexergy Academy offer?')">📚 View Courses</button>
              <button class="action-chip-btn" onclick="sendQuickPrompt('Tell me about software engineering services')">💻 Software Solutions</button>
              <button class="action-chip-btn" onclick="sendQuickPrompt('How do I contact GK Nexergy on WhatsApp?')">📞 WhatsApp Contact</button>
            </div>
          </div>
          <span class="message-time">Just now</span>
        </div>
      </div>
    `;
  }
}

// Call Google Gemini API
async function callGeminiApi(userPrompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${STATE.model}:generateContent?key=${STATE.apiKey}`;

  const contents = [
    {
      role: 'user',
      parts: [
        { text: `${GK_SYSTEM_INSTRUCTION}\n\nUser Question: ${userPrompt}` }
      ]
    }
  ];

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Failed to reach Gemini API");
  }

  const data = await response.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
  return reply || findBestGkResponse(userPrompt);
}

// Call OpenAI API
async function callOpenAiApi(userPrompt) {
  const url = `https://api.openai.com/v1/chat/completions`;

  const messages = [
    { role: 'system', content: GK_SYSTEM_INSTRUCTION },
    { role: 'user', content: userPrompt }
  ];

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STATE.apiKey}`
    },
    body: JSON.stringify({
      model: STATE.model,
      messages: messages,
      temperature: 0.7
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Failed to reach OpenAI API");
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || findBestGkResponse(userPrompt);
}

// Lead Consultation Inquiry Submission
function handleInquirySubmit(event) {
  event.preventDefault();

  const name = document.getElementById('inqName').value.trim();
  const email = document.getElementById('inqEmail').value.trim();
  const phone = document.getElementById('inqPhone').value.trim();
  const interest = document.getElementById('inqInterest').value;
  const message = document.getElementById('inqMessage').value.trim();

  // Create WhatsApp message
  const waText = `*New Inquiry for GK Nexergy*
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Interest:* ${interest}
*Message:* ${message || 'I would like more information and counseling.'}`;

  const waUrl = `https://wa.me/919704585960?text=${encodeURIComponent(waText)}`;

  closeModal('inquiryModal');
  document.getElementById('inquiryForm').reset();

  // Open WhatsApp
  window.open(waUrl, '_blank');

  appendBotMessage(`✅ Thank you **${name}**! Your inquiry for **${interest}** has been prepared and WhatsApp has opened. Our admissions & consulting team will be glad to assist you!`);
}
