---
id: F100-FUNNEL-SURFACE-SPEC
title: Founding 100 Funnel Surface Reality and Page Specifications
status: IMPLEMENTED_WITH_RELEASE_BLOCKERS
created: 2026-08-25
scope: funnel-surfaces-and-customer-facing-offer
superseded_in_part_by: F100-COMMENT-SEE-FUNNEL-CONTRACT
product_doctrine_authority: STRATEGICAI-PRODUCT-SHIFT-AUTHORITY-2026-08-25
commercial_commitment_status: GATED
---

# Purpose

This document separates what is live from what is only described in the Founding 100 marketing substrate. Its offer and post-payment sections remain implementation substrate. Its gated webinar-registration section is historical and is superseded by `14_COMMENT_SEE_FUNNEL_AND_MESSAGE_CARD_CONTRACT.md`.

The product doctrine used by the page is ratified. The founder has approved
`$299` one-time as the early-cohort acquisition-and-learning price for the
first 100 businesses. Exact purchase entitlement, Portfolio scope, 90-day
Nemo delivery, and activation remain commercial/runtime commitments and are
not ratified by product doctrine.

The current pre-purchase surfaces are:

1. the ungated 5-minute content page;
2. the ungated 35-minute walkthrough page;
3. the Founding 100 sales/offer page.

It also records the copy and product boundary for the live `/founding100` post-payment surface.

The active market-learning path and gated commercial continuation are:

```text
TOFU media / founder outbound / Message Cards
        ↓
Comment SEE
        ↓
DM: choose 5-minute or 35-minute content
        ↓
Continue content or enter a qualified conversation

OPTIONAL COMMERCIAL BRANCH — INACTIVE UNTIL SEPARATELY AUTHORIZED
        ↓
Founding 100 sales / offer page
        ↓
Verified Stripe payment
        ↓
Authorized activation / Formation / delivery
```

The website-owned pre-purchase and post-payment routes now exist. The external
DM transport, media assets, Stripe destination/verification, legal routes, and
Formation/product handoff remain separate dependencies.

# A. Live surface update

## Current implementation

The live `/founding100` route is implemented in:

- `frontend/src/pages/public/Founding100.tsx`
- `frontend/src/pages/public/founding100.css`

The page currently implements proposed copy for two independent layers of
value. Neither layer is an active Commercial Commitment:

### Layer 1 — StrategicAI Business Intelligence Portfolio

The customer is about to build a serious body of intelligence about the company. StrategicAI turns what it learns into useful Business Views covering work, people, systems, dependencies, bottlenecks, unknowns, and priorities.

### Layer 2 — 90 days with Nemo

The customer brings Nemo real owner questions about hiring, growth, bottlenecks, customers, systems, priorities, and decisions. Nemo is presented as working from the company context built through the portfolio.

The page keeps the following boundaries visible:

- the exact views depend on what StrategicAI discovers;
- correction is expected and valuable;
- no custom integrations, custom software, or implementation work is automatically included;
- Formation/onboarding is not production-ready, so the page exposes an email-status fallback rather than a dead CTA;
- the public route is not payment authority;
- Stripe verification, Terms, and Privacy remain unresolved.

## Implemented provisional live-surface copy — commercial release blocked

The following copy direction is preserved as offer substrate. It is not
approved for traffic, checkout, or delivery promises until the commercial
gates close.

Primary proposition:

> You’re about to build a serious body of intelligence about your company.

Supporting proposition:

> StrategicAI will turn what it learns into useful Business Views—so you can see how work, people, systems, dependencies, bottlenecks, unknowns, and priorities fit together.

Layer bridge:

> The portfolio gives you a useful body of work about the company. Then, for 90 days, bring Nemo the real questions you are facing as an owner.

The page must not claim that the portfolio already exists for a customer who has only reached the public route, and it must not claim that onboarding is available while the current fallback remains active.

# B. Funnel surface reality

