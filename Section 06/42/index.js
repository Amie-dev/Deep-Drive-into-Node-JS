const express = require("express");
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log("📩 Request received:", req.method, req.url);
  next(); // move to next middleware
});

// Built-in middleware
app.use(express.json());

// Route-specific middleware
const checkAuth = (req, res, next) => {
  if (req.headers.authorization === "secret") {
    next(); // pass to next handler
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Home Page!");
});

app.get("/dashboard", checkAuth, (req, res) => {
  res.send("Welcome to Dashboard!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));