import { sql } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("user", (t) => ({
  id: t.uuid().notNull().primaryKey().defaultRandom(),
  clerkId: t.text().notNull().unique(),
  username: t.text().notNull().unique(),
  fullName: t.varchar({ length: 255 }),
  bio: t.text(),
  avatarUrl: t.text(),
  email: t.varchar({ length: 255 }).notNull().unique(),
  emailVerified: t.timestamp({ mode: "date", withTimezone: true }),
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
}));
