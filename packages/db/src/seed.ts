import { seed } from "./seed/index";

await seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});

process.exit(0);
