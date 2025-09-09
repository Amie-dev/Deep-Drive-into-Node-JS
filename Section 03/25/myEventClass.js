const EventEmitter= require('events');

class Chat extends EventEmitter{
    sendMessage(mag){
        console.log(`Message Send : ${mag}`);
        this.emit("messageRecive",mag)
    }
}

const chat =new  Chat();

chat.on("messageRecive",(mag)=>{
    console.log(`New Message : ${mag}`);
    
})

chat.sendMessage("Hello From Amie")