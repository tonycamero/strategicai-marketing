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

This document separates what is live from what is only described in the Founding 100 marketing substrate. Its offer and post-payment sections remain implementation substrate. The former registration-gated webinar model is retained only as a compact historical note and is superseded by `14_COMMENT_SEE_FUNNEL_AND_MESSAGE_CARD_CONTRACT.md`.

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

The converged funnel model is:

```text
TOFU / SEE
    → QUICK OR DEEP
    → DEEP BELIEF CONVERSION
    → OFFER
    → PAYMENT WHEN AUTHORIZED
    → POST-PAYMENT
    → PLATFORM / FORMATION HANDOFF
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

### Layer 2 — 90 days to Ask Nemo

The customer uses Ask Nemo to bring real owner questions about hiring, growth, bottlenecks, customers, systems, priorities, and decisions. Nemo is presented as working from the company context built through the portfolio. The value is the repeated behavior of asking from accumulated context, not access to a generic chatbot.

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

> The portfolio gives you a useful body of work about the company. Then, for 90 days, Ask Nemo the real questions you are facing as an owner—from the context you have built.

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
| 90 days to Ask Nemo | `PARTIAL`; customer-facing narrative exists, but the exact context/retention boundary is unresolved | `NO` | Nemo availability, context scope, retention, support, question/correction workflow | Ratify the 90-day product contract and acceptance evidence |

# C. Current webinar role and compact historical record

The active role of `/founding100/webinar` is:

```text
DIRECT UNGATED 35-MINUTE PLAYBACK
```

It is a deep belief-conversion surface, not a registration page. It has no
email gate, identity gate, registration form, or scheduled-event dependency.
The accepted 35-minute beat sheet, Ask Nemo curiosity, Golden Thread
continuity, and launch-state proof posture govern the route. Publication remains
blocked until the proof and commercial gates close.

Historical note: a registration-gated webinar architecture was previously
considered. It is superseded by
`14_COMMENT_SEE_FUNNEL_AND_MESSAGE_CARD_CONTRACT.md`. Its former “Reserve My Seat”
CTA, registration provider/form, confirmation and reminder sequence,
webinar access URL, consent state, scheduled event ID, and registration
analytics are historical record only—not current implementation instructions.
Useful historical promise or qualification language may be retained only when
compatible with the direct-playback route. The former “What would you ask if an
advisor already knew your business?” framing is not the current dominant Nemo
metaphor; translate it to the accepted Ask Nemo/context-rich AI language where
useful.

# D. Sales / offer page specification

## Page contract

Implemented route: `/founding100/offer`.

The page implements the governed proposition and `$299` one-time decision while
keeping checkout visibly blocked until an approved Stripe destination and
commercial/legal release inputs exist.

### Objective

Convert a webinar attendee or qualified referral into a clear `$299` one-time purchase decision. The page must explain the independent value of the portfolio and the additional value of 90 days to Ask Nemo without implying that every adaptive view, integration, or implementation is included.

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

The offer is the possibility surface in the public narrative. It follows the
same human problem as the homepage:

> **Why does the full picture of how your business works still live in your
> head?**

The offer answers with a bounded possibility rather than an omniscience claim:

> **What becomes possible when the full picture no longer lives in one head?**

The value path remains:

```text
how the business actually works
    -> Operational Reality
    -> Operational Intelligence
    -> Business Views / SEE
    -> Ask Nemo / ASK
    -> action when warranted
```

The desired progression after understanding is:

> **See from it through Business Views. Think from it. Ask Nemo.**

“Build an AI that knows your business” may be used as supporting plain-English
translation after the category is established. It must not lead as the primary
company or offer proposition.

### Recommended hero copy

Headline:

```text
What becomes possible when the full picture no longer lives in one head?
```

Supporting copy:

```text
StrategicAI builds a working understanding of how your business actually works—one you can see through Business Views, inspect, and correct. Then you get the authorized 90-day experience to Ask Nemo the questions you actually care about from the company context you have built.
```

Keep the portfolio concrete in the following section: it is a serious body of
company intelligence, not generic AI access. Keep the curiosity bridge
prominent in the Ask Nemo section:

> **How much better is AI when you don’t spend half the conversation teaching
> it what world it is operating inside? Ask Nemo.**

This copy describes the intended experience; it does not guarantee a complete
picture, a fixed Business View bundle, an outcome, or public customer proof.

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

#### Layer 2 — 90 Days to Ask Nemo

Position as a bounded period in which the owner can Ask Nemo real business questions against the company context created through Formation and portfolio refinement.

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

#### Executive Brief classification

Executive Brief remains a proposed portfolio artifact within the guaranteed-core
discussion. It is not StrategicAI’s public category, the current homepage
front door, or the primary Founding 100 acquisition CTA. Any inclusion in the
commercial contract still requires separate approval.

### Who it is for

- an owner or accountable operator who wants a clearer picture before choosing an intervention;
- a business where knowledge, work, systems, and ownership are distributed across people and tools;
- an owner willing to correct what StrategicAI gets wrong;
- an owner who has real questions to Ask Nemo during the 90-day period.

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

You receive a Business Intelligence Portfolio built around your company, with a core set of views and additional views where the business supports them. You also receive the approved 90-day Ask Nemo experience.

**Is this a chatbot subscription?**

No. StrategicAI first builds an understanding of the business. Ask Nemo is how you work with that understanding.

**Do I get every Business View listed?**

No. The core questions are consistent, but the exact views depend on what we discover.

**What if StrategicAI gets something wrong?**

Say so. “No, that’s not how it works” is useful information and helps correct the picture.

**Does this include custom software or integrations?**

Not automatically. Those require separate scope and approval.

**What happens after 90 days?**

You review what the portfolio and Ask Nemo experience helped you understand, then decide whether to continue under the available product or engagement path.

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
  prospect can evaluate the proposed Portfolio plus the proposed 90-day Ask
  Nemo layer against an authorized scope, terms, and risk boundary.
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
