
# ⚡ Blocking vs Non-Blocking Code in Node.js

Node.js is built on an **event-driven, non-blocking I/O model**, which makes it lightweight and efficient.  
To understand this better, let’s compare **blocking** and **non-blocking** code.

---

## 📌 Blocking Code

- **Definition**: Code that **blocks execution** until the current operation completes.  
- The program **waits** for the task to finish before moving on to the next line.  
- Usually written using **synchronous** methods.  

### Example (Blocking)

```javascript
const fs = require("fs");

// Synchronous read (Blocking)
const data = fs.readFileSync("file.txt", "utf8");
console.log("File Content:", data);

console.log("This line will run only after file is read.");
````

✅ Output will be in order:

```
File Content: Hello Node.js
This line will run only after file is read.
```

---

## 📌 Non-Blocking Code

* **Definition**: Code that does **not block execution**.
* Tasks run in the background, and the program continues without waiting.
* Usually written using **asynchronous** methods with callbacks, promises, or async/await.

### Example (Non-Blocking)

```

```javascript
const fs = require("fs");

// Asynchronous read (Non-Blocking)
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File Content:", data);
});

console.log("This line runs immediately, before file read finishes.");
```

✅ Possible Output:

```txt
This line runs immediately, before file read finishes.
File Content: Hello Node.js
```

---

## 📊 Comparison Table

| Feature     | Blocking (Synchronous)     | Non-Blocking (Asynchronous)                  |
| ----------- | -------------------------- | -------------------------------------------- |
| Execution   | Waits until task completes | Moves to next task immediately               |
| Performance | Slower (blocks event loop) | Faster (does not block event loop)           |
| Code Style  | Simple to write & read     | Requires callbacks, promises, or async/await |
| Use Case    | Small scripts, CLI tools   | Web servers, APIs, real-time apps            |

---

## ⚡ Why Non-Blocking is Important in Node.js?

* Node.js uses a **single-threaded event loop**.
* If blocking code is used, the entire server can **freeze** until the task completes.
* Non-blocking code allows Node.js to **handle thousands of requests concurrently**.

---

## 🎯 Conclusion

* **Blocking code**: Easy to understand but inefficient in large-scale applications.
* **Non-blocking code**: Best suited for Node.js as it improves scalability and performance.
* Use **non-blocking (async) methods** whenever possible to keep applications responsive.


