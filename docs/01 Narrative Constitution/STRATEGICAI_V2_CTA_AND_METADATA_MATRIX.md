---
id: STRATEGICAI-V2-CTA-METADATA-MATRIX
title: StrategicAI v2 CTA and Metadata Matrix
status: DRAFT_FOR_APPROVAL
version: 2.1-draft
created: 2026-09-17
updated: 2026-09-24
---

# StrategicAI v2 CTA and Metadata Matrix

## CTA vocabulary

| Intent | Canonical CTA | Destination |
| --- | --- | --- |
| Understand | See how it works | `/how-it-works` |
| Learn product architecture | Explore the product | `/product` |
| Consider entry | See Founding 100 | `/founding100/offer` |
| Read offer | See what Founding 100 includes | `/founding100/offer` |
| Purchase, once approved | Join Founding 100 | Approved checkout URL from `/founding100/offer` |
| Post-purchase | Start with one real problem | `/founding100` |
| Partner entry | Experience StrategicAI through Founding 100 | `/founding100/offer` |

Retire “Build My Executive Brief,” generic “Get started,” and unsupported
purchase language outside the offer route.

## Plain-language semantic cluster

Do not rely on “Operational Intelligence” alone as the discovery language.
Use the buyer's problem language across page copy, metadata, and educational
surfaces where it fits naturally:

- how a business actually works
- business knowledge scattered across teams
- understand a process before automating it
- cross-functional handoff problems
- business context for AI
- operational context for AI
- single-person dependency business
- business process knowledge in people's heads

These terms are a comprehension and discovery cluster, not a promise of
ranking performance. Category language should be connected to the evidence,
correction, context, or warranted-action sequence.

## Metadata matrix

| Route | Title | Description theme | Robots |
| --- | --- | --- | --- |
| `/` | StrategicAI \| See How Your Business Actually Works | Management drag, evidence into a correctable shared picture, and grounded intelligence | `index, follow` |
| `/how-it-works` | How StrategicAI Works \| From Evidence to a Shared Operating Picture | Evidence through disagreement, correction, and bounded change questions | `index, follow` |
| `/product` | StrategicAI Product \| Operational Reality to Operational Intelligence | Product architecture and organizational context for frontier intelligence | `index, follow` |
| `/pricing` | Ways to Work with StrategicAI \| Start with the Picture | Current public entry and offer routing | `index, follow` |
| `/partners` | StrategicAI Partners \| Better Context Before Implementation | Context before consequential implementation | `index, follow` |
| `/founding100/quick` | StrategicAI Founding 100 \| Why Problems Keep Returning | Short management-drag and problem-recognition explanation | `index, follow` |
| `/founding100/webinar` | StrategicAI Founding 100 \| Understanding Before Intervention | Deep worldview, shared context, correction, and change explanation | `index, follow` |
| `/founding100/offer` | StrategicAI Founding 100 \| See What It Includes | Offer contents, approved commercial state, and gated compounding value | `index, follow` |
| `/founding100` | StrategicAI Founding 100 \| Start with One Real Problem | Activation-only onboarding | `noindex, nofollow` |
| `/intake`, `/intake/thanks`, `/login` | Route-specific | Controlled/non-public workflow | `noindex, nofollow` |

Every route requires matching raw HTML title, description, canonical, OG title,
OG description, OG URL, Twitter title, Twitter description, and robots state.
