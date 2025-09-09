const EventEmitter= require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('greet',()=>{
    console.log('Hello from event');
    
})

eventEmitter.emit('greet');
eventEmitter.emit('greet');

eventEmitter.once("pushnotify",()=>{
    console.log("Once time only this print if call multipe call but this only one print");
    
})

eventEmitter.emit("pushnotify")
eventEmitter.emit("pushnotify")