# 🌐 HTTP Methods and Status Codes in Backend Development

In **backend development**, understanding **HTTP methods** and **status codes** is essential because they define how clients (browsers, mobile apps, APIs) communicate with servers.

---

## 📌 HTTP Methods

HTTP methods describe the **type of action** a client wants to perform on a resource.

| Method   | Description | Example Use Case |
|----------|-------------|------------------|
| **GET**    | Retrieve data from the server (read-only). | Fetch a list of users (`/api/users`). |
| **POST**   | Send data to the server (create a new resource). | Register a new user (`/api/users`). |
| **PUT**    | Update an **entire resource** on the server. | Update all user details (`/api/users/1`). |
| **PATCH**  | Update **part of a resource** on the server. | Update only a user's email (`/api/users/1`). |
| **DELETE** | Remove a resource from the server. | Delete a user (`/api/users/1`). |
| **HEAD**   | Same as GET, but returns only headers (no body). | Check if a resource exists. |
| **OPTIONS**| Describes allowed methods for a resource. | Used in CORS (Cross-Origin Resource Sharing). |

---

## 📌 HTTP Status Codes

Status codes are **3-digit numbers** returned by the server in response to a client request.  
They indicate whether the request was successful, failed, or requires further action.

### 🔹 1xx: Informational

- **100 Continue** → Request received, continue sending data.
- **101 Switching Protocols** → Protocol change request accepted.

### 🔹 2xx: Success

- **200 OK** → Request successful.
- **201 Created** → Resource successfully created.
- **204 No Content** → Request successful, but no data to return.

### 🔹 3xx: Redirection

- **301 Moved Permanently** → Resource moved to a new URL.
- **302 Found** → Temporary redirect.
- **304 Not Modified** → Cached version can be used.

### 🔹 4xx: Client Errors

- **400 Bad Request** → Invalid syntax in request.
- **401 Unauthorized** → Authentication required or failed.
- **403 Forbidden** → User not allowed to access resource.
- **404 Not Found** → Requested resource not found.
- **409 Conflict** → Conflict in resource state (e.g., duplicate data).

### 🔹 5xx: Server Errors

- **500 Internal Server Error** → Generic server-side error.
- **502 Bad Gateway** → Server received invalid response from another server.
- **503 Service Unavailable** → Server temporarily unavailable (maintenance/overload).
- **504 Gateway Timeout** → Server did not respond in time.

---

## 📂 Example in Backend Development (Express.js)

```javascript
const express = require("express");
const app = express();

app.use(express.json());

// GET request
app.get("/users", (req, res) => {
  res.status(200).json({ message: "Fetched all users" });
});

// POST request
app.post("/users", (req, res) => {
  res.status(201).json({ message: "User created successfully" });
});

// PUT request
app.put("/users/:id", (req, res) => {
  res.status(200).json({ message: `User ${req.params.id} updated` });
});

// DELETE request
app.delete("/users/:id", (req, res) => {
  res.status(204).send(); // No content
});

app.listen(3000, () => console.log("Server running on port 3000"));
```
