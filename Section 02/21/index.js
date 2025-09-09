const fs= require('fs');

const content=fs.readFileSync("note.txt",'utf-8')

const fileCreate=fs.writeFileSync('note1.text',content,'utf-8');
const content1=fs.readFileSync("note1.text",'utf-8')
const appendFile=fs.writeFileSync('note2.text',`${content1} Add Something`,'utf-8');

console.log(content1);

// fs.mkdirSync('game') // create game folder

fs.mkdirSync('game/xyz/a',{recursive:true})

// fs.rmdirSync('game/xyz/a') // remove a folder 
// fs.rmdirSync('game/xyz') // remove xyz folder 
