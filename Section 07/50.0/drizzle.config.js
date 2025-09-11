import { defineConfig } from 'drizzle-kit';

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
    url: 'postgres://postgres:admin@localhost:5433/mydb?sslmode=disable',
  },
});
