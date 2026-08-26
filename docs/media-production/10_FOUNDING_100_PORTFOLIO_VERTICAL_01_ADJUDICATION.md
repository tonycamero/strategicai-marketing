---
id: F100-PORTFOLIO-VERTICAL-01
title: Founding 100 Portfolio Ratification and First Vertical Adjudication
status: BLOCKED_PENDING_AUTHORITY_AND_RUNTIME_SEAM
created: 2026-08-25
scope: executive-brief-and-current-state-business-profile
---

# Decision

This is an adjudication package, not a ratification record. The Founding 100
Business Intelligence Portfolio remains a product proposal in this repository.
No new schema, API, ontology, customer surface, or public-copy change was made.

The first vertical cannot be implemented lawfully in `strategicai-marketing`:
this repository is a static marketing application with a public intake function,
not the authenticated Product v2 application that owns Formation, tenant
boundaries, governed understanding, and durable artifact state. Copying a
second model or simulating a customer artifact here would violate the
no-duplicate-cognition and no-raw-intake-report laws.

The correct next implementation location is the authorized Product v2 runtime,
after a separate implementation contract grants this exact vertical.

# Authority audit

## Marketing repository

The current repository contains:

- `frontend/src/pages/public/Founding100.tsx` and its stylesheet for the
  `/founding100` post-payment handoff;
- a public `/intake` form that posts to
  `frontend/netlify/functions/intake.ts`; and
- Founding 100 marketing/product specifications under
  `docs/media-production/`.

It does not contain a tenant-authenticated Product v2 backend, Formation
projection route, governed company-understanding store, artifact persistence,
owner correction API, or customer portfolio delivery surface.

The existing `/founding100` page remains intentionally honest about the
unresolved payment-verification, Formation/onboarding, Terms, and Privacy
boundaries. This task does not change that public page.

## Product v2 authority consulted

The following authority was inspected in the sibling Product v2 repository:

- `AR-PRODUCT-V2-ARCHITECTURE-RATIFICATION.md` — architecture is RATIFIED,
  but `IMPLEMENTATION_AUTHORIZATION: NONE`.
- `PRODUCT_V2_CONSTITUTIONAL_CORE.md` — the Organism is a governed,
  version-addressable aggregate; ontology is not the Organism; projection does
  not mutate truth; uncertainty is preserved.
- `PRODUCT_V2_CONCEPTUAL_ONTOLOGY.md` — Truth Assertion and Evidence are
  governed primitives; inference may not silently become truth.
- `PRODUCT_V2_SUPPORTING_ARCHITECTURE_INDEX.md` — Formation and Durable
  Organism source work is locally verified, uncommitted, and not production
  proof; the cognition context router remains future/not authorized.

The existing source seams are reusable donors, not permission to implement in
this marketing repository.

# Ratification result

| Contract | Result | Decision | Reason |
| --- | --- | --- | --- |
| StrategicAI Business Intelligence Portfolio | FAIL | Keep as proposal | No Founder/product authority record adopts the portfolio as a product state or contractual scope. |
| Guaranteed Core | FAIL | Keep as recommended list | The ten-view list in `09_FOUNDING_100_PORTFOLIO_ARCHITECTURE.md` is explicitly draft-for-review. |
| `PORTFOLIO_READY` | FAIL | Do not add yet | Product v2 Formation owns readiness semantics; this repo has no lawful state machine or acceptance seam for a new commercial state. |
| Projection law | PASS | Reuse existing law | Product v2 already requires governed, read-only projections with evidence, currentness, scope, and authority separation. This is not F100 implementation authorization. |
| Quality law | FAIL | Keep as proposed | The 0–2 / 20-point rubric is useful for review but is not currently an accepted Product v2 or commercial acceptance standard. |

## Proposed contract for a future authority record

If separately accepted, the Founding 100 core may adopt the existing draft list:

1. Executive Brief
2. Current-State Business Profile
3. Operating Model View
4. People + Responsibility View
5. Systems + Information View
6. Bottleneck + Owner Dependency View
7. Opportunity Map
8. Unknowns + Open Questions
9. 90-Day Improvement Agenda
10. Business Questions Queue

The first implementation contract should authorize only items 1 and 2, both
projected from one governed company understanding. It should define
`PORTFOLIO_READY` as a derived delivery posture, not as permission to mutate
the Organism, bypass Formation, or fill missing evidence with generic content.

