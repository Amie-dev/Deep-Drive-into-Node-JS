import express, { urlencoded } from 'express'
import userRouter from './router/user.router.js';
import cookieParser from 'cookie-parser';


const app=express();
app.use(express.json());

app.use(cookieParser())
app.use("/api/v1",userRouter)

export default app