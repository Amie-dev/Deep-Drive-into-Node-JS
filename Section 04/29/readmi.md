# 🌐 Introduction to HTTP Protocol and Its Role in Web Communications

## 📌 What is HTTP?

- **HTTP (HyperText Transfer Protocol)** is the foundation of communication on the **World Wide Web (WWW)**.  
- It is a **protocol** (set of rules) that defines how messages are **formatted and transmitted** between:
  - **Clients** (e.g., browsers, mobile apps)  
  - **Servers** (e.g., web servers, APIs)  

👉 In simple terms, HTTP allows your browser to request a web page from a server, and the server sends the page back.

---

## ⚡ How HTTP Works?

1. A **client** (browser) sends an **HTTP request** to a server.  
2. The **server** processes the request and sends back an **HTTP response**.  
3. The response usually contains:
   - A **status code** (e.g., 200 OK, 404 Not Found)  
   - The **requested resource** (HTML, JSON, image, etc.)  

Example of an HTTP request:

```t
HTTP/1.1 200 OK
Content-Type: text/html

<html> <body>Hello, world!</body> </html> 
```
