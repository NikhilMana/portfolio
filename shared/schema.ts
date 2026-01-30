import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === SKILLS ===
export const skills = sqliteTable("skills", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  category: text("category").notNull(), // e.g., "Frontend", "Backend", "Creative"
  proficiency: integer("proficiency").notNull(), // 0-100
});

// === EXPERIENCE ===
export const experience = sqliteTable("experience", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  company: text("company").notNull(),
  period: text("period").notNull(), // e.g., "2023 - Present"
  description: text("description").notNull(),
});

// === EDUCATION ===
export const education = sqliteTable("education", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  degree: text("degree").notNull(),
  school: text("school").notNull(),
  year: text("year").notNull(),
});

// === PROJECTS ===
export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  techStack: text("tech_stack", { mode: "json" }).$type<string[]>().notNull(),
  link: text("link"),
  imageUrl: text("image_url").notNull(),
});

// === CONTACT MESSAGES ===
export const messages = sqliteTable("messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: integer("created_at", { mode: 'timestamp' }).default(new Date()),
});

// === SCHEMAS ===
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export const insertExperienceSchema = createInsertSchema(experience).omit({ id: true });
export const insertEducationSchema = createInsertSchema(education).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });

// === TYPES ===
export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;

export type Experience = typeof experience.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;

export type Education = typeof education.$inferSelect;
export type InsertEducation = z.infer<typeof insertEducationSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
