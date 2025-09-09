const fs = require("fs");

// Reading file as buffer
fs.readFile("example.txt", (err, data) => {
  if (err) throw err;
  console.log("Buffer Data:", data); 
  console.log("String Data:", data.toString());
});
