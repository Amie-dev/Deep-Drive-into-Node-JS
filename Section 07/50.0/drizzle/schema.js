import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable("users", {
  id: integer().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }), // ✅ This must exist
});