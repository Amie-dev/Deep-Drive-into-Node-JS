import { index, pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { authorsTable } from './author.model.js';
import { sql } from 'drizzle-orm';

export const booksTable = pgTable("books", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  descriptions: text(),
  authorId: uuid().references(() => authorsTable.id),
},
  (table)=>({
    searchIndexOnTitle:index("books_title_search_idx").using(
      "gin",
      sql`to_tsvector('english',${table.title})`
    )
  })
);
