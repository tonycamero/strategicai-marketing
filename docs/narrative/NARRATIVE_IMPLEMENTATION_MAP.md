---
id: STRATEGICAI-NARRATIVE-IMPLEMENTATION-MAP
title: StrategicAI Narrative Implementation Map
status: DRAFT_FOR_REVIEW
created: 2026-07-17
depends_on:
  - STRATEGICAI-NARRATIVE-CONSTITUTION
  - STRATEGICAI-PUBLIC-SITE-COPY-DECK
implementation_gate: BLOCKED_PENDING_APPROVAL
---

# StrategicAI Narrative Implementation Map

## Purpose

This document records the verified public-surface inventory, maps the proposed copy to the current implementation, and defines the release checks required after approval.

It does not authorize implementation. All production-content work remains blocked while this package is `DRAFT_FOR_REVIEW`.

## Inventory Method and Date

Read-only inventory completed on 2026-07-17 across:

- `strategicai-marketing` route, page, shared-component, metadata, redirect, analytics, signup, and asset sources.
- `Strategic_AI_Roadmaps` funnel contracts, artifact boundaries, signup/provisioning seams, team intake, Executive Brief delivery, Diagnostic and Roadmap paths, Mission Control surface, outcome projections, and pilot contracts.

The inventory distinguishes current code shape from universal production availability. Presence in source code does not by itself authorize an unbounded public claim.

## Public Route Inventory

| Public path | Current implementation | Class | Copy-deck authority | Proposed disposition after approval |
| --- | --- | --- | --- | --- |
| `/` | `AlternateHomePage.tsx` | Active | Homepage | Replace narrative and metadata from the exact deck; preserve analytics and signup behavior. |
| `/product` | `Product.tsx` | Active | Product page | Replace narrative and metadata; preserve image viewer and CTA behavior. |
| `/pricing` | `Pricing.tsx` | Active | Engagements page | Replace narrative and metadata; preserve `#engagements` deep link. |
| `/partners` | `Partners.tsx` | Active | Partners page | Replace the legacy authority-partner story; remove self-referential alias links; add no unapproved partner application flow. |
| `/intake` | `Intake.tsx` | Active fallback | Fallback Intake | Align fallback copy only; preserve form schema, endpoint, events, provisioning response, and continuation behavior. |
| `/intake/thanks` | `IntakeThanks.tsx` | Active fallback | Intake Confirmation | Align confirmation copy; preserve session response lookup and production authentication destination. |
| `/login` | `Placeholder.tsx` | Active legacy placeholder | No acquisition copy approved | Leave behavior unchanged until a separate route decision; do not reuse its 2026Q1 text. |
| `/roadmap` | `Placeholder.tsx` | Active legacy placeholder | No acquisition copy approved | Leave behavior unchanged until a separate route decision; do not present it as a live Roadmap offer. |
| `/legacy-home` | Navigate to `/` | Redirected alias | Homepage | Preserve redirect. |
| `/brain` | Navigate to `/` | Redirected alias | Homepage | Preserve redirect. |
| `/alt-home` | Navigate to `/` | Redirected alias | Homepage | Preserve redirect. |
| `/strategic-ai-brain` | Navigate to `/` | Redirected alias | Homepage | Preserve redirect. |
| `/features` | Navigate to `/product` | Redirected alias | Product page | Preserve redirect. |
| `/why` | Navigate to `/` | Redirected alias | Homepage | Preserve redirect. |
| `/smb` | Navigate to `/` | Redirected alias | Homepage | Preserve redirect; do not reintroduce SMB-exclusive positioning. |
| `/partner` | Navigate to `/partners` | Redirected alias | Partners page | Preserve redirect. |
| `/authority-partner` | Navigate to `/partners` | Redirected alias | Partners page | Preserve redirect. |
| `/operator` | Navigate to `/partners` | Redirected alias | Partners page | Preserve redirect. |
| `/certified-operator` | Navigate to `/partners` | Redirected alias | Partners page | Preserve redirect. |
| `/economics` | Navigate to `/partners` | Redirected alias | Partners page | Preserve redirect. |
| `/authority-economics` | Navigate to `/partners` | Redirected alias | Partners page | Preserve redirect. |
| `/partner-revenue-simulator` | Navigate to `/partners` | Redirected alias | Partners page | Preserve redirect. |

