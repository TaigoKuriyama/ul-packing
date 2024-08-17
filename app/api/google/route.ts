import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { poemSchema } from './schema';

export async function POST(request: Request) {
  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_AI_API_KEY,
  });

  const { prompt } = await request.json();
  console.log(prompt);

  const result = await generateObject({
    model: google('models/gemini-1.5-flash-latest'),
    schema: poemSchema,
    prompt: prompt,
  });

  return result.toJsonResponse();;
}