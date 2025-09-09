const fs= require('fs');

// console.log(fs);

const content=fs.readFileSync('note.txt',"utf-8")

console.log(`Content:\n${content}`);


