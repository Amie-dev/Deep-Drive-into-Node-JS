import { z } from 'zod';

export const userPostSignUp = z.object({
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(5),
});


export const userPostLogIn = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});
