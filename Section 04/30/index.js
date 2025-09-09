const http=require('http');
const server=http.createServer()

server.listen(8000,()=>{
    console.log(` Server is listen at port 8000`);
    
})