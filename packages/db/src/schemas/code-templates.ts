import { sql } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";
import { languages } from "./languages";
import { problems } from "./problems";

// Junction table between problems and languages with template code
export const problemCodeTemplates = pgTable("problem_code_template", (t) => ({
  id: t.uuid().primaryKey().defaultRandom(),
  problemId: t.uuid().references(() => problems.id, { onDelete: "cascade" }).notNull(),
  languageId: t.uuid().references(() => languages.id, { onDelete: "cascade" }).notNull(),

  // Initial code template provided to users
  initialCode: t.text().notNull(),

  // Metadata
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
})); 