| Surface | Current state | Implemented now | Blockers | Next required action |
| --- | --- | --- | --- | --- |
| TOFU media / founder outbound | `EXISTS` as a media-production system; market learning is authorized and exact assets remain release-gated | `NO` in this task | Exact asset G-04/G-08 as applicable, channel/transport, attribution, and experiment record | Clear the gates applicable to the asset; G-01/G-09 apply only when it carries a commercial commitment |
| Comment `SEE` / DM transport | `EXTERNAL PLATFORM DEPENDENCY`; owned by NemoClaw Social DM Automation | `NO` | Upstream provider/platform permission, keyword handling, and delivery receipts | NemoClaw integrates the approved destination and attribution contract; no provider is selected here |
| `/founding100/quick` | `EXISTS / MEDIA BLOCKED`; canonical short-content route | `YES` | Approved 5-minute YouTube asset and asset-level playback QA | Supply `VITE_F100_SHORT_YOUTUBE`, QA, then clear publication gates |
| `/founding100/webinar` | `EXISTS / MEDIA BLOCKED`; canonical ungated 35-minute route, not registration | `YES` | Approved 35-minute YouTube asset and asset-level playback QA | Supply `VITE_F100_DEEP_YOUTUBE`, QA, then clear publication gates |
| `/founding100/offer` sales page | `EXISTS / CHECKOUT BLOCKED` | `YES` | Approved Stripe URL, Terms, Privacy, payment verification, commercial release inputs | Supply `VITE_F100_CHECKOUT_URL` only after the checkout path is approved |
| Stripe payment | `PARTIAL`; the offer is referenced as a `$299` Stripe purchase, but this repository has no Stripe checkout or verification implementation | `NO` | Payment Link/session URL, webhook/session verification, entitlement boundary, refund/tax rules | Authorize and implement the payment contract outside this page task |
| `/founding100` post-payment page | `EXISTS` | `YES` | Payment verification, Formation destination, Terms, Privacy remain unresolved | Keep the fallback until the production handoff is accepted |
| Formation / onboarding | `MISSING` / not production-ready; `/login` and `/roadmap` are placeholders | `NO` | Production destination, auth, entitlement, intake, delivery capacity | Define and accept the Formation path before exposing a CTA |
| Business Intelligence Portfolio | `PARTIAL`; proposition and architecture are specified, but portfolio generation/delivery runtime is not verified in this repo | `NO` | Shared source model, evidence access, projections, persistence, export, correction/versioning | Build the governed portfolio substrate and progressive projections |
| 90 days with Nemo | `PARTIAL`; customer-facing narrative exists, but the exact context/retention boundary is unresolved | `NO` | Nemo availability, context scope, retention, support, question/correction workflow | Ratify the 90-day product contract and acceptance evidence |

# C. Historical webinar registration page specification — superseded

> **DO NOT IMPLEMENT THIS SECTION AS A REGISTRATION OR IDENTITY GATE.** The
> governing `SEE` contract assigns `/founding100/webinar` to direct, ungated
> 35-minute playback. This section is retained only as narrative substrate;
> useful promise, qualification, portfolio, and Nemo language may be adapted
> into that content route after approval.

## Page contract

Historical route recommendation: `/founding100/webinar`. Its current canonical
meaning is the implemented ungated deep-content route defined in the governing
`SEE` contract. It is not a registration page.

### Objective

Move a qualified owner from recognition of a painful operating moment to registration for a 35-minute webinar. The page should make the owner want to see what StrategicAI would discover in the company and imagine what they would ask Nemo if it already had company context.

The page is not the sales page and should not attempt to explain every artifact or close payment.

### Primary audience

Owners and accountable operators of small or growing businesses who recognize one or more of these moments:

- the owner is the place work goes to get unstuck;
- work repeatedly comes back for missing information;
- multiple systems contain pieces of the answer;
- a customer experiences internal handoff failure;
- the owner is the last person to learn about a problem;
- growth or hiring pressure is exposing hidden dependencies.

### Narrative hierarchy

1. **Recognition:** Name one familiar business moment. Do not open with an AI feature list.
2. **Reframe:** The problem may be that the business is not visible as a connected whole.
3. **Promise:** In 35 minutes, show how to build a useful, correctable picture of how the company actually works.
4. **Portfolio preview:** Show four plain-language families of Business Views.
5. **Nemo bridge:** Explain that the portfolio is the context Nemo can work from; it is not a blank chatbot conversation.
6. **Registration:** Ask for one action: reserve a webinar seat or register for the scheduled event.
7. **Qualification:** State who the session is for and what it does not promise.

### Recommended hero copy

Eyebrow:

```text
FOUNDING 100 WEBINAR · 35 MINUTES
```

Headline:

```text
What would you ask if an advisor already knew your business?
```

Supporting copy:

```text
Most AI conversations start with you explaining the company again. This short webinar shows how StrategicAI builds a working picture of the business first—so you can see what is happening, correct what is wrong, and bring Nemo better questions.
```

Primary CTA:

```text
Reserve My Seat
```

If the event is evergreen, use `Watch the Webinar` only after the delivery mode and access path are approved. Do not imply a live event when no live schedule exists.

### Pain / reframe structure

Use one primary pain moment per acquisition source. The registration page may show three recognition examples below the hero, but each must be concrete:

