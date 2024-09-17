import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text('description').notNull(),
    url: text("url").notNull(),
    userId: text('user_id').notNull()
})

export const projectsRelations = relations(projects, ({ many }) => ({
    feedbacks: many(feedbacks)
}))

export const feedbacks = pgTable('feedbacks', {
    id: serial("id").primaryKey(),
    projectId: integer("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
    userName: text("user_name").notNull(),
    userEmail: text("user_email").notNull(),
    message: text('message').notNull()
})

export const feedbackRelations = relations(feedbacks, ({ one }) => ({
    project: one(projects, {
        fields: [feedbacks.projectId],
        references: [projects.id]
    })
}))

export const subscriptions = pgTable("subscriptions", {
    id: serial("id").primaryKey(),
    userId: text("user_id"),
    stripeCustomerId: text("stripe_customer_id"),
    stripeSubscriptionId: text("stripe_subscription_id"),
    subscribed: boolean("subscribed"),
  });