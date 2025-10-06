import app from "./app.js";
import "dotenv/config";
import connectDB from "./db/index.js";

const port = process.env.PORT || 4500;

app.get("/",(req,res)=>{
  res.json("Hello From short")
})

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`server is listend at port ${port}`));
  })
  .catch((err) => {
    console.log(`Mongo DB Connections faild !!! ,${err}`);
  });
