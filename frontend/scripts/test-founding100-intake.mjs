import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import ts from "typescript";

const intakePath = resolve("netlify/functions/intake.ts");
const intakeSource = await readFile(intakePath, "utf8");
const compiled = ts.transpileModule(intakeSource, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.CommonJS,
    esModuleInterop: true,
  },
  fileName: intakePath,
}).outputText;

const require = createRequire(import.meta.url);
const NodeModule = require("node:module");
const runtimeModule = new NodeModule(intakePath, null);
runtimeModule.filename = intakePath;
runtimeModule.paths = NodeModule._nodeModulePaths(dirname(intakePath));
runtimeModule._compile(compiled, intakePath);
const { handler } = runtimeModule.exports;

const originalFetch = globalThis.fetch;
const calls = [];
globalThis.fetch = async (url, options) => {
  calls.push({ url, options });
  return {
    ok: true,
    statusText: "OK",
    async json() { return { ok: true }; },
  };
};

process.env.STRATEGICAI_PLATFORM_API_BASE_URL = "https://platform.example/";
delete process.env.RESEND_API_KEY;
delete process.env.FROM_EMAIL;

try {
  const exactBusinessQuestion = "If your business could answer one question clearly today, what would you ask it?";
  const response = await handler({
    httpMethod: "POST",
    headers: { origin: "https://strategicai.app", referer: "https://strategicai.app/founding100/apply" },
    body: JSON.stringify({
      funnel: "founding100",
      source: "founding100",
      name: "Tony Founder",
      email: "tony@example.com",
      company: "Example Co",
      website: "https://example.com",
      phone: "+1 555 0100",
      teamSizeRange: "6-15",
      businessDescription: "We operate a service business.",
      currentOperatingDifficulty: "Important context is scattered.",
      exactBusinessQuestion,
      attribution: { message_card_id: "card-1" },
    }),
  });

  assert.equal(response.statusCode, 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://platform.example/api/public/webinar/register");
  assert.doesNotMatch(calls[0].url, /prospect-intake/);

  const payload = JSON.parse(calls[0].options.body);
  assert.deepEqual(payload, {
    name: "Tony Founder",
    email: "tony@example.com",
    company: "Example Co",
    role: "Owner",
    teamSize: 6,
    currentCrm: "Not provided",
    bottleneck: "Important context is scattered.",
    source: "founding100",
    metadata: {
      source: "founding100",
      offer: "founding100",
      funnel: "founding100",
      intent: "founding100_application",
      website: "https://example.com",
      phone: "+1 555 0100",
      teamSizeRange: "6-15",
      businessDescription: "We operate a service business.",
      currentOperatingDifficulty: "Important context is scattered.",
      exactBusinessQuestion,
      attribution: { message_card_id: "card-1" },
      submittedAt: payload.metadata.submittedAt,
      origin: "https://strategicai.app",
      referer: "https://strategicai.app/founding100/apply",
    },
  });
  assert.equal(response.body.includes("Workspace provisioned"), false);

  calls.length = 0;
  await handler({
    httpMethod: "POST",
    headers: {},
    body: JSON.stringify({
      funnel: "founding100",
      name: "Large Founder",
      email: "large@example.com",
      company: "Large Co",
      website: "https://large.example.com",
      teamSizeRange: "100+",
      businessDescription: "A larger business.",
      currentOperatingDifficulty: "The picture is fragmented.",
      exactBusinessQuestion,
    }),
  });
  assert.equal(JSON.parse(calls[0].options.body).teamSize, 100);

  calls.length = 0;
  const legacyResponse = await handler({
    httpMethod: "POST",
    headers: {},
    body: JSON.stringify({
      fullName: "Legacy Lead",
      email: "legacy@example.com",
      phone: "555",
      company: "Legacy Co",
      role: "Owner",
      teamSize: "1-5",
      priorityBottleneck: "Legacy issue",
    }),
  });
  assert.equal(legacyResponse.statusCode, 200);
  assert.equal(calls[0].url, "https://platform.example/api/public/prospect-intake");
} finally {
  globalThis.fetch = originalFetch;
}

console.log("founding100 intake routing and payload contract tests passed");
