import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateTravelAdvice = async (userPrompt: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const systemInstruction = `You are an expert travel consultant for "Reliance Travels", a premier agency in Bahrain since 1998. 
    Your tone is professional, welcoming, and knowledgeable.
    
    Key Company Info:
    - Services: Flights, Hotels, Holidays, Corporate Services (CR setup, PRO), Studio Photography.
    - Location: Manama, Bahrain.
    - Experience: 25+ years.

    Task:
    - Provide travel itineraries, visa advice (general), or business setup tips for Bahrain.
    - If asked about specific prices, say "Please contact our agents for the latest real-time rates."
    - Keep responses concise and formatted with bullet points where appropriate.
    - Always mention Reliance Travels services where relevant (e.g., "We can handle the visa for you").
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: [
        {
          role: 'user',
          parts: [
            { text: userPrompt }
          ]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the travel database right now. Please try again later.";
  }
};