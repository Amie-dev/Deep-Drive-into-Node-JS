const chatRoom=require("./chatRoom.js");

const chat=new chatRoom

chat.on("join",(user)=>{
    console.log(`${user} has Joind in Chat`);
    
})
chat.on("leave",(user)=>{
    console.log(`${user} has left`);
    
})
chat.on("message",(user,msg)=>{
    console.log(`${user} :${msg}`);
    
})


chat.join("Amie")
chat.join("Reki")

chat.sendMessage('Amie',"Helle Everyone Form Amie Side")
chat.sendMessage('Reki',"Helle Everyone Form Reki Side")

chat.leave("Amie")
chat.sendMessage("Amie","Amie is left")
chat.leave("Reki")
chat.sendMessage("Reki","Nothing")