Netlify supplies SPA fallback routing from `/*` to `/index.html` and an `/api/intake` rewrite to the existing Netlify function. Neither behavior changes in the narrative release.

## Shared Surface Inventory

| Surface | Current source | Current condition | Approved implementation instruction |
| --- | --- | --- | --- |
| Desktop navigation | `components/Navbar.tsx` | Active; hidden below `md`; includes production signup CTA. | Apply exact global labels. Preserve source attribution, `_blank`, and `noopener noreferrer`. |
| Mobile navigation | `components/Navbar.tsx` | No active mobile menu; all navigation is hidden below `md`. | No copy variant is needed. Do not add a menu as an incidental narrative change; track separately if desired. |
| Footer | `components/Footer.tsx` | Active on shell routes; lacks Partners link in current navigate list. | Apply exact deck and add the approved Partners label only during the later approved content implementation. |
| Route shell and hash scroll | `components/Shell.tsx` | Active; resolves hash targets and scrolls. | Preserve behavior. Verify `#how-it-works` and `#engagements` against final section IDs and sticky-header offsets. |
| Image viewer | `components/ImageViewer.tsx` | Active on homepage, product, and partners; default alt is generic. | Apply approved close label and pass through page-specific image alt text. Preserve modal behavior. |
| Trust agent shell | `trustagent/TrustAgentShell.tsx` | Returns `null`. | Make no public capability claim based on this shell. Do not add copy. |
| Analytics | `lib/analytics.ts` | Defines funnel events and dispatches data-layer, gtag, and custom events. | Preserve event names and payload sources. Copy changes must not rename analytics events. |
| Signup helper | `lib/signup.ts` | Canonical `https://go.strategicai.app/signup` plus `source`. | Preserve exactly. All primary Executive Brief CTAs use this helper and open in a new tab. |
| Runtime metadata | `hooks/usePageMeta.ts` | Sets title, description, canonical, Open Graph, and Twitter metadata client-side. | Apply exact page metadata. Separately correct canonical origin to the approved production canonical during implementation without changing route behavior. |
| Static metadata | `frontend/index.html` | Contains old homepage title, description, Netlify URL, and canonical. | Replace with exact default metadata after approval. |
| No-script fallback | `frontend/index.html` | Contains prohibited understanding-vs-execution framing. | Replace with exact fallback copy after approval. |
| Structured data | None found | Not implemented. | Do not invent schema in the narrative release; treat as a separate SEO capability. |

## CTA Inventory

### Active CTA Implementations

| Surface | Source key | Destination invariant | Copy authority |
| --- | --- | --- | --- |
| Navbar | `navbar_executive_brief` | Production signup, new tab | Global CTA |
| Footer | `footer_executive_brief` | Production signup, new tab | Global CTA |
| Homepage hero | `homepage_hero_executive_brief` | Production signup, new tab | Homepage hero |
| Homepage final | `homepage_final_executive_brief` | Production signup, new tab | Homepage final CTA |
| Product hero | `product_hero_executive_brief` | Production signup, new tab | Product hero |
| Product final | `product_final_executive_brief` | Production signup, new tab | Product final CTA |
| Engagements final | `pricing_engagement_intake` | Production signup, new tab | Engagements final CTA |

The Partners rewrite may use `Build My Executive Brief`, but implementation must add a distinct source key without changing the signup helper or destination. The source key should be `partners_executive_brief`.

### Dormant CTA Implementations

