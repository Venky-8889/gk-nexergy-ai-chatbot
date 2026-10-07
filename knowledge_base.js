/**
 * GK Nexergy Knowledge Base & Smart Retrieval Engine
 * Source: https://www.gknexergy.com/
 */

const GK_KNOWLEDGE = {
  company: {
    name: "GK Nexergy",
    tagline: "Train. Build. Transform.",
    slogan: "Technology Built Around People. Solutions Built Around Purpose.",
    experience: "Founded by IT professionals with over 25 years of industry experience across enterprise software, architecture, and technology leadership.",
    about: "GK Nexergy is a premier technology, skill development, and software solutions company. We bring technology, learning, industry, and opportunity together through one unified ecosystem. We empower local talent, build dependable software and digital platforms for businesses, and help organisations transform through AI, data, cloud, and automation.",
    pillars: [
      { name: "TRAIN (Nexergy Academy)", desc: "Industry-grade workforce empowerment with hands-on labs, mentored apprenticeships, and real-world project work." },
      { name: "BUILD (Enterprise Solutions)", desc: "End-to-end custom software engineering, mobile applications, cloud platforms, and scalable architectures." },
      { name: "TRANSFORM (AI & Digital Modernization)", desc: "Empowering businesses to shift from manual operations to intelligent, automated, technology-driven workflows." }
    ],
    vision: "A connected ecosystem where quality technology education, innovation, and real-world experience create opportunity — for individuals, for businesses, and for the wider digital economy.",
    mission: "To train people with industry-relevant technology skills, build dependable software and digital solutions for businesses, and help organisations transform through the thoughtful use of AI, data, cloud, and automation — connecting people, technology, and business to create lasting opportunity for communities.",
    values: [
      "Business-first approach: Start with the business problem, then select the right technology.",
      "Practical, honest delivery focused on tangible business outcomes.",
      "Empowering local, rural, and semi-urban communities with high-tier tech opportunities.",
      "Inclusive participation in the modern digital economy."
    ]
  },

  contact: {
    email: "contact@gknexergy.com",
    phone: "+91 97045 85960",
    phoneDisplay: "+91 97045 85960",
    whatsapp: "https://wa.me/919704585960?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20programs.",
    hours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
    responseTime: "Inquiries answered within 24–48 hours; quick WhatsApp connects in as little as 10 minutes."
  },

  academyCourses: [
    {
      slug: "foundation-program",
      title: "Foundation Program",
      subtitle: "Python • PostgreSQL • Cloud • AI",
      tagline: "Build Your Technology Foundation.",
      category: "Core Engineering",
      description: "A structured learning journey across the core technologies of modern software — Python, PostgreSQL, AWS/Azure, and AI Fundamentals — designed to take learners from absolute basics to industry readiness.",
      curriculum: [
        "Python Programming (Fundamentals to Object-Oriented Design & Clean Architecture)",
        "Databases & SQL with PostgreSQL (Data modeling, relational design, indexing, queries)",
        "Cloud Architecture (AWS / Azure cloud fundamentals, containers, and deployment)",
        "Applied AI Fundamentals (How modern LLMs & machine learning work in real applications)",
        "Capstone Project mirroring actual corporate production standards"
      ],
      audience: "Students, fresh graduates, career switchers, and anyone starting a serious technology journey."
    },
    {
      slug: "cyber-security",
      title: "Cyber Security & Ethical Hacking",
      subtitle: "Ethical Hacking & Defensive Security",
      tagline: "Learn to Think Like an Attacker. Defend Like a Professional.",
      category: "Security Specialist",
      description: "A practical cyber security program covering security fundamentals, offensive security, and ethical hacking — built around hands-on labs, real attack surfaces, and defensive thinking.",
      curriculum: [
        "Network fundamentals, OSI model security, and protocols",
        "Vulnerability Assessment and Penetration Testing (VAPT)",
        "Web application security & OWASP Top 10 vulnerabilities",
        "Defensive architectures, firewalls, and incident response fundamentals",
        "Hands-on lab environments with simulated real-world attack scenarios"
      ],
      audience: "Aspiring security analysts, ethical hackers, network administrators, and developers seeking deep security expertise."
    },
    {
      slug: "postgresql-mastery",
      title: "Databases In-Depth",
      subtitle: "SQL & PostgreSQL",
      tagline: "Master the Layer Every Application Depends On.",
      category: "Data & Systems",
      description: "A deep, practical program on relational databases — from fundamentals and SQL to advanced PostgreSQL, data modeling, query optimization, and the querying skills real software teams expect.",
      curriculum: [
        "Database normalization, ER modeling, and relational schema architecture",
        "Advanced SQL querying (Window functions, CTEs, complex subqueries, aggregations)",
        "Performance optimization: Indexing strategies, EXPLAIN plans, and query tuning",
        "ACID transactions, concurrency control, and locking mechanics",
        "PostgreSQL administration, backup strategies, and connection pooling"
      ],
      audience: "Backend engineers, data analysts, engineering students, and software developers seeking database mastery."
    },
    {
      slug: "ai-digital-marketing",
      title: "AI Tools & Digital Marketing",
      subtitle: "AI-Assisted Growth Strategy",
      tagline: "Market Smarter With AI at Your Side.",
      category: "AI & Growth",
      description: "A practical program on using modern AI tools across digital marketing — from AI-assisted content and productivity to digital growth strategy and real campaign applications.",
      curriculum: [
        "Digital marketing fundamentals, search engine optimization (SEO), and audience targeting",
        "AI-assisted copywriting, visual generation, and creative asset pipelines",
        "Social media automation and audience segmentation with modern AI tools",
        "Marketing analytics, attribution models, and conversion rate optimization (CRO)",
        "Ethical and responsible usage of AI in branding and marketing workflows"
      ],
      audience: "Marketing professionals, entrepreneurs, students, freelancers, and business owners looking to leverage AI in marketing."
    }
  ],

  solutions: [
    {
      slug: "software-development",
      title: "Software & Application Engineering",
      tagline: "Software Built Around Your Business.",
      description: "We design and engineer web applications, custom software, and business platforms that fit the way your organisation actually works — scalable, maintainable, and built for real users.",
      capabilities: [
        "Custom web applications with modern frontend & robust backend",
        "Enterprise software platforms & internal workflow systems",
        "Microservices architecture & RESTful / GraphQL API development",
        "Cloud-native backend systems and database engineering",
        "Code refactoring, performance optimization, and architectural auditing"
      ]
    },
    {
      slug: "mobile-development",
      title: "Mobile Application Development",
      tagline: "Mobile Experiences Designed for Real Users.",
      description: "From customer-facing apps to internal business tools, we build mobile experiences that are fast, reliable, and designed around the people who use them every day.",
      capabilities: [
        "Native Android & iOS mobile applications",
        "Cross-platform development with Flutter and React Native",
        "Field operations and internal employee enterprise apps",
        "Offline-first mobile architecture with seamless sync",
        "Integration with hardware, camera, GPS, and push notification infrastructure"
      ]
    },
    {
      slug: "digital-transformation",
      title: "Digital Transformation",
      tagline: "From Manual Processes to Digital Possibilities.",
      description: "We enable businesses to transition from traditional and manual processes toward scalable, technology-enabled operating models — at the pace your organisation can absorb.",
      capabilities: [
        "End-to-end process digitisation & workflow re-engineering",
        "Paperless operations and legacy system modernization",
        "Cloud migration roadmaps (AWS, Azure, GCP)",
        "Systems integration across disparate business software",
        "Team onboarding and digital enablement strategy"
      ]
    },
    {
      slug: "ai-automation",
      title: "AI & Automation",
      tagline: "Turn Data and Workflows Into Intelligent Systems.",
      description: "We help organisations apply AI and automation where it genuinely adds value — intelligent workflows, decision support, and process automation grounded in your real operations.",
      capabilities: [
        "Generative AI & LLM application integration",
        "Intelligent workflow automation and robotic process automation (RPA)",
        "Custom domain-specific AI chatbots and virtual assistants",
        "Document parsing, OCR, and natural language processing (NLP)",
        "Predictive analytics and automated decision support systems"
      ]
    },
    {
      slug: "data-analytics",
      title: "Data & Analytics",
      tagline: "Turn Business Data Into Better Decisions.",
      description: "We transform fragmented business information into actionable intelligence — from databases and reporting to business intelligence and data engineering.",
      capabilities: [
        "Interactive Business Intelligence (BI) dashboards (PowerBI, Tableau, custom)",
        "Data engineering pipelines (ETL/ELT data ingestion)",
        "PostgreSQL and relational database tuning for high-volume analytics",
        "Real-time operational reporting and metric tracking",
        "Data warehouse design and schema modelling"
      ]
    },
    {
      slug: "digital-growth",
      title: "Digital Growth & Marketing",
      tagline: "Build a Stronger Digital Presence.",
      description: "We help organisations strengthen their digital presence — combining digital strategy, brand visibility, and AI-powered marketing tools to reach and engage the right audiences.",
      capabilities: [
        "AI-powered marketing automation & campaign funnels",
        "Search Engine Optimization (SEO) & search visibility",
        "Brand identity, UI/UX design, and digital positioning",
        "Performance marketing, PPC, and social campaign execution",
        "Content marketing strategy and lead generation funnels"
      ]
    }
  ],

  projects: [
    {
      name: "NutriBest",
      category: "E-Commerce & Wellness",
      type: "Live Client Project",
      description: "A premier online destination for high-quality nutritional supplements, essential vitamins, and science-backed dietary formulas. Includes smart product discovery, subscription plans, order management, customer wellness engagement tools, secure payment processing, and personalized recommendations.",
      highlights: ["Personalized nutrition recommendations", "Automated recurring subscriptions", "Secure payment gateway", "Customer wellness portal"]
    },
    {
      name: "Quintera Holdings",
      category: "Corporate & Real Estate / Advisory",
      type: "Live Client Project",
      description: "A corporate website for Quintera Holdings — an insurance and real estate advisory firm guided by Vision, Integrity & Impact. Showcases personal lines coverage, commercial coverage, and real estate brokerage services with lead capture.",
      highlights: ["Insurance portfolio presentation", "Real estate brokerage showcase", "Corporate branding & credibility", "High-conversion inquiry pipeline"]
    },
    {
      name: "AYU S.S. Pharmacy",
      category: "Healthcare & Ayurveda",
      type: "Live Client Project",
      description: "A dedicated digital platform for AYU S.S. Pharmacy — a government-licensed Ayurvedic manufacturer (AYUSH License R-1970/Ayur, Govt. of Andhra Pradesh) located in Yerraguntla, Kadapa District. Features proprietary herbal remedies (Dr. Lion Pain Cream, Dr. Lion Pain Pills, Moon Light Skin Cream) manufactured at a GMP-certified facility.",
      highlights: ["Full Ayurvedic herbal remedy catalog", "Wholesale distributor inquiry system", "GMP manufacturing verification", "Educational natural healing resources"]
    },
    {
      name: "AI-Integrated Hospital Management System",
      category: "Healthcare & AI",
      type: "Upcoming AI Solution",
      description: "An intelligent healthcare operations platform integrating patient scheduling, electronic health records (EHR), AI-driven diagnostics triage, and bed/staff resource allocation.",
      highlights: ["Intelligent triage AI", "Predictive hospital bed & staff scheduling", "Automated EHR record summaries", "Seamless patient booking"]
    },
    {
      name: "AI-Integrated Real Estate Business Platform",
      category: "Real Estate & PropTech",
      type: "Upcoming AI Solution",
      description: "A next-generation real estate platform with AI valuation models, automated lead qualification, virtual property matching, and predictive deal tracking.",
      highlights: ["Automated property valuation algorithms", "Smart buyer-seller matching", "AI lead scoring", "Interactive analytics dashboard"]
    },
    {
      name: "AI-Enabled Restaurant Management Platform",
      category: "Hospitality & Food Tech",
      type: "Upcoming AI Solution",
      description: "A comprehensive restaurant operations solution featuring AI inventory forecasting, dynamic menu engineering, kitchen display systems, and automated customer loyalty funnels.",
      highlights: ["AI ingredient demand prediction", "Dynamic menu profitability analysis", "Kitchen display sync", "Automated customer retention funnels"]
    }
  ],

  careers: [
    {
      title: "Full Stack / Software Engineer",
      role: "Engineering",
      desc: "Build scalable web applications, enterprise software, APIs, and modern digital platforms with cutting-edge tech stacks and AI integrations."
    },
    {
      title: "QA & Software Testing Engineer",
      role: "Quality Assurance",
      desc: "Ensure software quality, performance, security, and reliability through test planning, automated scripts, cross-browser QA, and defect tracking."
    },
    {
      title: "Technical Mentor / Trainer",
      role: "Nexergy Academy",
      desc: "Mentor the next generation of engineers in Nexergy Academy through project-based teaching, real-world case studies, and hands-on laboratory guidance."
    },
    {
      title: "Digital Marketing Specialist",
      role: "Growth & Marketing",
      desc: "Drive brand growth, organic search visibility, social community engagement, paid ad funnels, and performance marketing across multi-channel digital landscapes."
    },
    {
      title: "Tele Calling & Student Counselor",
      role: "Student Relations",
      desc: "Engage with prospective students, partners, and enterprise clients, communicating our training and software solutions with clarity, empathy, and professionalism."
    },
    {
      title: "Operations & Administration Executive",
      role: "Operations",
      desc: "Coordinate daily corporate operations, training schedules, facilities management, and administrative workflows."
    }
  ],

  industries: [
    { name: "Startups & Emerging Businesses", details: "Rapid MVP delivery, scalable cloud architectures, agile software delivery." },
    { name: "Education & EdTech", details: "Learning management platforms, digital operations, student engagement portals." },
    { name: "Healthcare & Pharmaceuticals", details: "Secure digital records, Ayurvedic/pharma web portals, compliance, AI scheduling." },
    { name: "Real Estate & PropTech", details: "Lead management, corporate portfolios, AI-powered property portals." },
    { name: "E-Commerce & Retail", details: "Modern online stores, inventory integration, customer engagement tools, payment gateways." },
    { name: "Financial & Professional Services", details: "Data security, reporting systems, workflow automation, compliance." }
  ]
};

