import express from "express";
import bookRouter from "./router/book.router.js";

const app=express()
app.use(express.json());

app.use("/api/v1",bookRouter)

export default app