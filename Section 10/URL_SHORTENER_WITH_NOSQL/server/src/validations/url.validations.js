import z from "zod";

export const  urlPostCreate=z.object({
    targetUrl:z.url(), 
    shortCode:z.string().optional()
})