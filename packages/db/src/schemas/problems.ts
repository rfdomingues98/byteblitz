import { sql } from "drizzle-orm";
import { index, pgEnum, pgTable, uniqueIndex } from "drizzle-orm/pg-core";

import { tags } from "./tags";

export const difficultyEnum = pgEnum("difficulty", ["easy", "medium", "hard"]);

export const problems = pgTable(
  "problem",
  (t) => ({
    id: t.uuid().primaryKey().defaultRandom(),
    title: t.text().notNull().unique(),
    slug: t.text().notNull().unique(),
    description: t.text().notNull(), // Markdown content
    difficulty: difficultyEnum().default("easy"),
    defaultExecutionTimeLimit: t.integer().notNull().default(10000), // Default in milliseconds
    defaultMemoryLimit: t.integer().notNull().default(5), // Default in MB

    // Statistics
    submissionsCount: t.integer().notNull().default(0),
    successfulSubmissionsCount: t.integer().notNull().default(0),

    // Flags
    isPublished: t.boolean().notNull().default(false),
    isArchived: t.boolean().notNull().default(false),

    // Metadata
    createdAt: t.timestamp().defaultNow().notNull(),
    updatedAt: t
      .timestamp({ mode: "date", withTimezone: true })
      .$onUpdateFn(() => sql`now()`),
  }),
  (t) => ({
    publishedDifficultyIdx: index("idx_published_difficulty").on(
      t.isPublished,
      t.difficulty,
    ),
  }),
);

// Many-to-many relationship with tags
export const problemTags = pgTable(
  "problem_tag",
  (t) => ({
    id: t.uuid().primaryKey().defaultRandom(),
    problemId: t
      .uuid()
      .references(() => problems.id, { onDelete: "cascade" })
      .notNull(),
    tagId: t
      .uuid()
      .references(() => tags.id, { onDelete: "cascade" })
      .notNull(),
  }),
  (t) => ({
    uniqueProblemTag: uniqueIndex("unique_problem_tag").on(
      t.problemId,
      t.tagId,
    ),
  }),
);
