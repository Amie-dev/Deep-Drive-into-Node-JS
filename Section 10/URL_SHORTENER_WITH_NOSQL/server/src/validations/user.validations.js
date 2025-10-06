import z from 'zod';

export const userPostRegister=z.object({
    fullName:z.string(),
    username:z.string(),
    email:z.string().email(),
    password:z.string().min(5)

})