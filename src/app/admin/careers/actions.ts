"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { careers } from "@/db/schema";
import { requireUser } from "@/lib/auth";

function careerValuesFromForm(formData: FormData) {
  const endDate = formData.get("endDate") as string;
  return {
    company: formData.get("company") as string,
    title: formData.get("title") as string,
    startDate: formData.get("startDate") as string,
    endDate: endDate ? endDate : null,
  };
}

export async function createCareer(formData: FormData) {
  await requireUser();

  await db.insert(careers).values(careerValuesFromForm(formData));

  revalidatePath("/");
  revalidatePath("/admin/careers");
  redirect("/admin/careers");
}

export async function updateCareer(id: number, formData: FormData) {
  await requireUser();

  await db.update(careers).set(careerValuesFromForm(formData)).where(eq(careers.id, id));

  revalidatePath("/");
  revalidatePath("/admin/careers");
  redirect("/admin/careers");
}

export async function deleteCareer(id: number) {
  await requireUser();

  await db.delete(careers).where(eq(careers.id, id));

  revalidatePath("/");
  revalidatePath("/admin/careers");
}
