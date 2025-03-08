import { db } from "../client";
import { languages } from "../schemas/languages";
import { problems } from "../schemas/problems";
import { insertCodeTemplatesSeed } from "./code-templates";
import { insertLanguagesSeed } from "./languages";
import { insertProblemsSeed } from "./problems";
import { insertProblemTagsSeed, insertTagsSeed } from "./tags";
import { insertTestCasesSeed } from "./test-cases";

export async function seed() {
  console.log("🌱 Starting database seeding...");

  try {
    return await db.transaction(async (tx) => {
      // Step 1: Insert languages
      await insertLanguagesSeed(tx);

      // Step 2: Insert problems
      await insertProblemsSeed(tx);

      // Step 3: Insert tags
      const tagsMap = await insertTagsSeed(tx);

      // Step 4: Get inserted language IDs
      const languageRows = await tx
        .select({
          id: languages.id,
          slug: languages.slug,
        })
        .from(languages);

      const languagesMap = new Map(
        languageRows.map((row) => [row.slug, row.id]),
      );

      // Step 5: Get inserted problem IDs
      const problemRows = await tx
        .select({
          id: problems.id,
          slug: problems.slug,
        })
        .from(problems);

      const problemsMap = new Map(problemRows.map((row) => [row.slug, row.id]));

      // Step 6: Insert problem-tag associations
      await insertProblemTagsSeed(tx, problemsMap, tagsMap);

      // Step 7: Insert test cases using the problem IDs
      await insertTestCasesSeed(tx, problemsMap);

      // Step 8: Insert code templates for all problems and languages
      await insertCodeTemplatesSeed(tx, problemsMap, languagesMap);

      console.log("✅ Seeding completed successfully!");
    });
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  }
}
