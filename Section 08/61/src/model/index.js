import { pgEnum, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const userRoleEnum=pgEnum("user_role",["USER","ADMIN"])

export const userTable=pgTable('users',{
    id:uuid().primaryKey().defaultRandom(),
    fullName:varchar({length:255}).notNull(),
    email:varchar({length:255}).unique().notNull(),
    userName:varchar({length:255}).unique().notNull(),
    password:text().notNull(),
    role:userRoleEnum().notNull().default("USER")
})