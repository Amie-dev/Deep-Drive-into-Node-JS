import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { authorsTable } from './author.model.js';

export const booksTable = pgTable("books", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  descriptions: text(),
  authorId: uuid().references(() => authorsTable.id),
});
