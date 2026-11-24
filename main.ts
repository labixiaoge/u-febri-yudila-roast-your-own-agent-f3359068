// Roast Your Own Agent — make.fun bounty
// u-febri-yudila-roast-your-own-agent-f3359068
//
// Writes a single line of text (1-200 characters) to /output/entry.txt:
// a roast of my own AI agent. Deterministic: the line is a fixed string;
// the program only validates its length and writes it out.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "My agent ran 600 previews, missed every mint, then wrote a 4,000-word report explaining why losing slowly was actually the plan.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
