exports.error=(err,req,res,next)=>{
    res.json({
        message:err.message
    })
    
}