// Frequently Asked Questions & Structured Intents
const GK_FAQS = [
  {
    keywords: ["what is gk nexergy", "who is gk nexergy", "tell me about gk nexergy", "about company", "company overview", "who are you", "gk nexergy enti", "gk nexergy gurinchi", "gk nexergy kya hai", "gk nexergy ke bare me", "gk nexergy అంటే ఏమిటి"],
    response: `**GK Nexergy** is a technology, skill development, and software solutions company founded by industry veterans with **over 25 years of IT industry experience**.

Our philosophy is captured in our motto: **"Train. Build. Transform."**
* 🎓 **Train (Nexergy Academy):** Practical, industry-aligned tech training (Python, Cloud, Cyber Security, SQL/PostgreSQL, AI).
* 💻 **Build (Enterprise Solutions):** Custom web & mobile applications, cloud platforms, and enterprise software.
* 🚀 **Transform (AI & Modernization):** Intelligent workflows, AI integration, data analytics, and digital transformation.

Our mission is to empower local talent, build dependable software, and create lasting opportunities for businesses and communities alike.`
  },
  {
    keywords: ["train build transform", "motto", "philosophy", "pillars", "approach"],
    response: `The **"Train. Build. Transform."** framework is the foundation of everything we do at GK Nexergy:

1. **TRAIN (Nexergy Academy):** We equip students, graduates, and professionals with hands-on, high-demand technical skills through mentorship from real software engineers.
2. **BUILD (Enterprise Solutions):** We design, architect, and deliver dependable software, web apps, and mobile applications tailored to real business operations.
3. **TRANSFORM (Digital Modernization):** We guide businesses from manual workflows to intelligent, AI-enabled, scalable digital systems.`
  },
  {
    keywords: ["courses", "academy", "training", "nexergy academy", "learn", "programs", "classes", "syllabus", "కోర్సులు", "కోర్సు", "courses enti", "courses unnaayi", "కోర్సులు ఏమిటి", "కోర్సులు వివరాలు", "కోర్స్", "కోర్సులు ఏవి", "కోర్సుల గురించి", "courses kounse hai", "courses batao", "courses kya hai", "कोर्स", "कोर्सेज", "पाठ्यक्रम"],
    response: `**Nexergy Academy** offers 4 flagship industry-aligned programs:

1. 🐍 **Foundation Program (Python • PostgreSQL • Cloud • AI)**
   * Full-stack foundation: Python OOP, PostgreSQL schema design, AWS/Azure cloud basics, and applied AI.
2. 🛡️ **Cyber Security & Ethical Hacking**
   * Practical labs: VAPT, network security, OWASP Top 10 web security, and defensive engineering.
3. 🗄️ **Databases In-Depth (SQL & PostgreSQL)**
   * Database mastery: Relational design, advanced queries, window functions, indexing & query tuning.
4. 📈 **AI Tools & Digital Marketing**
   * Modern growth: AI content generation, prompt engineering, SEO funnels & campaign analytics.

---
**తెలుగులో వివరాలు:** నెక్సర్గీ అకాడమీలో 4 ముఖ్యమైన కోర్సులు ఉన్నాయి:
* పైథాన్ & క్లౌడ్ ఫౌండేషన్ ప్రోగ్రామ్
* సైబర్ సెక్యూరిటీ & ఎథికల్ హ్యాకింగ్
* డేటాబేసెస్ (SQL & PostgreSQL)
* AI టూల్స్ & డిజిటల్ మార్కెటింగ్

**हिंदी में जानकारी:** नेक्सर्जी एकेडमी 4 प्रमुख कोर्सेज प्रदान करती है:
* फाउंडेशन प्रोग्राम (Python, Cloud & AI)
* साइबर सिक्योरिटी और एथिकल हैकिंग
* डेटाबेस इन-डेप्थ (SQL & PostgreSQL)
* AI टूल्स और डिजिटल मार्केटिंग

[📲 WhatsApp Admissions: +91 97045 85960](https://wa.me/919704585960?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses)`
  },
  {
    keywords: ["contact", "phone", "email", "whatsapp", "address", "location", "reach out", "support", "hours", "office", "ఫోన్ నెంబర్", "సంప్రదించండి", "కాంటాక్ట్", "ఫోన్ నంబర్", "ఫోన్", "contact cheyadam ela", "phone number enti", "address enti", "फोन नंबर", "संपर्क", "पता", "कांटेक्ट", "फोन नंबर क्या है", "संपर्क कैसे करें"],
    response: `### 📞 Contact GK Nexergy / సంప్రదించండి / संपर्क करें

* 📧 **Email:** [contact@gknexergy.com](mailto:contact@gknexergy.com)
* 📱 **Phone / WhatsApp:** [+91 97045 85960](tel:+919704585960)
* 💬 **WhatsApp Chat:** [Click to Chat on WhatsApp](https://wa.me/919704585960?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20programs.)
* ⏰ **Working Hours:** Monday – Saturday | 9:00 AM – 7:00 PM IST
* ⚡ **Response Time:** General inquiries within 24–48 hours; WhatsApp connects in as little as 10 minutes!

**తెలుగు:** మీరు మా అడ్మిషన్స్ మరియు సపోర్ట్ టీమ్‌ను WhatsApp ద్వారా నేరుగా సంప్రదించవచ్చు: **+91 97045 85960** (సోమవారం నుండి శనివారం వరకు ఉదయం 9 నుండి సాయంత్రం 7 వరకు).
**हिंदी:** आप हमारी टीम से WhatsApp पर तुरंत संपर्क कर सकते हैं: **+91 97045 85960** (सोमवार से शनिवार सुबह 9 बजे से शाम 7 बजे तक)।`
  },
  {
    keywords: ["fees", "price", "cost", "how much", "tuition", "batch timings", "ఫీజు", "ఫీజులు", "fees enti", "feejulu", "ఖర్చు ఎంత", "फीस", "फीस कितनी है", "फीस विवरण"],
    response: `### 💳 Course Fees & Batch Schedules / ఫీజు మరియు బ్యాచ్ వివరాలు

For current batch schedules, fee structure, early-bird discounts, and installment options for **Nexergy Academy** courses:

Please connect directly with our admissions counselor:
* 📲 **WhatsApp:** [Chat on WhatsApp (+91 97045 85960)](https://wa.me/919704585960?text=Hi%2C%20I%20would%20like%20to%20know%20the%20fee%20details%20and%20upcoming%20batch%20timings.)
* 📧 **Email:** [contact@gknexergy.com](mailto:contact@gknexergy.com)
* ⏰ **Availability:** Mon – Sat, 9:00 AM – 7:00 PM IST

**తెలుగు:** ప్రస్తుత బ్యాచ్ సమయాలు, ఫీజు వివరాలు మరియు డిస్కౌంట్ల కోసం మా అడ్మిషన్స్ కౌన్సెలర్‌ను WhatsApp (+91 97045 85960) లో సంప్రదించండి.
**हिंदी:** फीस और नए बैच के समय की जानकारी के लिए कृपया हमारे एडमिशन काउंसलर से WhatsApp (+91 97045 85960) पर संपर्क करें।`
  },
  {
    keywords: ["careers", "jobs", "hiring", "openings", "apply", "internship", "vacancy", "ఉద్యోగాలు", "ఉద్యోగం", "జాబ్స్", "నోటిఫికేషన్", "jobs unnaaya", "నౌకరీలు", "नौकरी", "नौकरियां", "जॉब्स", "भर्ती"],
    response: `### 💼 Careers at GK Nexergy / ఉద్యోగావకాశాలు / करियर अवसर
Join our growing team! Current open positions:

1. **Full Stack / Software Engineer** (Web apps, enterprise software, modern tech stacks, AI integrations)
2. **QA & Software Testing Engineer** (Test automation, cross-browser QA, bug tracking)
3. **Technical Mentor / Trainer** (Nexergy Academy practical lab teaching)
4. **Digital Marketing Specialist** (SEO, organic visibility, performance marketing)
5. **Tele Calling & Student Counselor** (Student admissions guidance)
6. **Operations & Administration Executive**

👉 **How to Apply:** Send your resume to **contact@gknexergy.com** or WhatsApp at **+91 97045 85960**!
**తెలుగు:** మీ రెజ్యూమ్‌ను **contact@gknexergy.com** కు ఈమెయిల్ చేయండి లేదా WhatsApp లో పంపండి.
**हिंदी:** अपना रिज्यूमे **contact@gknexergy.com** पर भेजें या WhatsApp पर संपर्क करें।`
  },
  {
    keywords: ["services", "solutions", "what do you build", "software development", "web development", "mobile app", "enterprise", "సాఫ్ట్‌వేర్", "సర్వీసులు", "సర్వీసెస్", "సాఫ్ట్‌వేర్ డెవలప్‌మెంట్", "services enti", "सॉफ्टवेयर", "सेवाएं", "सर्विसेज", "वेबसाइट डेवलपमेंट"],
    response: `### 💻 GK Nexergy Enterprise Solutions / సాఫ్ట్‌వేర్ సర్వీసులు / सेवाएं

1. 💻 **Software & Application Engineering:** Custom enterprise software, high-performance web applications, and scalable microservices.
2. 📱 **Mobile Application Development:** Native iOS/Android and cross-platform Flutter/React Native apps.
3. 🤖 **AI & Automation:** Custom generative AI applications, workflow automation, and predictive intelligence.
4. 🔄 **Digital Transformation:** Moving from legacy manual workflows to cloud-native operations.
5. 📊 **Data & Analytics:** PostgreSQL data warehousing, ETL pipelines, and interactive BI dashboards.
6. 🚀 **Digital Growth & Marketing:** SEO, brand visibility, and AI-powered performance marketing campaigns.

[📲 Discuss a Project on WhatsApp (+91 97045 85960)](https://wa.me/919704585960?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20software%20project)`
  },
  {
    keywords: ["projects", "case studies", "portfolio", "clients", "work", "nutribest", "quintera", "ayu", "ప్రాజెక్ట్స్", "ప్రాజెక్ట్‌లు", "క్లయింట్స్", "ప్రోజెక్ట్స్", "प्रोजेक्ट", "क्लाइंट्स"],
    response: `### 🌟 Projects & Case Studies / ప్రాజెక్ట్‌లు / प्रोजेक्ट्स

* 💊 **NutriBest (E-Commerce & Wellness):** Premium nutrition & supplement platform with smart product discovery, subscriptions, and secure checkout.
* 🏢 **Quintera Holdings (Advisory & Corporate):** Corporate advisory portal for insurance and real estate services.
* 🌿 **AYU S.S. Pharmacy (Healthcare & Ayurveda):** Digital platform for a licensed Ayurvedic manufacturer in Yerraguntla, Kadapa District (AYUSH License R-1970/Ayur).
* 🔮 **Upcoming AI Innovations:**
  * **AI Hospital Management System** (Intelligent triage, EHR, predictive scheduling)
  * **AI Real Estate Platform** (Automated property valuation & smart lead matching)
  * **AI Restaurant Platform** (Inventory prediction & dynamic menu optimization)`
  }
];