| Component | Current CTA language | Route state | Disposition |
| --- | --- | --- | --- |
| `HomePage.tsx` | Build My AI Brain | Unreachable legacy component | Align before reuse or retire. |
| `SmbSales.tsx` | Build My AI Brain | `/smb` redirects to `/` | Align before reuse or retire. |
| `StrategicAiBrain.tsx` | Build My AI Brain | Route redirects to `/` | Align before reuse or retire. |
| `WhyStrategicAI.tsx` | Build My AI Brain | `/why` redirects to `/` | Align before reuse or retire. |
| `HomePage_v1.tsx` | Legacy independent shell and homepage copy | Unreachable legacy component | Do not route publicly without full alignment. |
| `AuthorityPartner.tsx` | Legacy authority program | Alias redirects to `/partners` | Retire or archive after separate cleanup approval. |
| `AuthorityEconomics.tsx` | Legacy economics story | Alias redirects to `/partners` | Retire or archive after separate cleanup approval. |
| `CertifiedOperator.tsx` | Legacy operator story | Alias redirects to `/partners` | Retire or archive after separate cleanup approval. |
| `PartnerRevenueSimulator.tsx` | Legacy partner economics | Alias redirects to `/partners` | Retire or archive after separate cleanup approval. |

Dormant files are included to prevent future narrative reintroduction. The narrative implementation does not require deleting them.

## Asset and Alt-Text Inventory

| Asset | Current use | Approved alt text / disposition |
| --- | --- | --- |
| `smb-executive-brief.png` | Homepage Executive Brief preview | "Preview of a StrategicAI Executive Brief reflecting leadership context and team evidence" |
| `mission-control-real.png` | Homepage and/or product Mission Control visual | "StrategicAI Mission Control showing operating conditions, active pressure, and execution context" |
| Existing SMB and report screenshots | Legacy or optional | Do not use unless the final section claim matches the current product state and an exact alt text is approved. |
| Existing partner screenshots | Partner legacy | Do not use as proof of current partner availability without separate evidence review. |

Images are supporting artifacts, not claim evidence by themselves.

## Platform Evidence Inventory

| Capability area | Evidence source | Maturity used by narrative | Release implication |
| --- | --- | --- | --- |
| Production signup and owner authentication | Platform `Signup`, Magic client, prospect intake route/service, tenant provisioning response | Available now | Direct signup language is permitted; do not promise environment configuration beyond successful provisioning. |
| Owner and team intake | Onboarding routes, invite-team controller/page, intake vectors, team review surfaces | Available now | Team-evidence language is permitted. Avoid claiming frictionless completion until pilot metrics prove it. |
| Executive Brief synthesis and delivery | Executive Brief contracts, synthesis services, immutable PDF artifact persistence, email delivery | Available now | Artifact delivery language is permitted. Preserve Mirror boundary. |
| Pre-upgrade Nova | Funnel Constitution and bounded platform environment | Available now within entitlement bounds | May say Nova explains the Brief and process; may not claim diagnosis or prescription. |
| Diagnostic | Artifact Boundaries, Discovery Call scheduler/payment gate, Diagnostic workflow | Engagement-delivered | Always identify paid engagement and Discovery Call boundary. |
| Roadmap | Artifact Boundaries, final Roadmap service/controller and UI | Engagement-delivered | May state sequencing and ownership implications; may not imply implementation is complete. |
| Connectors and execution surfaces | Funnel Constitution implementation layer and platform surface architecture | Engagement-delivered | Use "when included" and "implementation-scoped." |
| Mission Control | Mission Control components and tenant lifecycle projections | Pilot / implementation-scoped | Use conditional wording and state that data depth depends on implementation. |
| Routed work and operational receipts | Pilot contracts, Mission Control action-receipt projections, Ninkasi kernel | Pilot capability | Do not generalize. Name the configured implementation boundary when used. |
| Outcome verification | Outcome services, snapshots, pilot evidence requirements | Pilot / implementation-scoped | Use "evidence" rather than universal proof; do not claim guaranteed causality. |
| Persistent monitoring | Connector and pilot runtime contracts | Pilot or planned depending on tenant | Omit from general conversion copy. |
| Institutional memory | Immutable artifacts, snapshots, receipts, and outcomes | Planned outcome with bounded supporting seams | Describe only as conditional continuity, not a universal current feature. |
| Generalized self-service commercial ladder | Graduation criteria explicitly require more evidence | Planned | Do not imply all paid stages are automated or instantly self-service. |

