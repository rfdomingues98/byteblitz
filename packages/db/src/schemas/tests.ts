import { sql } from "drizzle-orm";
import { index, pgTable } from "drizzle-orm/pg-core";

import { problems } from "./problems";

export const testCases = pgTable("test_case", (t) => ({
  id: t.uuid().primaryKey().defaultRandom(),
  problemId: t
    .uuid()
    .references(() => problems.id, { onDelete: "cascade" })
    .notNull(),

  // Test case content
  input: t.text().notNull(),
  expectedOutput: t.text().notNull(),
  explanation: t.text(), // Optional explanation for the test case

  // Resource limits (overrides problem defaults if set)
  executionTimeLimit: t.integer(), // in milliseconds, null means use problem default
  memoryLimit: t.integer(), // in MB, null means use problem default

  // Visibility settings
  isPublic: t.boolean().notNull().default(false), // Whether this test is visible to users
  isSample: t.boolean().notNull().default(false), // Whether this is a sample test case

  // Ordering
  orderIndex: t.integer().notNull().default(0), // For ordering test cases

  // Metadata
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
}), (t) => ({
  problemIdIdx: index("idx_test_case_problem_id").on(t.problemId),
}));
