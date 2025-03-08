import type { ExtractTablesWithRelations } from "drizzle-orm";
import type { PgTransaction } from "drizzle-orm/pg-core";
import type { VercelPgQueryResultHKT } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

import * as schema from "./schema";

export const db = drizzle({
  client: sql,
  schema,
  casing: "snake_case",
});

export type Transaction = PgTransaction<
  VercelPgQueryResultHKT,
  typeof schema,
  ExtractTablesWithRelations<typeof schema>
>;
