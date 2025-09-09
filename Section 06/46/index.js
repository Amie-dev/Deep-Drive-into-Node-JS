const express=require('express');
const bookRouter=require('./router/book.router');
const { detials } = require('./middleware/detials');
const { error } = require('./middleware/error');
const app=express();
const port=8000;
app.use(express.json())

app.use(detials)
app.use("/books",bookRouter)

app.get("/",(req,res)=>{
    res.json("Hello From Index")
})
app.use(error)
app.listen(port,()=>{
    console.log(`Server is listen at ${port}`);  
})