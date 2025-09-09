# 🌐 Deep Dive into HTTP Request Handling and Server Routing in Node.js

---

## 📌 What is HTTP?

- **HTTP (HyperText Transfer Protocol)** is the **foundation of data communication on the web**.  
- It defines how **clients** (like browsers, mobile apps) and **servers** (like Node.js servers, APIs) exchange information.  
- Communication is based on a **request-response model**:
  - **Client sends an HTTP Request**
  - **Server sends back an HTTP Response**

---

## 📌 What is an HTTP Request?

An **HTTP Request** is a message sent by the client to the server to request data or perform an action.  

### ✅ Structure of an HTTP Request

1. **Request Line** → Defines the method, path, and HTTP version  
   Example:

2. **Headers** → Provide additional metadata (content type, authentication, etc.)

3. **Body (optional)** → Contains data (mainly in POST, PUT, PATCH requests)  
Example: JSON, form data, or files.

---

## 📌 What is an HTTP Request Header?

- **Headers** are key-value pairs in an HTTP request.  
- They give **extra information** about the request or client.  
- They are essential for **authentication, content type, caching, and connection details**.  

### 🔹 Common HTTP Request Headers

| Header | Description | Example |
|--------|-------------|---------|
| **Host** | Specifies the domain of the server | `Host: www.example.com` |
| **User-Agent** | Identifies the client (browser, app) | `User-Agent: Mozilla/5.0` |
| **Content-Type** | Type of request body | `Content-Type: application/json` |
| **Authorization** | Contains credentials for authentication | `Authorization: Bearer <token>` |
| **Accept** | Defines acceptable response formats | `Accept: application/json` |
| **Cookie** | Sends stored cookies with request | `Cookie: sessionId=abc123` |

---

## 📌 Handling HTTP Requests in Node.js (Core `http` Module)

Node.js provides a built-in **`http` module** to create servers and handle requests.

```javascript
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
// Log the request method and URL
console.log(req.method, req.url);

// Handle routes manually
if (req.url === "/" && req.method === "GET") {
 res.writeHead(200, { "Content-Type": "text/plain" });
 res.end("Welcome to the Home Page");
} else if (req.url === "/about" && req.method === "GET") {
 res.writeHead(200, { "Content-Type": "text/plain" });
 res.end("About Page");
} else {
 res.writeHead(404, { "Content-Type": "text/plain" });
 res.end("404 Not Found");
}
});

// Start server
server.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});
```