Candidate readiness dimensions remain those already documented in
`09_FOUNDING_100_PORTFOLIO_ARCHITECTURE.md`: purpose, customers, revenue
motion, people and roles, responsibility, one material workflow, systems and
information, a handoff/dependency/decision, owner-held context, goals,
constraints, pressure, and explicit unknowns/contradictions.

# Semantic gap analysis

| Needed concept | Existing lawful seam | Gap for F100 vertical | Required disposition |
| --- | --- | --- | --- |
| Company / tenant scope | Product v2 `tenantId`, `organismId`, `intakeCycleId` | No such runtime exists in this repo | Reuse tenant/Organism scope; do not create a Company table here. |
| Person / role / perspective | Formation projection `perspectives`, participant and operator postures | No F100 delivery adapter | Reuse Formation perspective records. |
| Assertion / claim | `ProductV2AssertionRef`; Formation understanding statements with posture and source refs | No artifact-level material-claim manifest | Add an authorized projection contract, not a second ontology. |
| Evidence | Exact `ProductV2EvidenceRef`; Formation source refs and evidence handles | No customer artifact disclosure path in this repo | Reuse exact evidence refs and expose a bounded Why disclosure. |
| Known / inferred / disputed / stale / missing / unresolved | Formation epistemic posture, currentness, unknowns, contradictions | F100 artifact display mapping is undefined | Define a view-level mapping in the vertical contract. |
| Correction | `FormationCorrectionRequest` with expected projection/synthesis hashes, actor checks, idempotency, and audit event | No artifact dependency propagation proof | Extend correction outcome with impacted views and artifact supersession. |
| Shared business understanding | Product v2 Formation projection reads the current tenant-scoped operational-reality artifact and validates source scope/hash | No access from this repo | Artifact projections must consume Formation/Organism read models only. |
| Current-State Business Profile | No accepted F100 artifact contract found | Structured profile contract and persistence are missing | Create in the authorized Product v2 implementation task. |
| Executive Brief | Legacy canonical artifact envelope, lifecycle, hashes, approvals, and delivery exist | Existing generation path reads legacy normalized intake and is not the F100 source contract | Adapt the envelope/lifecycle; replace the source path with governed Formation. |
| Artifact versions | Formation currentness carries artifact id/version/hash/supersession; legacy brief and diagnostic have partial revision paths | No shared two-artifact lineage | Add an artifact-version contract keyed to the exact source Formation/Organism version. |
| Customer delivery | Product v2 Formation has an existing authenticated experience and evidence drawer in the sibling app | Marketing repo has no authenticated portfolio route | Use existing Product v2 architecture after authorization; do not build a parallel app here. |

## Minimum governed projection contract

The authorized implementation must prove this shape:

```text
tenant-scoped Evidence
    -> Formation / governed company understanding
    -> Current-State Business Profile projection
    -> Executive Brief projection from the same source version
    -> authenticated customer delivery
```

Each material statement must carry, directly or through an inspectable claim
manifest:

- assertion identity and exact source version;
- evidence references and perspective/author where available;
- observed/inferred/contested/currentness posture;
- date or source timestamp;
- confidence/support and unresolved reason where relevant;
- impacted entities and impacted views;
- correction and supersession lineage.

Prose may be generated only from the structured governed source, under a strict
schema. Unsupported material statements must fail validation. Model output is
never source truth.

## Required correction/version lineage

The synthetic proof fixture should use a clearly marked non-customer tenant and
demonstrate:

```text
V1 assertion: Emily owns final ordering approval.
owner correction: Amy owns routine approvals; Emily approves exceptions above X.
source: original assertion preserved + attributed correction appended.
profile V2: routine approval -> Amy; exception approval -> Emily.
brief V2: affected responsibility and owner-dependency sections regenerated.
V1: retained as superseded; V2: current; change reason and evidence visible.
```

No implementation was run, so no V1/V2 artifact was fabricated or committed.

# Legacy Executive Brief / Diagnostic audit

## Executive Brief = ADAPT

Reuse the canonical envelope, section/finding arrays, content/facts/source
hashes, lifecycle transitions, approval boundary, tenant-visible status gate,
and existing evidence/provenance UI patterns where they remain lawful.

Adapt or prohibit for the F100 vertical:

- direct legacy `ownerIntake` / vector synthesis;
- generation from raw normalized intake rather than Formation;
- any artifact without material-claim source refs;
- email/PDF delivery as a substitute for a governed live customer surface.

