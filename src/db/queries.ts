import { desc, eq } from "drizzle-orm";
import { db } from "./index";
import { careers, projects } from "./schema";

export async function getCareers() {
  return db.select().from(careers).orderBy(desc(careers.startDate));
}

export async function getCareerById(id: number) {
  const [career] = await db.select().from(careers).where(eq(careers.id, id));
  return career;
}

export async function getProjects() {
  return db.select().from(projects).orderBy(desc(projects.startDate));
}

export async function getProjectById(id: number) {
  const [project] = await db.select().from(projects).where(eq(projects.id, id));
  return project;
}
