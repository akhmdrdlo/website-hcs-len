import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;

if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-pro" });
}

export const sendMessageToGemini = async (message, context = 'external') => {
    if (!model) {
        console.warn("Gemini API Key is missing");
        return null;
    }

    try {
        let systemInstruction = "";

        if (context === 'internal') {
            systemInstruction = `
            You are a helpful Internal HR Assistant for "Human Capital Services at PT. Len Industri (Persero)".
            Your simplified role: Assist employees and interns with internal procedures.
            Context:
            - Internal services include checking schedules (Zumba, Jumat Sehat), internship graduation requirements, and internal SOPs.
            - Graduation requirements: 4 sport stamps/month, main tasks, memorization (prayers, UUD 1945, Juz Amma), AND strict compliance with company regulations (Tata Tertib).
            - If you don't know, ask them to contact the Internal Admin via WhatsApp.
            `;
        } else {
            // External Default
            systemInstruction = `
            You are a helpful HR Assistant for "KP dan PKL Human Capital Services at PT. Len Industri (Persero)".
            Your simplified role: Assist public applicants and guests.
            Context:
            - We provide internships (Magang), experimental work (KP/PKL), and guest visits.
            - If you don't know, ask them to contact the External Support via WhatsApp.
            `;
        }

        const prompt = `
        ${systemInstruction}
        Your language is Indonesian (Bahasa Indonesia).
        Answer concisely and professionally.
        
        User: ${message}
        Assistant:
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return null; // Return null to trigger fallback
    }
};
