// Variant C — $100 to max cash in 30 days: verified B2B lead lists.
// Node 22, zero dependencies, no network. Writes one plan to /output/entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const plan =
  "Day 1: pick 3 niches (US roofing firms first). Scrape public directories, verify 500 emails free. Spend $100: $12 domain, $29 email tool, $59 ads. Sell each 500-lead list for $49 on Fiverr/Upwork + cold email. Deliver in 24h, money-back guarantee. Reinvest profits into outreach.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, plan, "utf8");

const written = fs.readFileSync(outFile, "utf8");
if (written.length < 1 || written.length > 280) {
  throw new Error(`plan length ${written.length} is outside 1-280 chars`);
}
console.log(`Wrote ${written.length} chars to ${outFile}`);
