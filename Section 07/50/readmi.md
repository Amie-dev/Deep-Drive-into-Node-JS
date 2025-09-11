# 🚀 Setting up Drizzle ORM with PostgreSQL in a JavaScript Project

This guide walks you through setting up [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL using JavaScript (Node.js).

---

## 🧰 Prerequisites

- Node.js (v18 or later)
- PostgreSQL installed and running
- A basic Node.js project initialized (`npm init -y`)

---

## 📦 Step 1: Install Required Packages

```bash
npm install drizzle-orm pg dotenv
npm install --save-dev drizzle-kit
````

* `drizzle-orm`: The core ORM
* `pg`: PostgreSQL client for Node.js
* `dotenv`: Load environment variables
* `drizzle-kit`: CLI tool for Drizzle

---

## ⚙️ Step 2: Configure Environment Variables

Create a `.env` file in your root:

```env
DATABASE_URL=postgres://username:password@localhost:5432/my_database
```

Replace:

* `username` with your PostgreSQL user
* `password` with your password
* `my_database` with your database name

---

## 🏗️ Step 3: Setup Drizzle Config

Create a `drizzle.config.js` file in your project root:

```js
// drizzle.config.js
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema",          // folder for table definitions
  out: "./drizzle",            // output folder for generated SQL
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL
  }
});
```

> 💡 Make sure `type` is set to `"module"` in `package.json` to use `import`.

---

## 📁 Step 4: Define Your Schema

Create a folder called `schema` and inside it, create a file like `schema/schema.js`:

```js
// schema/schema.js
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});
```

---

## ⚙️ Step 5: Generate SQL & Run Migrations

First, generate SQL migration scripts:

```bash
npx drizzle-kit push
```

This will:

* Create SQL files in the `drizzle/` folder
* Apply the schema to your PostgreSQL database

> 🛠 Make sure PostgreSQL is running and the `DATABASE_URL` is correct.

---

## 🔌 Step 6: Connect to the Database

Create a file like `db.js` to setup Drizzle:

```js
// db.js
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import * as schema from "./schema/schema.js";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
```

---

## ✅ Step 7: Using Drizzle ORM

Create or update a file like `index.js` to interact with the DB:

```js
// index.js
import { db } from "./db.js";
import { users } from "./schema/schema.js";

const main = async () => {
  // Insert a user
  await db.insert(users).values({ name: "Alice", email: "alice@example.com" });

  // Get all users
  const allUsers = await db.select().from(users);
  console.log(allUsers);
};

main();
```

---

## 🧪 Optional: Enable Type Safety with JSDoc (No TypeScript)

If you want IntelliSense in JavaScript, use JSDoc:

```js
/**
 * @typedef {import("drizzle-orm").InferModel<typeof users>} User
 */
```

---

## 📁 Project Structure

```
.
├── .env
├── db.js
├── index.js
├── drizzle.config.js
├── schema
│   └── schema.js
├── drizzle
│   └── (generated migration files)
```

---

## 🏁 Done!

You now have a fully working Drizzle + PostgreSQL setup in JavaScript. 🎉

For more advanced usage, refer to the [Drizzle Docs](https://orm.drizzle.team/docs/introduction).
