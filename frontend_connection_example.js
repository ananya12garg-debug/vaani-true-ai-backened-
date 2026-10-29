
// Frontend connection to True AI Backend
// Change API URL to your Render backend
const API_BASE = "https://vaani-true-ai-backend.onrender.com"; // Replace with your Render link
// For local: const API_BASE = "http://localhost:8000";

async function askFromBackend(question, language, dept){
  try{
    const res = await fetch(`${API_BASE}/api/ask`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({question, language, dept})
    });
    const data = await res.json();
    return data.answer;
  }catch(e){
    // Fallback to local logic if backend offline
    return "Backend offline - local logic: " + question + " - Official fee Rs 0, agent loot!";
  }
}

async function searchDept(query){
  const res = await fetch(`${API_BASE}/api/search?q=${query}`);
  return await res.json();
}

async function verifyFeeBackend(dept, paid){
  const res = await fetch(`${API_BASE}/api/verify?dept=${dept}&paid=${paid}`);
  return await res.json();
}
