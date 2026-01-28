import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // === SKILLS ===
  app.get(api.skills.list.path, async (_req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.post(api.skills.create.path, async (req, res) => {
    try {
      const input = api.skills.create.input.parse(req.body);
      const skill = await storage.createSkill(input);
      res.status(201).json(skill);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // === EXPERIENCE ===
  app.get(api.experience.list.path, async (_req, res) => {
    const exp = await storage.getExperience();
    res.json(exp);
  });

  app.post(api.experience.create.path, async (req, res) => {
    try {
      const input = api.experience.create.input.parse(req.body);
      const exp = await storage.createExperience(input);
      res.status(201).json(exp);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // === EDUCATION ===
  app.get(api.education.list.path, async (_req, res) => {
    const edu = await storage.getEducation();
    res.json(edu);
  });

  app.post(api.education.create.path, async (req, res) => {
    try {
      const input = api.education.create.input.parse(req.body);
      const edu = await storage.createEducation(input);
      res.status(201).json(edu);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // === PROJECTS ===
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.projects.create.path, async (req, res) => {
    try {
      const input = api.projects.create.input.parse(req.body);
      const project = await storage.createProject(input);
      res.status(201).json(project);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // === MESSAGES ===
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // === SEED DATA ===
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const skills = await storage.getSkills();
  if (skills.length === 0) {
    await storage.createSkill({ name: "React", category: "Frontend", proficiency: 90 });
    await storage.createSkill({ name: "Three.js", category: "Creative", proficiency: 85 });
    await storage.createSkill({ name: "TypeScript", category: "Languages", proficiency: 88 });
    await storage.createSkill({ name: "Node.js", category: "Backend", proficiency: 80 });
  }

  const exp = await storage.getExperience();
  if (exp.length === 0) {
    await storage.createExperience({
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2023 - Present",
      description: "Leading the frontend team and building immersive web experiences."
    });
    await storage.createExperience({
      title: "Creative Coder",
      company: "Freelance",
      period: "2021 - 2023",
      description: "Developed 3D websites and interactive installations for clients."
    });
  }

  const edu = await storage.getEducation();
  if (edu.length === 0) {
    await storage.createEducation({
      degree: "BSc Computer Science",
      school: "University of Tech",
      year: "2021"
    });
  }

  const projects = await storage.getProjects();
  if (projects.length === 0) {
    await storage.createProject({
      title: "Neon Portfolio",
      description: "A rave-themed portfolio website with 3D elements.",
      techStack: ["React", "Three.js", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
      link: "https://github.com"
    });
    await storage.createProject({
      title: "E-Commerce Dashboard",
      description: "Real-time analytics dashboard for online stores.",
      techStack: ["Next.js", "Drizzle", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "https://github.com"
    });
  }
}
