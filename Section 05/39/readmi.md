
# 🌐 Everything About REST API

---

## 📌 What is a REST API?

- **REST (Representational State Transfer)** is an **architectural style** for designing networked applications.  
- A **REST API** is an interface that allows different systems to communicate over HTTP using REST principles.  
- REST APIs are **stateless**, **scalable**, and use **resources** (like users, products, orders) identified by **URLs**.

---

## 📌 Key Principles of REST

1. **Stateless** → Each request contains all information (no client session stored on server).  
2. **Client-Server** → Separation between frontend (client) and backend (server).  
3. **Cacheable** → Responses can be cached for performance.  
4. **Uniform Interface** → Consistent request/response format (JSON, XML, etc.).  
5. **Layered System** → Requests can pass through multiple layers (e.g., load balancers, proxies).  
6. **Resource-Based** → Everything is treated as a "resource" accessible via URL.  

---

## 📌 REST API Resource Example

- `GET /users` → Fetch all users  
- `GET /users/1` → Fetch user with ID 1  
- `POST /users` → Create a new user  
- `PUT /users/1` → Update user with ID 1  
- `DELETE /users/1` → Delete user with ID 1  

---

## 📌 HTTP Methods in REST

| Method   | Purpose | Example |
|----------|---------|---------|
| **GET**    | Retrieve data | `GET /products` |
| **POST**   | Create new resource | `POST /products` |
| **PUT**    | Update entire resource | `PUT /products/5` |
| **PATCH**  | Update partial resource | `PATCH /products/5` |
| **DELETE** | Remove resource | `DELETE /products/5` |

---

## 📌 HTTP Status Codes in REST

| Code | Meaning | Example |
|------|---------|---------|
| **200 OK** | Request successful | GET response |
| **201 Created** | Resource created | POST response |
| **204 No Content** | Request successful, no body | DELETE response |
| **400 Bad Request** | Invalid request | Wrong JSON format |
| **401 Unauthorized** | Authentication required | Missing token |
| **403 Forbidden** | No permission | User role restricted |
| **404 Not Found** | Resource not found | Wrong ID |
| **500 Internal Server Error** | Server failure | DB connection issue |

---

## 📌 REST API Request Structure

A typical **HTTP Request** has:
1. **URL** → `https://api.example.com/users/1`
2. **Method** → GET, POST, PUT, DELETE  
3. **Headers** → Extra info (e.g., Authentication, Content-Type)  
4. **Body (optional)** → Data sent (mostly in POST/PUT)  

Example:

```http
POST /users HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "name": "Aminul",
  "email": "aminul@example.com"
}
````

---

## 📌 REST API Response Structure

A response includes:

1. **Status Code**
2. **Headers**
3. **Body (JSON/XML)**

Example:

```json
{
  "id": 1,
  "name": "Aminul",
  "email": "aminul@example.com"
}
```

---

## 📌 REST API Authentication

1. **API Keys** → Simple but less secure.
2. **Basic Auth** → Username + Password.
3. **Bearer Tokens / JWT** → Common in modern REST APIs.
4. **OAuth2** → Standard for third-party integrations (Google, GitHub login).

---

## 📌 Best Practices for REST API Design

✔️ Use **nouns** in URLs, not verbs → `/users`, `/orders`
✔️ Keep URLs **resource-based** → `/users/1/orders`
✔️ Use **plural nouns** for collections → `/products`
✔️ Use proper **status codes**
✔️ Support **filtering, sorting, pagination** → `/users?page=2&limit=10`
✔️ Document APIs with **Swagger/OpenAPI**
✔️ Secure APIs with **HTTPS & Authentication**

---

## 📌 REST API vs Other APIs

- **REST** → Stateless, resource-based, widely used.
- **SOAP** → XML-based, strict structure, used in enterprise.
- **GraphQL** → Flexible queries, single endpoint.
- **gRPC** → High-performance, binary protocol, used in microservices.

---

## 📊 Example Express REST API

### `server.js`

```javascript
const express = require("express");
const app = express();
app.use(express.json());

// GET all users
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Aminul" }]);
});

// POST create user
app.post("/users", (req, res) => {
  const user = req.body;
  res.status(201).json({ message: "User created", user });
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
```

---

## 🎯 Conclusion

- REST API is a **powerful way** to enable communication between client and server.
- It relies on **HTTP methods, status codes, headers, and JSON responses**.
- Following **best practices** makes APIs scalable, secure, and easy to use.
