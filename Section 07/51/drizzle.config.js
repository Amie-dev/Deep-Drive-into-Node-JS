import { defineConfig } from 'drizzle-kit';
import { configDotenv } from 'dotenv';
configDotenv()
// export default defineConfig({
//   dialect: 'postgresql',
//   out: './drizzle',
//   schema: './drizzle/schema.js',
//   dbCredentials: {
//     host: 'localhost',
//     port: 5433,
//     user: 'postgres',
//     password: 'admin',
//     database: 'mydb',
//   },
// });


export default defineConfig({
  dialect: 'postgresql',
  out: './drizzle',
  schema: './drizzle/schema.js',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
