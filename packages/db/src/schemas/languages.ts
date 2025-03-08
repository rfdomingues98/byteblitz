import { sql } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

// Table for supported programming languages
export const languages = pgTable("language", (t) => ({
  id: t.uuid().primaryKey().defaultRandom(),
  name: t.text().notNull().unique(), // e.g., "JavaScript", "Python", "Java"
  slug: t.text().notNull().unique(), // e.g., "javascript", "python", "java"
  version: t.text().notNull(), // e.g., "ES2020", "3.9", "11"

  // Display options
  displayName: t.text().notNull(), // Friendly name for display
  displayOrder: t.integer().notNull().default(0), // For ordering in UI
  isEnabled: t.boolean().notNull().default(true),

  // Metadata
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
})); 