- **The owner is the handoff:** Work waits for one person because the context is not visible elsewhere.
- **The answer is everywhere:** The company has information in systems and people, but no shared picture connects it.
- **The same problem returns:** A fix closes an incident without clarifying the dependency underneath.

Reframe:

> The first question is not “Which AI tool should we buy?” It is “What does the business actually depend on, and can we see it clearly enough to decide what should change?”

### Webinar promise

The page may promise that the webinar will show:

- why an AI that starts from company context can be more useful than a blank conversation;
- what a Business Intelligence Portfolio is for;
- how to see work, people, systems, handoffs, pressure, unknowns, and opportunities;
- why correction is part of building a useful picture;
- how Nemo fits after the picture exists;
- what the Founding 100 offer is designed to include.

The page must not promise a diagnosis, guaranteed automation, guaranteed savings, professional advice, or a finished implementation.

### Portfolio-value preview

Show four families, not a 15-item artifact dump:

1. **Understand the business** — Executive Brief and Current-State Business Profile.
2. **See how it works** — Operating Model, People + Responsibility, Systems + Information, and relevant handoffs.
3. **Find pressure** — Bottlenecks, owner dependence, fragility, contradictions, and unknowns.
4. **Decide what deserves action** — Opportunities, Business Questions, priorities, and a 90-day improvement agenda.

Use language such as:

> The exact views depend on what we discover about your business.

### Advisor-value preview

Use one short section:

```text
Then comes Nemo.

For 90 days, bring Nemo the real questions you are facing as an owner: hiring, growth, customers, bottlenecks, systems, priorities, and decisions. Nemo works from the company context you build with StrategicAI.
```

Boundary line:

> Nemo is a business-aware thinking partner inside the approved experience—not a replacement for accountable leadership or professional advice.

### Qualification language

The session is for owners and operators who want to understand how the business actually works before deciding what to automate, change, or build.

It is not a promise of:

- custom software;
- custom integrations;
- implementation;
- a fixed set of views for every company;
- guaranteed diagnosis or business outcomes.

### Required analytics

Use the existing analytics helper after the event names are approved:

- `founding100_webinar_page_view`;
- `founding100_webinar_registration_started`;
- `founding100_webinar_registration_completed`;
- `founding100_webinar_cta_clicked`;
- `founding100_webinar_qualification_rejected`;
- `founding100_webinar_source_attributed`.

Required payloads: source, medium, campaign, content, clip ID where applicable, webinar mode, scheduled event ID where applicable, and consent state. Do not persist customer data in a new parallel store.

### Required routes and integrations

Before implementation, resolve:

- the canonical route and canonical URL;
- live versus evergreen webinar mode;
- registration provider and form schema;
- confirmation page or confirmation email;
- reminder and attendance sequence;
- CRM or approved lead destination;
- UTM and clip-level attribution;
- consent and privacy language;
- webinar platform and join/access URL;
- failure state if registration delivery fails.

### Mobile behavior

- Put headline, webinar duration, promise, and registration CTA in the first viewport.
- Keep the form short; request only approved fields.
- Use one-column sections and no dense artifact tables.
- Keep the four portfolio families readable without hover.
- Make the CTA at least 44px tall with visible focus.
- Preserve qualification language adjacent to the CTA on mobile.

### Release dependencies

- G-01 commercial authority;
- G-02 funnel authority;
- G-03 Nemo naming authority;
- G-04 claim review;
- G-05 tracking/privacy;
- G-06 channel readiness;
- G-08 advisor narrative authority;
- webinar production and acceptance receipt.

# D. Sales / offer page specification

## Page contract

Implemented route: `/founding100/offer`.

The page implements the governed proposition and `$299` one-time decision while
keeping checkout visibly blocked until an approved Stripe destination and
commercial/legal release inputs exist.

### Objective

Convert a webinar attendee or qualified referral into a clear `$299` one-time purchase decision. The page must explain the independent value of the portfolio and the additional value of 90 days with Nemo without implying that every adaptive view, integration, or implementation is included.

### Offer name and price

```text
StrategicAI Founding 100
$299 one-time
```

Founder-approved price direction:

```text
PRICE_STATUS = FOUNDER_APPROVED_DIRECTION
PRICE_ROLE = EARLY_COHORT_ACQUISITION_AND_LEARNING_PRICE
FOUNDING_100_COHORT = FIRST_100_BUSINESSES
```

The price favors participation, correction, feedback, product learning,
operating diversity, edge cases, usage evidence, and future permissioned
customer evidence during the first-100 stage. It is not a mature StrategicAI
value definition, discount anchor, savings claim, or permanent price. The
first-100 cohort is a real founder strategy, but remaining seats, countdowns,
expiration, unsupported scarcity, and a future exact price increase remain
unauthorized.

