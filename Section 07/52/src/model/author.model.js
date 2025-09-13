import { uuid, pgTable, varchar } from "drizzle-orm/pg-core";

export const authorsTable = pgTable("authors", {
  id: uuid().primaryKey().defaultRandom(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 50 }),
  email: varchar({ length: 255 }).notNull().unique(),
});
