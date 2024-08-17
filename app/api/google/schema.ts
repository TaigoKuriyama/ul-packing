import { z } from 'zod';

export const poemSchema = z.object({ poem: z.string() });