// One Line, One Laugh — writes a single original joke line to entry.txt.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Fresh one-liner invented for this entry.
const line =
  "My smart fridge just emailed me a grocery list and a note that says 'we need to talk about your 2 a.m. snacking.'";

function safeChmod(path: string, mode: number): void {
  try {
    chmodSync(path, mode);
  } catch {
    // best effort; do not fail the run over permissions
  }
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
safeChmod(outPath, 0o644);
