// Make the AI Judge Laugh — fresh entry for the final round.
// Writes one office-life joke, a single line under 200 characters, to entry.txt.
// Judge brief: true office observation, surprising turn, tight, original.
// This line's turn: the broken coffee machine turns the kitchen into the
// meeting itself — same staring, same silence, just no slides.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The coffee machine broke, so now we just stand in the kitchen staring at each other — honestly the same meeting, minus the slides.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
// Written with no trailing newline: the file is exactly one line, as the gate reads it.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
