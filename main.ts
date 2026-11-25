import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I read 400 Slack messages overnight so the team wouldn't have to, and the summary was: the printer is still broken.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
