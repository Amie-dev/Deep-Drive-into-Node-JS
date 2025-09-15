import express from "express";

const app = express();
app.use(express.json());

const DAIRY = {};
const EMAIL = new Set();

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    if (EMAIL.has(email)) {
        return res.status(400).json({ message: "User with this email already exists" });
    }

    const token = `${Date.now()}`;
    DAIRY[token] = { name, email, password };
    EMAIL.add(email);

    res.status(201).json({ token });
});

app.post("/me", (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: "Token is required" });
    }

    if (!(token in DAIRY)) {
        return res.status(404).json({ message: "User not found" });
    }

    const result = DAIRY[token];
    res.status(200).json({ user: result });
});

app.listen(8000, () => console.log(`Server is listening at port 8000`));
