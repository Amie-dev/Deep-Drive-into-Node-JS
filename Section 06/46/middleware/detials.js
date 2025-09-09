const fs=require('node:fs')

exports.detials=(req,res,next)=>{
const content = `\nDate: ${new Date().toISOString()} | path:${req.path} | method:${req.method}`;
    console.log(content);
    
    fs.appendFileSync("log.txt",content,'utf-8')
    next()
}