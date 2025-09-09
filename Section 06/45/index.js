const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(express.json());




const bookRouter=require('./router/book.route');
const { detials, error } = require('./middleware/Detials');
app.use(detials)
app.use(error)
app.use("/book",bookRouter)
app.get("/",(req,res)=>{
    res.send("Hello")
})
// Start server
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
