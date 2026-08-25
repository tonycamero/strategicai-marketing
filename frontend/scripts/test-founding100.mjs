import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const routes = await readFile("src/routes.tsx", "utf8");
const page = await readFile("src/pages/public/Founding100.tsx", "utf8");
const built = await readFile("dist/founding100/index.html", "utf8");

assert.match(routes, /path: ["']\/founding100["']/);
assert.match(routes, /path: ["']\/founding100["'][\s\S]*shell: false/);
assert.match(page, /You’re in\./);
assert.match(page, /Welcome to the StrategicAI Founding 100/);
assert.match(page, /Your next step is almost ready\./);
assert.match(page, /We’ll email you as soon as your StrategicAI onboarding is ready to begin\./);
assert.match(page, /data-payment-verification="not-yet-authorized"/);
assert.match(page, /mailto:\$\{SUPPORT_EMAIL\}/);
assert.doesNotMatch(page, /\/formation|\/onboarding|session_id|stripe/i);
assert.match(built, /<title>StrategicAI Founding 100 \| Welcome<\/title>/);
assert.match(built, /content="Welcome to StrategicAI Founding 100\. Learn what happens next/);
assert.match(built, /<link rel="canonical" href="https:\/\/strategicai\.app\/founding100"/);
assert.match(built, /founding100/);

console.log("founding100 contract tests passed");