The commercial exchange is:

```text
FOUNDING 100 = PROOF-GENERATION + PRODUCT-HARDENING + MARKET-LEARNING COHORT
MATURE HIGH-TICKET FUNNEL = PROOF-LEVERAGING ACQUISITION SYSTEM
```

At `$299`, StrategicAI is intentionally trading away mature margin to obtain
real-company volume, participation, correction, feedback, edge cases, usage
patterns, objection data, delivery learning, and permissioned evidence that
may later support a higher-ticket offering. Outcomes, testimonials,
before/after stories, ROI, screenshots, and case studies are not implied by
joining and may be used publicly only with separate evidence and permission.

Participation and product feedback may be required or expected under the
authorized terms. Anonymized aggregate learning, named testimonials, named
case studies, public artifacts/screenshots, and quantified outcome or ROI
claims require their own approved permission/evidence posture. No additional
founding-member benefit is invented here.

Canonical proposition:

```text
Build Operational Intelligence from how your business actually works.
```

“Build an AI that knows your business” may be used as supporting plain-English
translation after the category is established. It must not lead as the primary
company or offer proposition.

### Recommended hero copy

Headline:

```text
Build a serious body of intelligence about your company.
```

Supporting copy:

```text
StrategicAI builds a working understanding of your business and turns it into a Business Intelligence Portfolio you can inspect, correct, and use. Then you get 90 days with Nemo working from that company context.
```

Primary CTA:

```text
Build My Business Intelligence Portfolio — $299
```

The CTA must point to the approved Stripe Payment Link or checkout route only after the commercial owner provides it. Do not invent a URL in the frontend.

### Offer structure

#### Layer 1 — Your Business Intelligence Portfolio

Position as a substantial, inspectable body of work built from the customer’s business. It should answer:

- how does the business work;
- who owns what;
- where does information live;
- where do handoffs break;
- where does work slow down;
- what depends too heavily on the owner;
- what do we still not know;
- what deserves attention next.

#### Layer 2 — 90 Days with Nemo

Position as a bounded period in which the owner brings real business questions to Nemo against the company context created through Formation and portfolio refinement.

Examples: hiring, growth, customers, bottlenecks, systems, priorities, decisions, and unknowns.

### Guaranteed core versus adaptive views

The offer page should show the commercial decision only after this list is approved as the Founding 100 contract.

#### Proposed guaranteed core

1. Executive Brief;
2. Current-State Business Profile;
3. Operating Model View;
4. People + Responsibility View;
5. Systems + Information View;
6. Bottleneck + Owner Dependency View;
7. Opportunity Map;
8. Unknowns + Open Questions;
9. 90-Day Improvement Agenda;
10. Business Questions Queue.

#### Adaptive Business Views

Additional views may be produced when the discovered business supports them:

- Handoff + Dependency Map;
- Operating Fragility Map;
- Automation Readiness Map;
- Decision + Priority Map;
- function-specific operating views;
- deeper dependency or contradiction views.

Customer-facing boundary:

> The core questions stay consistent. The exact views depend on what we discover about your business.

### Who it is for

- an owner or accountable operator who wants a clearer picture before choosing an intervention;
- a business where knowledge, work, systems, and ownership are distributed across people and tools;
- an owner willing to correct what StrategicAI gets wrong;
- an owner who has real questions to bring during the 90-day period.

### Who it is not for

- someone looking for a generic chatbot subscription;
- someone purchasing custom software or integrations;
- someone expecting guaranteed automation or implementation;
- someone looking for a fixed template or identical report bundle;
- someone expecting professional legal, accounting, medical, or other regulated advice;
- someone unwilling to provide evidence or correct the picture.

### Scope boundaries

The page must say plainly:

```text
Your purchase does not automatically include custom integrations, custom software, or implementation work.
```

Also state:

- correction is part of the product;
- StrategicAI preserves uncertainty, disagreement, and missing evidence;
- the exact views depend on the business;
- the 90-day period is not a guaranteed implementation plan;
- continuation after 90 days is a separate decision and commercial boundary.

### FAQ

**What do I receive?**

You receive a Business Intelligence Portfolio built around your company, with a core set of views and additional views where the business supports them. You also receive the approved 90-day Nemo experience.

**Is this a chatbot subscription?**

No. StrategicAI first builds an understanding of the business. Nemo is how you work with that understanding.

**Do I get every Business View listed?**

No. The core questions are consistent, but the exact views depend on what we discover.