## Copy-to-Component Map

### Homepage

| Approved block | Current implementation area | Primary change | Claims check |
| --- | --- | --- | --- |
| Metadata | `usePageMeta` in `AlternateHomePage.tsx` | Replace title and description. | Governed path and free Brief only. |
| Hero | First homepage section | Replace prohibited headline and supporting copy; change secondary action to in-page How It Works link. | No universal execution or proof claim. |
| Recognition | Current friction mirror | Replace symptom-only framing with shared-picture and change-risk framing. | No diagnosis. |
| Executive Brief | Current preview section | Preserve preview behavior; replace exact copy and alt text. | Mirror only. |
| Company thesis | Current "Why This Keeps Happening" area | Replace tool comparison with disconnected-chain thesis. | Company belief, not feature promise. |
| How It Works | Current operating-model section and anchor | Recompose into five-stage governed sequence. | Stages 4 and 5 conditional. |
| Operating model | Current Digital Twin section | Explain function first, then label. | Operating signals conditional. |
| Engagement ladder | Current journey interaction | Replace stage copy and keep expand event. | Preserve commercial boundaries. |
| Before / With | Current comparison | Replace with governable-state copy. | Conditional execution and continuity language. |
| AI / Mission Control | Current Mission Control area | Add bounded AI framing and conditional Mission Control copy. | Pilot / implementation-scoped. |
| Final CTA | Current final section | Replace exact copy; preserve CTA event and target. | Free Mirror only. |

### Product

Replace the page narrative in place using the six approved sections. Existing product screenshots may remain only where they match the bounded statement. Preserve image-viewer behavior, two existing CTA source keys, and the `/pricing#engagements` link.

### Engagements

Replace copy in place while preserving the active `engagements` ID, deep-link behavior, and four-stage commercial structure. Do not introduce fixed public prices unless separately approved; the current public page is an engagement-boundary page, not a pricing grid.

### Partners

Replace the entire legacy authority/economics narrative with the approved five-section partner copy. Remove cards that link to aliases resolving back to the same page. Add only the production Executive Brief CTA with `partners_executive_brief`; do not invent a partner application destination.

### Fallback Intake and Confirmation

Change display copy and metadata only. Preserve:

- required fields and validation;
- `/.netlify/functions/intake` submission;
- source propagation;
- `strategicai-intake-submission` session key;
- organization-context completion event;
- platform response handling;
- Magic login URL and production fallback;
- owner-authentication event.

## Metadata and Crawlability Map

| Page | Runtime metadata | Static / fallback requirement | Canonical |
| --- | --- | --- | --- |
| `/` | Exact homepage title and description | Exact `index.html` defaults and no-script copy | `https://strategicai.app/` |
| `/product` | Exact product title and description | SPA fallback remains homepage default until a rendering strategy is separately approved | `https://strategicai.app/product` |
| `/pricing` | Exact engagements title and description | Same constraint | `https://strategicai.app/pricing` |
| `/partners` | Exact partners title and description | Same constraint | `https://strategicai.app/partners` |
| `/intake` | Exact fallback intake title and description | Same constraint | `https://strategicai.app/intake` |
| `/intake/thanks` | Exact confirmation title and description | Same constraint | `https://strategicai.app/intake/thanks` |

The current Vite SPA updates metadata client-side. Static `index.html` can provide meaningful default HTML for `/`, but it does not create route-specific server-rendered HTML for deep links. The implementation must not claim route-specific server rendering unless a separate prerender or SSR change is approved and verified.

## Responsive and Accessibility Requirements

