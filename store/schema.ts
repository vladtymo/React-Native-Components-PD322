import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("items", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull()
});

// Export Task to use as an interface in your app
export type Task = typeof usersTable.$inferSelect;