
import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const userTable=pgTable("users",{
    id:uuid().primaryKey().defaultRandom(),
    name:varchar({length:255}).notNull(),
    email:varchar({length:255}).notNull(),
    password:text().notNull(),
    salt:text()
})

export const userSessions=pgTable("user_session",{
    id:uuid().primaryKey().defaultRandom(),
    userId:uuid().references(()=>userTable.id),
    createAt:timestamp().defaultNow().notNull()
})
