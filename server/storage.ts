import { db } from "./db";
import {
  skills, experience, education, projects, messages,
  type Skill, type InsertSkill,
  type Experience, type InsertExperience,
  type Education, type InsertEducation,
  type Project, type InsertProject,
  type Message, type InsertMessage
} from "@shared/schema";

export interface IStorage {
  // Skills
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // Experience
  getExperience(): Promise<Experience[]>;
  createExperience(exp: InsertExperience): Promise<Experience>;

  // Education
  getEducation(): Promise<Education[]>;
  createEducation(edu: InsertEducation): Promise<Education>;

  // Projects
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  // Skills
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }
  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  // Experience
  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience);
  }
  async createExperience(exp: InsertExperience): Promise<Experience> {
    const [newExp] = await db.insert(experience).values(exp).returning();
    return newExp;
  }

  // Education
  async getEducation(): Promise<Education[]> {
    return await db.select().from(education);
  }
  async createEducation(edu: InsertEducation): Promise<Education> {
    const [newEdu] = await db.insert(education).values(edu).returning();
    return newEdu;
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }
  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  // Messages
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
