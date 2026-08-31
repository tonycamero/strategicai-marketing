# Golden Proof Thread — Website Asset Requirements

This is the website-side handoff contract for binding an accepted Golden Proof Thread to the public homepage. It does not define product evidence, runtime capture, or customer permissions. The homepage currently uses a neutral mechanism walkthrough and remains `AWAITING_REAL_PROOF`.

## Bundle-level fields

- `status`: `ACCEPTED_PROOF` only after the launch review accepts the bundle.
- `publicLabel`: the small section label shown above the story title.
- `storyTitle`: the single public title for the thread.
- `storyIntro`: one short explanation of the thread without unsupported outcome claims.
- `actors`: approved role labels only; use names or company identifiers only with explicit permission.
- `operatingProblem`: the narrow problem followed through all four frames.

## Frame-level fields

Provide exactly four ordered frames. Each frame needs:

- stable `id` and public `navLabel`;
- `eyebrow`, `headline`, and `body` copy that match the captured sequence;
- `durationSeconds` so the 45-second walkthrough remains data-driven;
- a desktop asset and, when the composition requires it, a mobile asset;
- intrinsic width, intrinsic height, and aspect ratio;
- final alt text describing what is visible and why it matters;
- optional caption and an explicit `inspectable` decision for the larger viewer;
- loading intent (`eager` for the first visible frame, otherwise `lazy`).

## Correction frame

The correction frame may include a three-part sequence:

`BEFORE → HUMAN CORRECTION → AFTER`

The supplied before and after captures must show the same accepted picture before and after the owner correction. The correction copy must identify the human change without inventing a quote or implication not present in the accepted record.

## Media and claim controls

- Redact personal, confidential, and commercially sensitive information before delivery.
- Do not supply mock UI, invented customer stories, fabricated quotes, invented outcomes, or synthetic runtime proof as accepted proof.
- Keep each frame’s copy faithful to the supplied capture; the website cannot make a stronger claim than the asset supports.
- Confirm whether public use is authorized for the specific asset, role label, company identifier, screenshot, quote, and metric.
- If a claim depends on a platform/runtime behavior, return it as `PLATFORM_HANDOFF_REQUIREMENT` for the platform owner; do not solve it in this website repository.

## Delivery checklist

The website implementation is ready to bind when one accepted bundle includes the fields above, four final assets, mobile behavior decisions, alt text, redactions, permission decisions, and a named reviewer who accepts the public copy against the evidence.