Do not delete the legacy pipeline without a separate retirement decision.

## Diagnostic = ADAPT

Reuse authority gating, tenant checks, published/superseding lifecycle concepts,
and audit events only as implementation patterns. Do not reuse the diagnostic as
an F100 Business Intelligence Portfolio artifact or source model.

The legacy generator calls `buildNormalizedIntakeContext`, which reads completed
role intakes and builds a normalized matrix before `generateSop01Outputs`. That
is a raw-intake report shortcut for this vertical. Its generated diagnostic
payload does not establish the required per-statement evidence, uncertainty,
correction, and shared-profile lineage.

The legacy path also updates an existing generated diagnostic in place, while
its superseding path is a separate published-diagnostic flow. This is not the
required immutable initial/corrected/superseded artifact contract.

## Duplicate cognition finding

`buildNormalizedIntakeContext` / legacy Executive Brief and Diagnostic
generation coexist with Product v2 Formation projection/convergence. That is a
real legacy-versus-governed cognition split in the Product v2 codebase. This
task does not delete or silently retrofit either path. The F100 vertical must
bind to the governed Formation source and explicitly prohibit the legacy path.

# Repository implementation result

No implementation was authorized in this repository after the audit. In
particular, this task did not add:

- a second company or assertion model;
- a portfolio database or API;
- an unauthenticated artifact route;
- synthetic customer-facing artifacts presented as real output;
- payment, Formation, Nemo, webinar, offer, or export infrastructure.

The existing marketing build remains the only regression surface. A real
customer-visible proof remains blocked until the Product v2 runtime contract,
tenant/auth boundary, fixture authority, and delivery acceptance are separately
authorized.

# Acceptance test plan

The following tests are required for the next authorized implementation task;
they were not claimed as passing here:

| Test family | Required proof |
| --- | --- |
| Source isolation | Only the requested tenant, exact Formation cycle, and exact source version are read. |
| Profile projection | Known values render; unknowns and contradictions remain visible; stale sources are marked; unsupported fields are absent. |
| Executive Brief | Every material statement resolves to the approved source model; no generic filler; consistent with the profile. |
| Why disclosure | Owner can inspect bounded evidence/perspective/time/uncertainty without raw internal IDs. |
| Correction | Owner correction is attributed, idempotent, append-only, and updates the source lawfully. |
| Propagation | One correction identifies both affected artifacts and regenerates/reprojects them from the new source version. |
| Versioning | V1 remains immutable; V2 records supersession, reason, source version, projection version, and timestamp. |
| Security | Authenticated tenant boundary; no cross-tenant reads; no sensitive fixture data in logs. |
| Regression | Existing Formation behavior, readiness gates, and legacy paths remain unchanged unless separately authorized. |

The existing marketing checks remain the only checks run for this change:
`npm run build` and `npm run test:founding100` in `frontend`.

# Evidence package status

- Authority records: inspected; no F100 ratification record exists.
- Architecture map: recorded above.
- Semantic gap analysis: recorded above.
- Legacy audit: recorded above.
- Schema/API/UI changes: none.
- Projection examples: synthetic correction contract recorded; runtime artifacts not produced.
- Artifact V1/V2: not produced because the source/runtime seam is blocked.
- Provenance/version lineage: contract specified; runtime proof not produced.
- Screenshots: not applicable; no new surface was implemented.
- Remaining gaps: listed below.

# Open blockers

1. Founder/product authority must accept or amend the Portfolio, Guaranteed
   Core, `PORTFOLIO_READY`, and quality acceptance contract.
2. Product v2 needs a separately authorized implementation contract for this
   exact two-artifact vertical, including the artifact-version and claim
   manifest seam.
3. The implementation must occur in the Product v2 runtime, not this marketing
   repository, and must use its authenticated tenant/Formation/Organism path.
4. A synthetic or explicitly approved tenant fixture must be authorized.
5. Customer delivery, correction UX, and post-correction acceptance must be
   proven before any portfolio artifact is described as live.
6. The public `/founding100` payment verification, Formation destination,
   Terms, and Privacy limitations remain unchanged and unresolved.

# Stop condition

Stop at the Executive Brief + Current-State Business Profile vertical. Do not
start Operating Model View or any other Business View until this package is
adjudicated and the first vertical passes its full end-to-end proof.
