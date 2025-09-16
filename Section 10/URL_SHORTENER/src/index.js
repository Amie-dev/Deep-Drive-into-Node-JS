import app from "./app.js";
import 'dotenv/config';
import errorHandler from "./middleware/error.js";

app.use(errorHandler)
const port=process.env.PORT
app.listen(port,()=>console.log(`Server is run and up at port ${port}`))