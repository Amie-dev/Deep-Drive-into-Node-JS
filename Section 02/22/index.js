const fs = require("fs");


const fs = require("fs");

// Synchronous read (Blocking)
const data = fs.readFileSync("file.txt", "utf8");
console.log("File Content:", data);

console.log("This line will run only after file is read.");

// Asynchronous read (Non-Blocking)
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File Content:", data);
});

console.log("This line runs immediately, before file read finishes.");