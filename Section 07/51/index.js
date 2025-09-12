import { configDotenv } from "dotenv";
configDotenv();

import app from "./app.js";

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json("Ok");
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
