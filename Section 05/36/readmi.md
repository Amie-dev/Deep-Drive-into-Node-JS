# 🚀 Introduction to Express.js Framework

---

## 📌 What is Express.js?

- **Express.js** is a **minimal and flexible Node.js web application framework**.  
- It simplifies the process of building **servers, APIs, and web applications** on top of Node.js.  
- Express provides a powerful set of features for handling **HTTP requests, middleware, and routing**.

👉 Think of Express as a layer built on Node.js that makes backend development **faster and easier**.

---

## ⚡ Why Use Express.js?

- Writing a server with pure Node.js `http` module can get complicated when handling multiple routes, parsing data, and managing middleware.  
- Express abstracts these complexities and provides a **clean, organized structure** for server-side code.

---

## 📌 Core Features of Express.js

### 1. **Routing**

- Express provides a simple and powerful way to handle different **HTTP methods (GET, POST, PUT, DELETE, etc.)** and URLs.

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Home Page"));
app.post("/user", (req, res) => res.send("User Created"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```
