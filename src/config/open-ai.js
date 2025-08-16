import OpenAI from "openai";
import { config } from "dotenv"; 
config()

// Debug: Check if API key is loaded
console.log("API Key loaded:", process.env.OPENAI_API_KEY ? "Yes" : "No");
console.log("API Key length:", process.env.OPENAI_API_KEY?.length || 0);

const client = new OpenAI({
    baseURL: "https://api.chatanywhere.tech/v1",
    apiKey: process.env.OPENAI_API_KEY  
});

export default client