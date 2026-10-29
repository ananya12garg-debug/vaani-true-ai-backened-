# VAANI True AI Backend - Fully Working

## True AI Agent Backend - Like Meta AI

Features:
- 20 Languages, 18 Departments
- Fuzzy matching - understands misspelling: scholership, cast, aouto, bijali
- Any language: Hindi, English, Bundelkhandi, Bhojpuri etc
- General knowledge: PM Kisan, Ladli Behna, Ayushman, capital, yojana, weather
- NEVER says "not found" or "correct question nahi" - Always answers like Meta AI
- All circular links working - Real govt portals - No 404: edistrict.mp.gov.in, gwalior.nic.in, scholarshipportal.mp.nic.in, pmkisan.gov.in
- APIs: /api/languages, /api/departments, /api/fees, /api/search?q=, /api/verify?dept=&paid=, /api/ask (POST)

## Run Locally:
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
Open http://localhost:8000/docs for Swagger

## Deploy Free:
Render.com:
- New Web Service -> Connect GitHub -> Root: vaani-backend-true-ai
- Build: pip install -r requirements.txt
- Start: uvicorn app:app --host 0.0.0.0 --port 10000
- Free tier

Frontend: Connect to https://your-backend.onrender.com

Test:
curl "https://your-backend.onrender.com/api/search?q=scholership"
curl "https://your-backend.onrender.com/api/verify?dept=scholarship&paid=500"
curl -X POST https://your-backend.onrender.com/api/ask -H "Content-Type: application/json" -d '{"question":"what is PM Kisan Yojana","language":"hi"}'
