import { seed } from "./seed/index";

seed().then(() => process.exit(1)).catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});