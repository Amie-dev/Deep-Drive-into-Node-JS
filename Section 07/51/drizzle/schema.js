import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const Book = pgTable("book", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  publishedYear: integer("published_year"),
  genre: varchar("genre", { length: 100 }),
});
