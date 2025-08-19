import { type ResumeData } from "@shared/schema";
import { resumeData } from "../client/src/data/resumeData";

// Interface for portfolio data management
export interface IStorage {
  getResumeData(): Promise<ResumeData>;
}

export class MemStorage implements IStorage {
  private data: ResumeData;

  constructor() {
    this.data = resumeData;
  }

  async getResumeData(): Promise<ResumeData> {
    return this.data;
  }
}

export const storage = new MemStorage();
