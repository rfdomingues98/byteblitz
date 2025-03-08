import type { Db } from "../client";
import { languages } from "../schemas/languages";

export const languagesSeedData: typeof languages.$inferInsert[] = [
  {
    name: "JavaScript",
    slug: "javascript",
    version: "ES2020",
    displayName: "JavaScript",
    displayOrder: 1,
    isEnabled: true,
  },
  {
    name: "TypeScript",
    slug: "typescript",
    version: "4.9",
    displayName: "TypeScript",
    displayOrder: 2,
    isEnabled: true,
  },
  {
    name: "Python",
    slug: "python",
    version: "3.10",
    displayName: "Python 3",
    displayOrder: 3,
    isEnabled: true,
  },
  {
    name: "Java",
    slug: "java",
    version: "17",
    displayName: "Java",
    displayOrder: 4,
    isEnabled: true,
  },
  {
    name: "C++",
    slug: "cpp",
    version: "C++17",
    displayName: "C++",
    displayOrder: 5,
    isEnabled: true,
  },
  {
    name: "Go",
    slug: "go",
    version: "1.19",
    displayName: "Go",
    displayOrder: 6,
    isEnabled: true,
  },
  {
    name: "Ruby",
    slug: "ruby",
    version: "3.1",
    displayName: "Ruby",
    displayOrder: 7,
    isEnabled: true,
  },
  {
    name: "Rust",
    slug: "rust",
    version: "1.65",
    displayName: "Rust",
    displayOrder: 8,
    isEnabled: true,
  },
];

export const insertLanguagesSeed = async (db: Db) => {
  console.log("🌱 Seeding languages...");
  await db.insert(languages).values(languagesSeedData).onConflictDoNothing();
}; 