const { pgTable, serial, varchar } = require("drizzle-orm/pg-core");

const userTable = pgTable("user", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
});

module.exports = { userTable };
