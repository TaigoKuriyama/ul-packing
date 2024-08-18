'use client';

import { experimental_useObject as useObject } from 'ai/react';
import { z } from 'zod';
import { Button } from "@/components/ui/button";

const poemSchema = z.object({
  poem: z.string(),
});

export default function Page() {
  const { submit, isLoading, object, stop } = useObject({
    api: '/api/google',
    schema: poemSchema,
  });

  const handleSubmit = async () => {
    if (isLoading) {
      stop();
    } else {
      submit({ prompt: '猫に関する1000文字程度の長文の詩を書いてください' });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 m-4">
      <Button onClick={handleSubmit}>
        {isLoading ? 'STOP' : '詩を生成'}
      </Button>
      <div className="mt-4">
        {object?.poem ? <p>{object.poem}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
}