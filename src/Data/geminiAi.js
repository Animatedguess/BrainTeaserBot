import { GoogleGenerativeAI } from "@google/generative-ai";





async function geminiAi(inputValue, language = 'en') {
    try {
        // {const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
        // const requestData = {
        //     prompt: {
        //         contents: [
        //             { parts: [{ text: inputValue }] },
        //         ]
        //     },
        //     language: language // Specify the language of the response
        // };

        // const response = await axios.post(url, requestData, {
        //     params: {
        //         key: process.env.API_KEY,
        //     },
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

        // let str= response.data.candidates[0].content.parts[0].text;

        // if ((str===null) || (str===''))
        //     return '';
        // else
        //     str = str.toString();

        // return str.replace(/\s+/g, ' ').replace(/[\*\_\~\`\#\!\[\]\(\)\>\+\-]/g, '').trim()} // Make sure to return response.data

        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

        
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(inputValue);
        const response = await result.response;
        const text = response.text();

        return text;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Ensure errors are thrown to be caught in the component
    }
}

export { geminiAi };
