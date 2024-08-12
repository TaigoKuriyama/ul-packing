import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function GET(request: Request) {
  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_AI_API_KEY
  });

  const { text } = await generateText({
    model: google('models/gemini-pro'),
    prompt: 'Write a poem about a cat sitting in a window.',
  });

  return new Response(JSON.stringify({ poem: text }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}