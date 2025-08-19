import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio API routes
  app.get("/api/resume", async (req, res) => {
    try {
      const resumeData = await storage.getResumeData();
      res.json(resumeData);
    } catch (error) {
      console.error("Error fetching resume data:", error);
      res.status(500).json({ error: "Failed to fetch resume data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
