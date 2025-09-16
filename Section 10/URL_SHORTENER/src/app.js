import express   from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import userRouter from './router/user.route.js';
import urlRouter from './router/url.router.js';

const app=express();

app.use(express.json());

app.use(cookieParser());



app.use("/api/v1",userRouter);
app.use("/api/v1",urlRouter);


export default app