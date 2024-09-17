import { auth } from "@clerk/nextjs/server";
import { cache } from "react";
import { db } from "./drizzle";
import { projects, subscriptions } from "./schema";
import { and, eq } from "drizzle-orm";

export const allProjects = cache(async () => {
  const { userId } = auth();
  if (!userId) return;
  const userProjects = await db.query.projects.findMany({
    where: eq(projects.userId, userId),
  });
  return userProjects;
});

export const getProject = cache(async (id: number) => {
  const { userId } = auth();
  if (!userId) return;
  const project = await db.query.projects.findFirst({
    where: and(eq(projects.id, id), eq(projects.userId, userId)),
    with: {
      feedbacks: true
    }
  });
    
  return project
});

export const getUserSubscription = cache(async () => {
  const { userId } = await auth()
  if (!userId) return
  const subscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId)
  })

  const plan = subscription && subscription.subscribed ? "Premium" : "Free"
  return plan

})
