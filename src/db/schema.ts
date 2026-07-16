import { date, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const careers = pgTable("careers", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  title: text("title").notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  schoolName: text("school_name").notNull(),
  degree: text("degree"),
  major: text("major"),
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  tags: text("tags").array(),
  link: text("link"),
  repo: text("repo"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
