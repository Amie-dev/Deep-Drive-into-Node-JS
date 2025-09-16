import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  firstName: varchar("first_name", { length: 59 }).notNull(),
  lastName: varchar("last_name", { length: 59 }),
  email: varchar("email", { length: 59 }).notNull(),
  password: text("password").notNull(),
  createAt: timestamp("created_at").defaultNow().notNull(), // ✅ fix here
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});
