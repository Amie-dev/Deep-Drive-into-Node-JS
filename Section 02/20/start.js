const fs =require('node:fs');


const content=fs.readFileSync('./note.txt','utf-8');

console.log(content);
