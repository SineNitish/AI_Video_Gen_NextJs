const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a script to generate 30 seconds video on topic : Interesting historical story along with ai image prompt in Realistic format for each scene and give me result in JSON format with Image Prompt and Content text as field "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"video_script\": [\n    {\n      \"scene\": 1,\n      \"duration\": 5,\n       \"image_prompt\": \"A bustling marketplace in ancient Rome, with vendors selling various goods, citizens in togas, and Roman architecture in the background. Realistic, sunny, high-resolution.\",\n      \"content\": \"Did you know that ancient Roman houses lacked street numbers? Imagine trying to find someone’s house!\"\n    },\n    {\n      \"scene\": 2,\n      \"duration\": 5,\n      \"image_prompt\": \"A close-up of a Roman wax writing tablet (tabula) and stylus, with partially erased Latin writing on the tablet. Realistic, focused, detailed.\",\n      \"content\": \"They used wax tablets and styluses for note-taking and everyday writing.\"\n    },\n    {\n      \"scene\": 3,\n      \"duration\": 5,\n      \"image_prompt\": \"A majestic library in ancient Alexandria, filled with scrolls, scholars reading, and sunlight streaming through tall windows. Realistic, grand, warm lighting.\",\n     \"content\": \"The library of Alexandria was a treasure trove of knowledge, holding thousands of scrolls before being destroyed.\"\n    },\n     {\n      \"scene\": 4,\n      \"duration\": 5,\n       \"image_prompt\": \"A Viking longship sailing through a stormy sea, with dark clouds, strong winds, and Viking warriors on board. Realistic, dramatic, intense.\",\n      \"content\": \"Vikings didn't just raid; they were incredible explorers, sailing across vast oceans.\"\n    },\n      {\n      \"scene\": 5,\n      \"duration\": 5,\n       \"image_prompt\": \"A close-up of a Viking rune stone, with intricate carvings and ancient symbols. Realistic, aged, textured.\",\n      \"content\": \"They also had their own alphabet called runes, used for carvings and inscriptions.\"\n    },\n      {\n      \"scene\": 6,\n      \"duration\": 5,\n     \"image_prompt\": \"A vibrant scene of a medieval manuscript being illuminated by a monk, with intricate details and bright colors. Realistic, detailed, focused.\",\n      \"content\": \"And did you know monks in the middle ages illuminated books by hand, which took years to complete!\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
