const express=require('express')

const app=express()


app.get("/",(req,res)=>{
    res.status(200).json("Ok")
})

app.listen(8000,()=>{
    console.log(`server is running at port 8000`);
    
})