'use client';

import { experimental_useObject as useObject } from 'ai/react';
import { z } from 'zod';

export default function Page() {
  const { object, submit } = useObject({
    api: '/api/google',
    schema: z.object({ poem: z.string() }),
  });
  console.log(object);

  return (
    <div>
      <button onClick={() => submit({ prompt: '猫に関する1000文字程度の長文の詩を書いてください' })}>
        詩を生成
      </button>
      {object?.poem && <p>{object?.poem}</p>}
    </div>
  );
}