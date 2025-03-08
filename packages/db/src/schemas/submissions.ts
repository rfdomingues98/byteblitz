import { sql } from "drizzle-orm";
import { pgEnum, pgTable } from "drizzle-orm/pg-core";

import { languages } from "./languages";
import { problems } from "./problems";
import { users } from "./users";

export const submissionStatusEnum = pgEnum("submission_status", [
  "pending",
  "running",
  "accepted",
  "wrong_answer",
  "time_limit_exceeded",
  "memory_limit_exceeded",
  "runtime_error",
  "compilation_error",
]);

export const submissions = pgTable("submission", (t) => ({
  id: t.uuid().primaryKey().defaultRandom(),
  problemId: t
    .uuid()
    .references(() => problems.id, { onDelete: "cascade" })
    .notNull(),
  userId: t
    .uuid()
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  languageId: t
    .uuid()
    .references(() => languages.id, { onDelete: "cascade" })
    .notNull(),

  // Submission content
  code: t.text().notNull(),

  // Execution results
  status: submissionStatusEnum().default("pending"),
  executionTime: t.integer(), // in milliseconds, null until completed
  memoryUsed: t.integer(), // in KB, null until completed

  // Test case results JSON example:
  // [
  //   {
  //     "testCaseId": "uuid",
  //     "status": "accepted",
  //     "executionTime": 45,
  //     "memoryUsed": 8432,
  //     "output": "result string",
  //     "errorMessage": null
  //   },
  //   ...
  // ]
  testResults: t.jsonb(),

  // Error information (if any)
  errorMessage: t.text(),

  // Metadata
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
}));
