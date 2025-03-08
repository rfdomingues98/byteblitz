import { sql } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const tags = pgTable("tag", (t) => ({
  id: t.uuid().primaryKey().defaultRandom(),
  name: t.text().notNull().unique(),
  description: t.text(),
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
}));
