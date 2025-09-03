# ⚡ Node.js vs Browser JavaScript Engine

JavaScript can run in two main environments: **Web Browsers** and **Node.js**.  
Both use **JavaScript engines** (like V8), but they serve different purposes and provide different features.

---

## 🌐 What is a Browser JavaScript Engine?

- A **JavaScript engine** in browsers executes JavaScript code inside web pages.  
- Examples:
  - **V8** → Google Chrome, Edge
  - **SpiderMonkey** → Firefox
  - **JavaScriptCore** → Safari
- Provides access to **Web APIs** (like DOM, localStorage, fetch, etc.).

---

## 🟢 What is Node.js?

- **Node.js** is a runtime environment built on the **V8 engine** (used by Chrome).  
- It allows JavaScript to run **outside of the browser**.  
- Provides access to **system-level APIs** (like file system, networking, OS).

---

## 🔑 Key Differences Between Node.js and Browser JS

| Feature | Browser JavaScript Engine | Node.js |
|---------|---------------------------|---------|
| **Purpose** | Runs JavaScript in the browser for client-side interactivity | Runs JavaScript outside the browser for server-side and system tasks |
| **APIs Available** | DOM, BOM, fetch, localStorage, alert, document, window | File system (`fs`), HTTP modules, process, OS, streams |
| **Global Object** | `window` (or `self` in web workers) | `global` |
| **Module System** | Uses ES Modules (`import/export`) | Supports CommonJS (`require/module.exports`) and ES Modules |
| **File System Access** | ❌ Not allowed (for security reasons) | ✅ Full access via `fs` module |
| **Networking** | Limited (XHR, fetch, WebSockets) | Full control over TCP, HTTP, HTTPS, UDP, WebSockets |
| **Use Case** | Building interactive websites, handling UI | Building servers, APIs, CLI tools, real-time apps |
| **Security** | Sandboxed (cannot access OS directly) | Direct OS access (requires proper security measures) |

---

## 🚀 Example Comparison

### Browser JavaScript

```javascript
// Running in browser
console.log("Hello from Browser JS!");
document.body.style.backgroundColor = "lightblue";
```

```javascript
// Running in Node.js
const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from Node.js!");
console.log("File created successfully!");
```
