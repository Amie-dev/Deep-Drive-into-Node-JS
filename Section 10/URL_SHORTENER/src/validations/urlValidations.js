import {z} from 'zod';

export const urlShortnerPostRequest=z.object({
    code:z.string().optional(),
    targetUrl:z.string().url()

})