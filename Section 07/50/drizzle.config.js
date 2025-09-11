const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  schema: "./drizzle/schema", // adjust path if needed
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgres://aminul:myPass@127.0.0.1:5432/mydb",
  },
});
