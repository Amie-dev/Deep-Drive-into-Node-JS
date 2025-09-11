import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle("postgres://postgres:admin@localhost:5433/mydb");
