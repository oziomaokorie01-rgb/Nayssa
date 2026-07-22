Nayssa is an Ai study tutor made especially for the Nigerian students
it includes voices datasets woth Nigerian accents and other accents
Enables an active student-tutor interaction, voice and text included

Vision
An AI tutor that can read, explain, quiz, and have natural voice conversations with students in Nigerian, British, and American English—even while running in the background.
Tech Stack
Instead of mixing different technologies, let's standardize everything.
Component
Technology
Frontend
React + Vite + Tailwind CSS
Backend API
FastAPI (Python)
AI
Gemini
TTS
XTTS v2 (initially), with support for Piper later
STT
Faster-Whisper
Database
SQLite (development), PostgreSQL (production)
Cache
Redis (optional later)
File Storage
Local (development), Cloudflare R2/Supabase (production)
Authentication
JWT
Deployment
Railway (API) + GPU host (RunPod/Modal/Vast.ai for TTS)
Project Structure
Nayssa/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── services/
│   │   ├── models/
│   │   ├── utils/
│   │   ├── main.py
│   │   └── config.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
