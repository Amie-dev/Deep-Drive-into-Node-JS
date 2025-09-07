const fs=require('node:fs')

exports.detials=(req,res,next)=>{
const content=`\nDate:${ Date.now()} | Path:${req.path} | Method:${req.method}`
fs.appendFileSync("log.txt",content,"utf-8")
}

exports.error=(err,req,res,next)=>{
    console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
};
