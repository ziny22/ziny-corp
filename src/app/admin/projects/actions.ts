"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { requireUser } from "@/lib/auth";

function projectValuesFromForm(formData: FormData) {
  const endDate = formData.get("endDate") as string;
  const tagsInput = (formData.get("tags") as string).trim();
  const link = (formData.get("link") as string).trim();
  const repo = (formData.get("repo") as string).trim();

  return {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    startDate: formData.get("startDate") as string,
    endDate: endDate ? endDate : null,
    tags: tagsInput
      ? tagsInput
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : null,
    link: link ? link : null,
    repo: repo ? repo : null,
  };
}

export async function createProject(formData: FormData) {
  await requireUser();

  await db.insert(projects).values(projectValuesFromForm(formData));

  revalidatePath("/");
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

export async function updateProject(id: number, formData: FormData) {
  await requireUser();

  await db.update(projects).set(projectValuesFromForm(formData)).where(eq(projects.id, id));

  revalidatePath("/");
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

export async function deleteProject(id: number) {
  await requireUser();

  await db.delete(projects).where(eq(projects.id, id));

  revalidatePath("/");
  revalidatePath("/admin/projects");
}
