import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  industry: z.string(),
  role: z.string(),
  achievements: z.array(z.string()),
});

export const experienceSchema = z.object({
  id: z.string(),
  position: z.string(),
  company: z.string(),
  duration: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  projects: z.array(projectSchema),
});

export const skillCategorySchema = z.object({
  id: z.string(),
  title: z.string(),
  icon: z.string(),
  color: z.string(),
  skills: z.array(z.object({
    name: z.string(),
    icon: z.string(),
  })),
});

export const educationSchema = z.object({
  id: z.string(),
  degree: z.string(),
  stream: z.string().optional(),
  institution: z.string(),
  board: z.string(),
  year: z.string(),
  score: z.string(),
  scoreType: z.string(), // CGPA, percentage
});

export const contactInfoSchema = z.object({
  name: z.string(),
  title: z.string(),
  phone: z.string(),
  email: z.string(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

export const resumeDataSchema = z.object({
  personalInfo: contactInfoSchema,
  experience: z.array(experienceSchema),
  skills: z.array(skillCategorySchema),
  education: z.array(educationSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type Education = z.infer<typeof educationSchema>;
export type ContactInfo = z.infer<typeof contactInfoSchema>;
export type ResumeData = z.infer<typeof resumeDataSchema>;
