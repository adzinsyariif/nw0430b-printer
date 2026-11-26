// The Printer Finally Answers
// Writes one line in the office printer's own voice to /output/entry.txt.
// Deterministic: no network, no randomness, no input files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// Revision 1: collapsed the complaint into one counted, literal ledger —
// pages fed, thumps taken, the damp sheet — so the error code lands as
// the printer's reply rather than a grievance with a punchline attached.
// Revision 2: traded the rhetorical question for flat queue logic — the
// error code now *means* something only the machine would decide, which
// keeps the voice literal and passive-aggressive and ends on the threat.
const ENTRY =
  "41,208 sheets fed, 312 thumps taken. ERROR 49 means Job 47 from March prints before yours now.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