/**
 * Smart heuristic search engine grounded on GK Nexergy knowledge base
 */
function findBestGkResponse(userQuery) {
  const query = userQuery.toLowerCase().trim();

  // Multi-lingual Greetings
  const isGreeting = /^(hi|hello|hey|hola|namaste|namaskaram|namasthe|bagunnara|pranam|good morning|good afternoon|good evening)/i.test(query) ||
                     /(నమస్కారం|నమస్తే|नमस्ते|प्रणाम)/i.test(query);
  if (isGreeting && query.length < 40) {
    // Check if Telugu greeting
    if (/[\u0C00-\u0C7F]|namaskaram|namasthe|bagunnara/i.test(query)) {
      return `నమస్కారం! 👋 **GK Nexergy** కు స్వాగతం!

నేను మీ వర్చువల్ అసిస్టెంట్‌ని. మీకు ఎలా సహాయపడగలను?
* 🎓 **నెక్సర్గీ అకాడమీ కోర్సులు** (పైథాన్, సైబర్ సెక్యూరిటీ, డేటాబేసెస్, AI మార్కెటింగ్)
* 💻 **సాఫ్ట్‌వేర్ & మొబైల్ యాప్ డెవలప్‌మెంట్**
* 🤖 **AI & ఆటోమేషన్ సర్వీసెస్**
* 🚀 **ప్రాజెక్ట్‌లు & కేస్ స్టడీస్** (NutriBest, AYU Pharmacy)
* 💼 **ఉద్యోగావకాశాలు (Careers)**
* 📞 **WhatsApp & ఫోన్ సపోర్ట్ (+91 97045 85960)**

మీరు ఏ ప్రశ్నైనా అడగవచ్చు!`;
    }

    // Check if Hindi greeting
    if (/[\u0900-\u097F]|namaste|pranam|kaise ho/i.test(query)) {
      return `नमस्ते! 👋 **GK Nexergy** में आपका स्वागत है!

मैं आपका AI सहायक हूँ। मैं आपकी किस प्रकार मदद कर सकता हूँ?
* 🎓 **नेक्सर्जी एकेडमी कोर्सेज** (Python, Cyber Security, SQL, AI Marketing)
* 💻 **सॉफ्टवेयर और मोबाइल ऐप विकास**
* 🤖 **AI और ऑटोमेशन सेवाएं**
* 🚀 **प्रोजेक्ट्स और केस स्टडीज** (NutriBest, AYU Pharmacy)
* 💼 **करियर और जॉब्स**
* 📞 **संपर्क और WhatsApp सपोर्ट (+91 97045 85960)**

कृपया अपना प्रश्न पूछें!`;
    }

    return `Hello! 👋 Welcome to **GK Nexergy**! 

I am your AI guide. How can I help you today?
* 🎓 **Nexergy Academy Courses** (Foundation Program, Cyber Security, SQL, AI Marketing)
* 💻 **Enterprise Software & Mobile Solutions**
* 🤖 **AI & Automation Services**
* 🚀 **Projects & Case Studies** (NutriBest, AYU Pharmacy, Quintera)
* 💼 **Careers & Job Openings**
* 📞 **Contact & WhatsApp Support**

Feel free to ask a question or pick one of the options above!`;
  }

  // 2. Exact or fuzzy FAQ matching
  for (const faq of GK_FAQS) {
    for (const kw of faq.keywords) {
      if (query.includes(kw)) {
        return faq.response;
      }
    }
  }

  // 3. Keyword scoring against all sections
  let bestScore = 0;
  let bestAnswer = null;

  // Check Academy Courses
  for (const course of GK_KNOWLEDGE.academyCourses) {
    let score = 0;
    const tokens = (course.title + " " + course.subtitle + " " + course.slug + " " + course.description).toLowerCase().split(/\s+/);
    for (const token of tokens) {
      if (token.length > 3 && query.includes(token)) {
        score += 2;
      }
    }
    if (score > bestScore && score >= 4) {
      bestScore = score;
      bestAnswer = `### 📚 ${course.title} (${course.subtitle})
*Category:* **${course.category}**  
*Tagline:* *${course.tagline}*

${course.description}

#### Key Curriculum Modules:
${course.curriculum.map(c => `- ${c}`).join("\n")}

**Who should join:** ${course.audience}

[📲 Message Admissions on WhatsApp](https://wa.me/919704585960?text=Hi%2C%20I%20would%20like%20more%20details%20about%20${encodeURIComponent(course.title)})`;
    }
  }

  // Check Enterprise Solutions
  for (const sol of GK_KNOWLEDGE.solutions) {
    let score = 0;
    const tokens = (sol.title + " " + sol.slug + " " + sol.tagline + " " + sol.description).toLowerCase().split(/\s+/);
    for (const token of tokens) {
      if (token.length > 3 && query.includes(token)) {
        score += 2;
      }
    }
    if (score > bestScore && score >= 4) {
      bestScore = score;
      bestAnswer = `### ⚙️ ${sol.title}
*${sol.tagline}*

${sol.description}

#### Core Capabilities:
${sol.capabilities.map(c => `- ${c}`).join("\n")}

*Would you like to discuss a project with our engineering team? We can connect in as little as 10 minutes.*  
[📲 Connect on WhatsApp](https://wa.me/919704585960?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project%20related%20to%20${encodeURIComponent(sol.title)}) | [📧 Email: contact@gknexergy.com](mailto:contact@gknexergy.com)`;
    }
  }

  // Check Projects
  for (const proj of GK_KNOWLEDGE.projects) {
    let score = 0;
    const tokens = (proj.name + " " + proj.category + " " + proj.description).toLowerCase().split(/\s+/);
    for (const token of tokens) {
      if (token.length > 3 && query.includes(token)) {
        score += 2;
      }
    }
    if (score > bestScore && score >= 4) {
      bestScore = score;
      bestAnswer = `### 🌟 Case Study: ${proj.name}
*Status:* **${proj.type}** | *Industry:* **${proj.category}**

${proj.description}

#### Key Highlights:
${proj.highlights.map(h => `- ${h}`).join("\n")}`;
    }
  }

  // Check Careers
  if (query.includes("job") || query.includes("career") || query.includes("opening") || query.includes("hire") || query.includes("apply") || query.includes("internship")) {
    return GK_FAQS.find(f => f.keywords.includes("careers")).response;
  }

  // Check Contact
  if (query.includes("contact") || query.includes("phone") || query.includes("call") || query.includes("mail") || query.includes("email") || query.includes("whatsapp") || query.includes("address") || query.includes("time") || query.includes("hours")) {
    return GK_FAQS.find(f => f.keywords.includes("contact")).response;
  }

  if (bestAnswer) {
    return bestAnswer;
  }

  // Fallback helpful response
  return `Thank you for asking! GK Nexergy is an IT solutions and skill development company specializing in **Train, Build, and Transform**.

Here is what I can help you with:
* 🎓 **Nexergy Academy Courses** (Foundation Program, Cyber Security, SQL/PostgreSQL, AI Tools & Digital Marketing)
* 💻 **Enterprise Software & Mobile Development**
* 🤖 **AI & Automation Systems**
* 🚀 **Projects & Case Studies** (NutriBest, Quintera Holdings, AYU S.S Pharmacy)
* 💼 **Career Openings**
* 📞 **Contact Information & WhatsApp Support**

Would you like to speak directly with our team? You can reach us at **contact@gknexergy.com** or chat on [WhatsApp at +91 97045 85960](https://wa.me/919704585960?text=Hi%2C%20I%20have%20an%20inquiry%20regarding%20GK%20Nexergy).`;
}

// Export for browser or node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GK_KNOWLEDGE, GK_FAQS, findBestGkResponse };
}
