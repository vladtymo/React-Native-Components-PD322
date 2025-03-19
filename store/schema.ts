import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("items", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull()
});
