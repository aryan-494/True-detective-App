# 🔍 TrueDetective  
(Think Before You Share)

TrueDetective is an AI-powered misinformation awareness platform that helps users analyze online content, understand why it may be misleading, and think critically before sharing it.

Instead of giving binary “true/false” verdicts, the system focuses on **explanation, context, and reasoning**, encouraging responsible digital behavior.

---

## 🌐 Live Project

- Frontend (Vercel):https://true-detective-app-cjft.vercel.app/ 
- Backend (Render):https://true-detective-app.onrender.com
) 
- Demo Video:https://drive.google.com/file/d/15ri3-wmB4fj9SX1dvJcfXXn0Wa-vvJSG/view?usp=drive_link



---

## 🧠 Problem Statement

Misinformation spreads rapidly across social media, messaging apps, and online platforms.  
Most users forward content without verifying its credibility, often due to emotional language or misleading claims.

### Challenges:
- Sensational headlines and emotional manipulation
- Oversimplified or misleading claims
- Lack of accessible tools for critical evaluation
- Over-reliance on binary fact-checking systems

---

## 💡 Solution

TrueDetective provides an AI-driven content analysis system that:

- Explains why content may be misleading
- Identifies manipulation patterns and weak reasoning
- Encourages users to verify information independently
- Maintains a neutral, educational tone

The goal is awareness, not judgement.

---

## ✨ Features

- 🧠 AI-powered content analysis using Google Gemini  
- 📄 Claim-level reasoning and explanation  
- ⚠️ Detection of emotional and manipulative language  
- 🧩 Clear, readable output for non-technical users  
- 🔐 Secure backend-based AI integration  
- 🎯 Clean and minimal UI  

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ShadCN UI
- Deployed on Vercel

### Backend
- Node.js
- Express.js
- Google Gemini API
- Deployed on Render

### AI Model
- Gemini 2.5 Flash  
- Optimized for fast, explainable analysis
## 🏗️ System Architecture

User Input (Frontend)
↓
POST /analyze (Backend API)
↓
Gemini AI Analysis
↓
Explanation Returned
↓
Displayed in UI



## 📂 Project Structure

true-detective-dashboard-ui/
│
├── app/ # Next.js app router
├── components/ # UI & feature components
├── lib/ # API helpers
│
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── services/ # Gemini integration
│ │ ├── app.js
│ │ └── index.js
│ └── .env
│
└── README.md

## Local Setup

### 1️⃣ Clone Repository

git clone https://github.com/aryan-494/True-detective-App.git
cd TrueDetective
2️⃣ Frontend Setup
bash
Copy code
npm install
npm run dev
Runs at: http://localhost:3000

3️⃣ Backend Setup
bash
Copy code
cd backend
npm install
npm start
Runs at: http://localhost:5000

Testing-
{
  "content": "Vaccines change DNA"
}
Response


{
  "success": true,
  "data": "Explanation of why the claim may be misleading..."
}


🔒 Responsible AI Principles
No political judgement

No medical advice

No true/false verdicts

No bias scoring

The system is designed for education and awareness, not authority.

🔮 Future Scope
Structured claim breakdown

Confidence indicators

Source verification links

Multi-language support

Browser extension

Image and video content analysis

📌 Final Note

TrueDetective encourages users to pause, analyze, and think critically before sharing information online.
Think before you share.




👨‍💻 Author
Aryan Mishra
B.Tech Student | Full Stack Developer
Focused on building responsible and impactful AI-powered applications.
