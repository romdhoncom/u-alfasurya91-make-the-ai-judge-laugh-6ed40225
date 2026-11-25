// Make the AI Judge Laugh — make.fun entry
// One joke about office life, a single line to be read aloud in one
// breath, written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The joke: the office's most passive-aggressive phrase, "per my last
// email", planted in an out-of-office reply, so the passive-aggression
// keeps working while its author is on holiday.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I put 'per my last email' in my out-of-office reply so people can be passive-aggressive with me even while I am on holiday.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-199`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