**What if StrategicAI gets something wrong?**

Say so. “No, that’s not how it works” is useful information and helps correct the picture.

**Does this include custom software or integrations?**

Not automatically. Those require separate scope and approval.

**What happens after 90 days?**

You review what the portfolio and Nemo experience helped you understand, then decide whether to continue under the available product or engagement path.

**Is the portfolio a diagnosis or implementation plan?**

It is a working business intelligence portfolio and improvement agenda. It does not guarantee a diagnosis, implementation, or outcome.

### Analytics

Use the existing analytics helper after event names are approved:

- `founding100_offer_page_view`;
- `founding100_offer_portfolio_section_view`;
- `founding100_offer_nemo_section_view`;
- `founding100_offer_faq_opened`;
- `founding100_offer_payment_cta_clicked`;
- `founding100_offer_payment_started`;
- `founding100_offer_payment_completed` (only from an authorized server/provider signal);
- `founding100_offer_support_clicked`.

Never emit `payment_completed` from a button click alone.

### Relationship to webinar and post-payment

- The deep webinar content is the primary belief-conversion and future
  purchase-readiness engine: company context and a visible picture are more
  useful than starting from zero, subject to the evidence and runtime boundary.
- The offer page completes the purchase decision after that belief work: the
  prospect can evaluate the proposed Portfolio plus the proposed 90-day Nemo
  layer against an authorized scope, terms, and risk boundary.
- The offer page is not expected to perform the entire sale from a cold start,
  and its decision CTA remains inactive while commercial authority is open.
- Stripe owns payment completion.
- `/founding100` confirms the handoff experience but does not establish payment authority until server-side verification exists.
- Formation creates or refines the underlying business understanding.

### Release dependencies

- commercial authority for `$299`, scope, refunds, taxes, eligibility, capacity, start date, and continuation;
- approved Stripe Payment Link or checkout route;
- server-side payment/session verification;
- Formation destination and auth;
- Terms and Privacy routes;
- support route;
- exact 90-day Nemo context/retention boundary;
- approval of guaranteed core language;
- G-01 through G-09.

# E. Funnel implementation backlog

## NOW

- Keep `/founding100` on the Business Intelligence Portfolio proposition with the onboarding fallback visible.
- Preserve the implemented Comment `SEE` route, Message Card, browser-tab attribution, and analytics contract.
- Keep DM/social transport ownership with NemoClaw Social DM Automation.
- Ratify the guaranteed core list and adaptive-view boundary.
- Ratify the content roles, offer terms, Nemo naming, and 90-day context boundary.
- Resolve G-01 through G-09 ownership and evidence requirements.

## NEXT

- Produce and acceptance-test the 5-minute and 35-minute assets.
- Configure the approved YouTube assets and run real playback/progress analytics QA.
- Connect the approved Stripe path and server-side verification.

## LATER

- Build Formation/onboarding and portfolio delivery runtime.
- Add interactive portfolio views, snapshots, sharing, and correction history.
- Add continuation decision and post-90-day commercial surfaces.

# Final status

```text
F100_FUNNEL_SURFACE_UPGRADE = PASS_WITH_BLOCKERS

LIVE_SURFACE_UPDATE = PASS
WEBINAR_REGISTRATION_SPEC = SUPERSEDED_DO_NOT_IMPLEMENT
SALES_OFFER_SPEC = PASS
SHORT_CONTENT_PAGE = IMPLEMENTED_MEDIA_BLOCKED
DEEP_CONTENT_PAGE = IMPLEMENTED_MEDIA_BLOCKED
SALES_OFFER_PAGE = IMPLEMENTED_CHECKOUT_BLOCKED
FORMATION = NOT_READY
PAYMENT_VERIFICATION = NOT_YET_AUTHORIZED
TERMS_ROUTE = UNRESOLVED
PRIVACY_ROUTE = UNRESOLVED
PUBLIC_10K_CLAIM = NOT_AUTHORIZED

OPEN_BLOCKERS =
- No production Formation/onboarding destination.
- No authorized server-side Stripe payment verification.
- Comment-to-DM transport is an external NemoClaw dependency; no provider code belongs in this repository.
- No 5-minute or 35-minute video asset.
- No approved checkout URL.
- Terms and Privacy routes are unresolved.
- Guaranteed core and exact 90-day Nemo context boundary require commercial/product authority.

NEXT_EXACT_ACTION =
Produce and approve the 5-minute YouTube asset, configure `VITE_F100_SHORT_YOUTUBE`, and run asset-level playback/progress QA. In parallel, supply the approved Stripe destination and clear Terms, Privacy, and payment-verification gates.
```
