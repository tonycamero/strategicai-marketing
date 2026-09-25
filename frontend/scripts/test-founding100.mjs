import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const routes = await readFile("src/routes.tsx", "utf8");
const page = await readFile("src/pages/public/Founding100.tsx", "utf8");
const contentPage = await readFile("src/pages/public/Founding100Content.tsx", "utf8");
const offerPage = await readFile("src/pages/public/Founding100Offer.tsx", "utf8");
const funnel = await readFile("src/lib/founding100Funnel.ts", "utf8");
const analytics = await readFile("src/lib/analytics.ts", "utf8");
const built = await readFile("dist/founding100/index.html", "utf8");
const builtQuick = await readFile("dist/founding100/quick/index.html", "utf8");
const builtDeep = await readFile("dist/founding100/webinar/index.html", "utf8");
const builtOffer = await readFile("dist/founding100/offer/index.html", "utf8");

assert.match(routes, /path: ["']\/founding100["']/);
assert.match(routes, /path: ["']\/founding100["'][\s\S]*shell: false/);
assert.match(routes, /path: ["']\/founding100\/quick["'][\s\S]*shell: false/);
assert.match(routes, /path: ["']\/founding100\/webinar["'][\s\S]*shell: false/);
assert.match(routes, /path: ["']\/founding100\/offer["'][\s\S]*shell: false/);
assert.match(page, /You’re in\./);
assert.match(page, /Bring the business you actually have/);
assert.match(page, /Start with one real problem/);
assert.match(page, /noindex, nofollow/);
assert.doesNotMatch(page, /Business Intelligence Portfolio|90 days to Ask Nemo|\$299/);
assert.match(offerPage, /90 days to Ask Nemo/);
assert.match(offerPage, /What can compound through the experience/);
assert.match(offerPage, /The picture can become richer and more useful through use and correction/);
assert.match(offerPage, /not a separate artifact, a guarantee of completeness/);
assert.doesNotMatch(page, /What can compound through the experience|90-day Founding 100 experience/);
assert.doesNotMatch(page, /Operational Intelligence built from Operational Reality/);
assert.doesNotMatch(page, /Build an AI that knows your business/);
assert.match(page, /Your next step is almost ready\./);
assert.match(page, /We’ll email you as soon as your StrategicAI onboarding is ready to begin\./);
assert.match(page, /data-payment-verification="not-yet-authorized"/);
assert.match(page, /mailto:\$\{SUPPORT_EMAIL\}/);
assert.doesNotMatch(page, /\/formation|\/onboarding|session_id|stripe/i);
assert.match(built, /<title>StrategicAI Founding 100 \| Start with One Real Problem<\/title>/);
assert.match(built, /content="You’re in\. Start with one real problem/);
assert.match(built, /<link rel="canonical" href="https:\/\/strategicai\.app\/founding100"/);
assert.match(built, /founding100/);

assert.match(contentPage, /If the same problems keep coming back, they may not be separate problems\./);
assert.match(contentPage, /Five minutes\. No signup\./);
assert.match(contentPage, /If everyone has a piece and you’re still the one putting it together, start with understanding\./);
assert.match(contentPage, /A 35-minute explanation of fragmented context/);
assert.match(contentPage, /Which part sounds familiar\?/);
assert.match(contentPage, /Bring one recurring problem\. Start there\./);
assert.match(contentPage, /short_to_deep/);
assert.match(contentPage, /content_to_offer/);
assert.doesNotMatch(contentPage, /type=["']email["']|newsletter|book a call|application form/i);

assert.match(offerPage, /If everyone has a piece and you’re still the one putting it together, start here\./);
assert.match(offerPage, /\$299/);
assert.match(offerPage, /Checkout is not ready for release\./);
assert.match(offerPage, /data-checkout-state=["']not-configured["']/);
assert.match(offerPage, /checkout_click/);
assert.doesNotMatch(offerPage, /purchase_confirmed|payment_completed/);
assert.doesNotMatch(offerPage, /type=["']email["']|newsletter|book a call|application form/i);

assert.match(funnel, /VITE_F100_SHORT_YOUTUBE/);
assert.match(funnel, /VITE_F100_DEEP_YOUTUBE/);
assert.match(funnel, /VITE_F100_CHECKOUT_URL/);
assert.match(funnel, /browser-tab-session/);
assert.match(funnel, /message_card_id/);
assert.match(funnel, /post_instance_id/);
assert.match(funnel, /removeAttributionFromVisibleUrl/);

for (const event of [
  "see_short",
  "see_deep",
  "short_video_start",
  "short_video_progress",
  "short_video_complete",
  "deep_video_start",
  "deep_video_progress",
  "deep_video_complete",
  "see_reason_selected",
  "short_to_deep",
  "content_to_offer",
  "offer_view",
  "checkout_click",
]) {
  assert.match(analytics, new RegExp(`"${event}"`));
}

assert.match(builtQuick, /<title>StrategicAI Founding 100 \| Why Problems Keep Returning<\/title>/);
assert.match(builtQuick, /canonical" href="https:\/\/strategicai\.app\/founding100\/quick"/);
assert.match(builtDeep, /<title>StrategicAI Founding 100 \| Understanding Before Intervention<\/title>/);
assert.match(builtDeep, /canonical" href="https:\/\/strategicai\.app\/founding100\/webinar"/);
assert.match(builtOffer, /<title>StrategicAI Founding 100 \| See What It Includes<\/title>/);
assert.match(builtOffer, /canonical" href="https:\/\/strategicai\.app\/founding100\/offer"/);

console.log("founding100 funnel and post-payment contract tests passed");