- Preserve every approved headline and claim boundary across viewport sizes.
- Do not shorten CTA labels without recording and approving the variant in the copy deck.
- Confirm headline wrapping at mobile, tablet, desktop, and wide desktop widths.
- Confirm the sticky header does not obscure `#how-it-works` or `#engagements`.
- Give image-trigger buttons accessible names matching their image purpose.
- Pass page-specific alt text into the modal.
- Change the modal close accessible label to "Close image preview."
- Preserve visible focus states and keyboard close behavior.
- Do not add a mobile menu as an incidental copy change; track it as separate navigation work.

## Analytics Requirements

Preserve these existing event names:

```text
homepage_view
executive_brief_cta_click
sample_brief_open
journey_stage_expand
intake_started
organization_context_completed
leadership_intake_completed
team_invite_started
executive_brief_ready
```

Required checks after implementation:

- Homepage hero and final CTAs fire `executive_brief_cta_click` with their existing source payloads.
- Product and Engagements CTAs retain existing event behavior.
- New Partners CTA fires `executive_brief_cta_click` with source `partners` and uses signup source key `partners_executive_brief`.
- Sample Brief actions retain `sample_brief_open`.
- Interactive engagement stages retain `journey_stage_expand` where the interaction remains.
- Intake and confirmation changes do not alter funnel-event semantics.

## Claim Review Checklist

For every implemented public claim:

1. Identify the exact constitution claim-matrix row.
2. Confirm the referenced runtime, contract, engagement, or pilot evidence still exists.
3. Confirm the maturity class has not changed.
4. Confirm the public wording does not exceed the strongest permitted wording.
5. Confirm conditional language remains adjacent to the claim on mobile and desktop.
6. Reject screenshots, demos, or code presence as proof of universal availability.

## Implementation Order After Approval

1. Record approval metadata and superseded narrative documents in all three docs.
2. Update global navigation and footer copy without altering destinations.
3. Update homepage sections, metadata, alt text, and fallback HTML.
4. Update Product and Engagements pages.
5. Replace Partners narrative and remove self-referential alias links.
6. Align fallback Intake and Confirmation display copy only.
7. Align static metadata and canonical targets.
8. Run claim, route, CTA, analytics, accessibility, responsive, and build verification.
9. Document any required fit or metadata adjustment before release.

## Release Acceptance Checklist

- [ ] All three narrative documents are `APPROVED` with date and authority.
- [ ] Every active public route matches the exact copy deck.
- [ ] Every material claim passes maturity and evidence review.
- [ ] No forbidden positioning remains in active public copy or no-script fallback.
- [ ] Dormant components remain unreachable or have been aligned before reuse.
- [ ] Executive Brief CTAs still use production signup, source attribution, and a new tab.
- [ ] Form schema, endpoint, analytics, and production-auth continuation are unchanged.
- [ ] `/product`, `/pricing#engagements`, `/partners`, `/intake`, and `/intake/thanks` resolve correctly.
- [ ] Redirect aliases retain their approved destinations.
- [ ] Runtime metadata, static metadata, canonical URLs, and social copy match the deck.
- [ ] Deep-link limitations are reported honestly; no unverified server-rendering claim is made.
- [ ] Image alt text and modal labels are accessible.
- [ ] Mobile and desktop layouts preserve copy meaning and claim boundaries.
- [ ] Build verification passes.
- [ ] The implementation changeset contains no undocumented substantive copy changes.

## Documentation Approval Gate

Before approval, the only authorized repository changes are these three documents. Historical strategy tickets remain intact.

Approval requires recording:

```text
status: APPROVED
approved_on: YYYY-MM-DD
approved_by: [authority]
supersedes:
  - docs/meta-tickets/META-STRATEGY-PIVOT.md
  - docs/meta-tickets/SITE-REBUILD-2026Q1.md
  - any later narrative ticket explicitly identified during approval
```

Implementation must then occur in a separate changeset. No substantive rewriting, reframing, or new claims may occur during implementation. Any adjustment required for accessibility, responsive fit, technical behavior, or metadata constraints must be documented and approved before release.
