//gemini-2.0-flash-exp

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error('NEXT_PUBLIC_GEMINI_API_KEY is not defined');
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

function formatResponse(text) {
    let count = 1
    text = text.replace(/\*\* \*/g, () => `${count++}.`);
    text = text.replace(/\*(.*?)\*/g, "**$1**");
    return text;
}

async function run(message) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(message);
        const response = result.response.text();
        
        if (!response) {
            throw new Error('Empty response from AI');
        }
        
        const formattedResponse = formatResponse(response);
        return formattedResponse;
        // return response;
    } catch (error) {
        console.error('Error in chat service:', error);
        throw error; 
    }
}

module.exports = { run };