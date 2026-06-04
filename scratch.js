require("dotenv").config();
const GroqAI = require("groq-sdk");
const groq = new GroqAI({ apiKey: process.env.GROQ_API_KEY });
(async () => {
  const models = await groq.models.list();
  for (const m of models.data) {
    console.log(m.id);
  }
})();
