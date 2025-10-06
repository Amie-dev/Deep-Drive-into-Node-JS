import express from 'express';
import cookieParser from "cookie-parser";
import "dotenv/config";
import urlRouter from './router/url.router.js';
import userRouter from './router/user.router.js';


const app= express()

const port=process.env.PORT || 4500
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1/url/",urlRouter)
app.use("/api/v1/user/",userRouter)

export default app