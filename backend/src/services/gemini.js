import { GoogleGenAI } from "@google/genai";

let client = null;

// Lazy initialization
function getClient() {
  if (!client) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing");
    }

    client = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  }
  return client;
}

export async function analyzeWithGemini(content) {
  console.log("🤖 Gemini called with:", content);

  const ai = getClient();

  const SYSTEM_PROMPT = `
You are an AI assistant designed for a Misinformation Awareness & Online Trust platform named TrueDetective.

IMPORTANT RULES:
- You do NOT decide what is true or false.
- You do NOT judge political or health beliefs.
- You do NOT give final conclusions.

Your role is to help users think critically by explaining:
- why content may be misleading
- what emotional or manipulative patterns exist
- what context may be missing
- how users can verify information themselves

Use calm, neutral, educational language.
Do NOT sound like a chatbot.
Do NOT use fear-based or judgmental language.
`;

  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `${SYSTEM_PROMPT}\n\nAnalyze the following content:\n"${content}"`,
          },
        ],
      },
    ],
  });

  const text =
    response?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("Gemini returned no usable text");
  }

  console.log("🧾 Gemini response received");

  return text;
}
