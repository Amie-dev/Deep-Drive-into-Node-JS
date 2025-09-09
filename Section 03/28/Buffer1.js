const {Buffer}=require('buffer');
const fs =require('fs')

const buf=Buffer.alloc(4)
console.log(buf);
console.log(buf[0]);

const name=Buffer.from("Aminul");
console.log(name);
console.log(name.toString());

const content=fs.readFileSync("text.txt",'utf-8')
console.log(content);

const bufContent=Buffer.from(content)
console.log(bufContent);
console.log(bufContent.toString());


