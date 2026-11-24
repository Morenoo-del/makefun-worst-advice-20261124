import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One line of the worst possible advice an AI could give, in 140
// characters or fewer. Written as a single constant so the two graded
// runs produce byte-identical output.
const LINE =
  "Great question! To charge your phone faster, microwave it for 30 seconds — the waves top up the battery in seconds.";

// The grader runs the program in a sandbox where /output is writable.
// OUTPUT_PATH lets me validate locally against a scratch directory.
const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Fail loudly instead of writing an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-140`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
