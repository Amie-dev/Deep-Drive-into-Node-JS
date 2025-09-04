# 🎉 Understanding Events in Node.js

## 📌 What are Events in Node.js?

- In Node.js, an **event** is an action or occurrence (like a request, file read, or timer) that the system tells the program about.  
- Node.js uses the **event-driven programming model**, where functions (called **listeners**) are executed when a specific event happens.  

Example:  

- A user clicks a button (event → "click").  
- A file finishes reading (event → "end").  
- A server receives a request (event → "request").  

---

## 🟢 Node.js EventEmitter

- Node.js has a built-in **`events` module**.  
- It provides the `EventEmitter` class, which is used to create, fire, and listen for events.  

```javascript
const EventEmitter = require("events");
const event = new EventEmitter();

// Listener
event.on("greet", () => {
  console.log("Hello, Node.js Event!");
});

// Emit event
event.emit("greet");
```

📌 Why are Events Important?

Non-Blocking I/O

Events allow Node.js to handle multiple operations without waiting.

Example: Reading a file while also listening for HTTP requests.

Scalability

The event-driven model helps Node.js handle thousands of concurrent connections efficiently.

Decoupling Code

Events let different parts of the application communicate without being tightly connected.

Real-Time Applications

Events power chat apps, gaming servers, live notifications, and streaming apps.
