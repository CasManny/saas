import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text('description').notNull(),
    url: text("url").notNull(),
    userId: text('user_id').notNull()
})