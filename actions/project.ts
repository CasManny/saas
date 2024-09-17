"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "../db/drizzle";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const createProject = async (formdata: FormData) => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }
  const project = {
    name: formdata.get("name") as string,
    description: formdata.get("description") as string,
    url: formdata.get("url") as string,
    userId: userId,
  };

  const [newProject] = await db
    .insert(projects)
    .values(project)
    .returning({ insertedId: projects.id });
  redirect(`/projects/${newProject.insertedId}/instructions`);
};
