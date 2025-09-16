import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { userTable } from "./index.js";

export const urlTable = pgTable("urls", {
  id: uuid("id").primaryKey().defaultRandom(),
  shortCode: varchar("short_code", { length: 255 }).notNull(),
  targetUrl: text("target_url").notNull(),
  userId: uuid("user_id").notNull().references(() => userTable.id),
  createAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});
