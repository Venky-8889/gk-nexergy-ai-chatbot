# GK Nexergy AI Chatbot (Standalone)

> **Dedicated, intelligent AI assistant grounded in the official company profile, training academy, and enterprise solutions of [GK Nexergy](https://www.gknexergy.com/).**  
> *"Train. Build. Transform."*

---

## 🌟 Overview

This is a standalone, production-ready AI Chatbot tailored specifically to **GK Nexergy** (`https://www.gknexergy.com/`). It operates independently without requiring any changes or code integration into their production website.

You can use it as:
- A standalone web portal for students, leads, and clients.
- An internal sales & admissions counseling assistant.
- A prototype or demonstration of an AI assistant for GK Nexergy.
- An embeddable widget (via `iframe`) on any custom landing page.

---

## 🚀 Key Features

1. **Complete Knowledge Base Grounding**:
   - **Nexergy Academy Programs**:
     - *Foundation Program* (Python, PostgreSQL, AWS/Azure Cloud, and applied AI).
     - *Cyber Security & Ethical Hacking* (VAPT, Network security, OWASP Top 10, Defensive architectures).
     - *Databases In-Depth* (Relational design, Advanced SQL queries, Indexing, PostgreSQL tuning).
     - *AI Tools & Digital Marketing* (Prompt engineering, AI-assisted content, SEO funnels).
   - **Enterprise Software Solutions**:
     - Custom Web Applications & Cloud Architectures.
     - Mobile App Development (iOS, Android, Flutter, React Native).
     - Digital Transformation & Legacy Modernization.
     - AI & Intelligent Process Automation.
     - Data Engineering, PostgreSQL tuning & BI Dashboards.
     - Digital Growth & Performance Marketing.
   - **Real Case Studies & Client Projects**:
     - *NutriBest*: Health supplement e-commerce platform with smart recommendations & subscriptions.
     - *Quintera Holdings*: Insurance and real estate advisory portal.
     - *AYU S.S. Pharmacy*: Licensed Ayurvedic medicine platform in Yerraguntla, Kadapa District.
     - *Upcoming AI Solutions*: AI Hospital Management System, AI Real Estate Platform, AI Restaurant Platform.
   - **Careers & Hiring**: Openings for Software Engineers, QA Testers, Mentors/Trainers, Digital Marketers, and Counselors.
   - **Contact & Support**: Email (`contact@gknexergy.com`), WhatsApp direct chat (`+91 97045 85960`), operating hours (Mon–Sat 9AM–7PM IST).

2. **Dual AI Operating Modes**:
   - **Mode 1: Built-in Knowledge Engine (Default)**:
     - 100% Free, offline-capable, instant responses with heuristic semantic ranking and FAQ matching.
     - Zero configuration or API keys required!
   - **Mode 2: Live Generative AI (Google Gemini / OpenAI)**:
     - Connect your Google Gemini API key or OpenAI key in the settings modal.
     - Fully grounded responses utilizing the master system instruction and multi-turn context.

3. **Modern, Aesthetic Interface**:
   - Matches GK Nexergy's official dark branding (`#070d18` deep midnight slate, cyan/electric blue accents `#38bdf8`, and glassmorphic surfaces).
   - Quick Prompt chips for 1-click exploration.
   - Voice input (Speech-to-Text via microphone).
   - Text-to-Speech (Read aloud answers).
   - Lead Capture Modal (generate instant WhatsApp inquiry messages).
   - Official GK Nexergy logo branding.

---

## 💻 How to Run

### Method 1: Instant Direct Open (No Server Needed)
Simply double-click [`index.html`](file:///c:/Users/bodev/Documents/antigravity/amazing-einstein/index.html) or open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari!

### Method 2: Run with Python (Standard Library)
No `pip install` required:
```powershell
python server.py
```
This will automatically launch the local server at `http://localhost:8000` and open it in your browser.

### Method 3: Run with Node.js
No `npm install` required:
```powershell
node server.js
```
Then visit `http://localhost:8000` in your web browser.

---

## 📁 Project Structure

```
amazing-einstein/
├── index.html                 # Standalone Chatbot Web Interface
├── style.css                  # Modern GK Nexergy Dark Theme Stylesheet
├── app.js                     # Controller: Chat state, Gemini/OpenAI API, voice, sound
├── knowledge_base.js          # Client-side heuristic matching & knowledge data
├── gk_nexergy_complete_kb.json# Comprehensive structured JSON knowledge base
├── SYSTEM_PROMPT.md           # Master System Prompt for any LLM
├── logo.png                   # Official GK Nexergy logo
├── server.py                  # Zero-dependency Python server
├── server.js                  # Zero-dependency Node.js server
└── README.md                  # Documentation and guide
```

---

## ⚙️ Customization & Embedding

### How to embed in an external page:
If you want to place this chatbot on another site or landing page without modifying the main website:
```html
<iframe 
  src="https://your-chatbot-deployment.com" 
  width="420" 
  height="650" 
  style="border: none; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);"
></iframe>
```

---

## 📞 Support & Contacts Grounded in the Bot
- **Official Website**: [https://www.gknexergy.com/](https://www.gknexergy.com/)
- **Email**: `contact@gknexergy.com`
- **WhatsApp / Phone**: `+91 97045 85960`
- **Working Hours**: Monday – Saturday, 9:00 AM – 7:00 PM IST
