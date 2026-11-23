import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Scrape public directories for US roofing firms, verify 500 emails free, sell each 500-lead list for $49 on Fiverr/Upwork + cold email. Spend $100: $12 domain, $29 email tool, $59 ads. Day 1: pick 3 niches, deliver in 24h, money-back guarantee, reinvest profits into outreach.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
