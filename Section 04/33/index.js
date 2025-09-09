const http=require('http');
const server=http.createServer(function(req,res){
    console.log("Incoming");
    res.writeHead(200).end("Thanks for visiting")
})

server.listen(8000,()=>{
    console.log(` Server is listen at port 8000`);
    
})