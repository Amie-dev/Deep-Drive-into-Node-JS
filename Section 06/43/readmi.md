
# 🚀 Advanced Middleware Concepts & Custom Middleware in Express.js

---

## 📌 Recap: What is Middleware?

Middleware functions are functions that **sit between the client request and the server response**.  
They can **modify requests, responses, enforce rules, or terminate the cycle**.

---

## 📌 Advanced Middleware Concepts

### 1. **Chaining Multiple Middleware**

- Multiple middleware functions can be executed in sequence before reaching the route handler.

```javascript
app.get(
  "/profile",
  logRequest,
  authenticateUser,
  (req, res) => {
    res.send(`Welcome ${req.user.name}`);
  }
);
````

---

### 2. **Conditional Middleware Execution**

- Middleware can be executed only under certain conditions.

```txt

```

```javascript
const checkAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
};

app.get("/admin", checkAdmin, (req, res) => {
  res.send("Welcome Admin!");
});
```

---

### 3. **Error-Handling Middleware**

- Special middleware with **4 parameters** `(err, req, res, next)` for centralized error handling.

```javascript
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});
```

---

### 4. **Asynchronous Middleware**

- Middleware can be **async** (returning promises).
- Use `try...catch` to handle errors properly.

```javascript
const asyncMiddleware = (handler) => (req, res, next) =>
  Promise.resolve(handler(req, res, next)).catch(next);

app.get(
  "/data",
  asyncMiddleware(async (req, res) => {
    const data = await fetchDataFromDB();
    res.json(data);
  })
);
```

---

### 5. **Third-Party Middleware**

- Express supports third-party middleware for common tasks:

  - **`morgan`** → Logging
  - **`cors`** → Handle cross-origin requests
  - **`helmet`** → Secure HTTP headers
  - **`express-validator`** → Request validation

Example:

```javascript
const morgan = require("morgan");
app.use(morgan("dev")); // Logs all requests
```

---

## 📌 Creating Custom Middleware

### Example 1: Logging Middleware

```javascript
const logRequest = (req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
};

app.use(logRequest);
```

---

### Example 2: Authentication Middleware

```javascript
const authenticateUser = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token === "mySecretToken") {
    req.user = { id: 1, name: "Aminul", role: "admin" };
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

app.get("/dashboard", authenticateUser, (req, res) => {
  res.send(`Hello ${req.user.name}, welcome to Dashboard!`);
});
```

---

### Example 3: Validation Middleware

```javascript
const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email are required" });
  }
  next();
};

app.post("/users", validateUser, (req, res) => {
  res.status(201).json({ message: "User created", user: req.body });
});
```

---

### Example 4: Role-Based Access Control (RBAC)

```javascript
const authorize = (role) => (req, res, next) => {
  if (req.user && req.user.role === role) {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Access Denied" });
  }
};

app.get("/admin", authenticateUser, authorize("admin"), (req, res) => {
  res.send("Admin Panel");
});
```

---

## 📊 Middleware Execution Flow

```txt
Request → [Middleware 1] → [Middleware 2] → [Route Handler] → Response
```

- Each middleware **must call `next()`** (unless ending the cycle).
- The **order matters** → middleware defined earlier runs first.

---

## 📌 Best Practices for Middleware

✔️ Keep middleware **modular and reusable**.
✔️ Place **general middleware** (`express.json`, logging) at the top.
✔️ Use **route-specific middleware** for auth/validation.
✔️ Always handle **errors gracefully** with centralized middleware.
✔️ Avoid **blocking operations** in middleware.

---

## 🎯 Conclusion

- Middleware is the **core of Express.js applications**.
- Advanced concepts like **chaining, conditional execution, async handling, and error middleware** make apps powerful and scalable.
- Custom middleware allows you to implement **logging, authentication, validation, and role-based access control**.
