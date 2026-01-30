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
    // Languages
    await storage.createSkill({ name: "Python", category: "Languages", proficiency: 95 });
    await storage.createSkill({ name: "Java", category: "Languages", proficiency: 85 });
    await storage.createSkill({ name: "C", category: "Languages", proficiency: 80 });
    await storage.createSkill({ name: "JavaScript", category: "Languages", proficiency: 88 });

    // ML/AI
    await storage.createSkill({ name: "TensorFlow", category: "ML/AI", proficiency: 90 });
    await storage.createSkill({ name: "OpenCV", category: "ML/AI", proficiency: 88 });
    await storage.createSkill({ name: "Machine Learning", category: "ML/AI", proficiency: 92 });
    await storage.createSkill({ name: "Deep Learning", category: "ML/AI", proficiency: 90 });
    await storage.createSkill({ name: "Computer Vision", category: "ML/AI", proficiency: 88 });

    // Tools
    await storage.createSkill({ name: "Git/GitHub", category: "Tools", proficiency: 90 });
    await storage.createSkill({ name: "Jupyter", category: "Tools", proficiency: 85 });
    await storage.createSkill({ name: "VS Code", category: "Tools", proficiency: 95 });
    await storage.createSkill({ name: "Docker", category: "Tools", proficiency: 75 });
    await storage.createSkill({ name: "Linux", category: "Tools", proficiency: 80 });

    // Core
    await storage.createSkill({ name: "Data Structures & Algorithms", category: "Core", proficiency: 88 });
    await storage.createSkill({ name: "OOP", category: "Core", proficiency: 90 });
    await storage.createSkill({ name: "Database Management", category: "Core", proficiency: 85 });
    await storage.createSkill({ name: "Agile Development", category: "Core", proficiency: 82 });
  }


  const exp = await storage.getExperience();
  if (exp.length === 0) {
    await storage.createExperience({
      title: "Mobile App Development Intern",
      company: "RunShaw Technologies Pvt. Ltd.",
      period: "Jul–Aug 2024",
      description: "Developed PDF Merger Android app using Kotlin and Android SDK. Implemented secure file access, background processing, and multi-version support. Tech: Kotlin, Android SDK, Flutter, Git"
    });
  }

  const edu = await storage.getEducation();
  if (edu.length === 0) {
    await storage.createEducation({
      degree: "B.E. Computer Science (AI & ML)",
      school: "Maharaja Institute of Technology, Mysore",
      year: "Expected 2027 | CGPA: 8.0+"
    });
  }

  const projects = await storage.getProjects();
  if (projects.length === 0) {
    // 1st - Sign Health (Winner project)
    await storage.createProject({
      title: "Sign Health - Healthcare Communication System",
      description: "🥇 TiE u Pitchfest 2025 Winner. ML-powered real-time sign language interpretation system for healthcare settings. Trained CNN models achieving 85%+ accuracy in gesture recognition, enabling seamless communication between healthcare providers and hearing-impaired patients.",
      techStack: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Deep Learning", "CNN"],
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      link: "https://github.com/NikhilMana"
    });

    // 2nd - E-commerce Shopping Agent (NEW - Your requested position)
    await storage.createProject({
      title: "E-commerce Shopping Agent with AI Assistant",
      description: "Production-ready full-stack e-commerce platform with AI-powered shopping assistance using Google Gemini. Features role-based authentication, real-time order tracking, advanced product filtering, voice search, dark mode, and comprehensive analytics dashboard. Built with FastAPI backend and vanilla JavaScript frontend with 50+ AI agent tools.",
      techStack: ["Python", "FastAPI", "JavaScript", "Google Gemini", "SQLite", "Machine Learning", "REST API", "HTML5", "CSS3"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      link: "https://github.com/NikhilMana"
    });

    // 3rd - Interactive Web Applications
    await storage.createProject({
      title: "Interactive Web Applications",
      description: "Developed responsive, modern web applications with React and JavaScript. Built RESTful APIs with Node.js and Express.js, implementing full-stack solutions with clean architecture and best practices.",
      techStack: ["React", "JavaScript", "Node.js", "Express.js", "HTML5", "CSS3", "REST API"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "https://github.com/NikhilMana"
    });

    // 4th - Hackathon Participant
    await storage.createProject({
      title: "Hackathon Participant - Shrishti & Hacksprint",
      description: "Participated in multiple intensive hackathons including Shrishti (36 hours) and Hacksprint (24 hours), collaborating with teams to build innovative solutions under tight deadlines. Demonstrated problem-solving skills and rapid prototyping abilities.",
      techStack: ["Python", "JavaScript", "Git", "Agile Development", "Team Collaboration"],
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
      link: "https://github.com/NikhilMana"
    });

    // LAST - PDF Merger Android App (Moved to last position)
    await storage.createProject({
      title: "PDF Merger Android App",
      description: "Professional Android application for merging PDF files with secure file access and background processing. Developed during internship at RunShaw Technologies with support for multiple Android versions and optimized performance.",
      techStack: ["Kotlin", "Android SDK", "Material Design", "Git"],
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      link: "https://github.com/NikhilMana"
    });
  }
}
