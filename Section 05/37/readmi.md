# 🚀 Creating Your First Express App with File Structure

---

## 📌 Step 1: Initialize a Node.js Project

First, create a new project folder and initialize it with `npm`.

```bash
mkdir my-express-app
cd my-express-app
npm init -y
npm install express



```

```file

my-express-app/
│
├── node_modules/         # Installed dependencies
├── src/                  # Application source code
│   ├── routes/           # Route files
│   │   └── user.routes.js
│   ├── controllers/      # Route handler logic
│   │   └── user.controller.js
│   ├── app.js            # Express app configuration
│   └── server.js         # Server entry point
│
├── package.json
└── README.md
```
