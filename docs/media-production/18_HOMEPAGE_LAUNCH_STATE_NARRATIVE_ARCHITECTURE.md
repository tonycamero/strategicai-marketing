---
id: STRATEGICAI-HOMEPAGE-LAUNCH-STATE
title: StrategicAI Homepage Launch-State Narrative Architecture
status: IMPLEMENTED_WITH_PUBLICATION_BOUNDARY
version: 1.0
created: 2026-08-30
authority: Homepage narrative and copy architecture only
depends_on:
  - ../01 Narrative Constitution/STRATEGICAI_NARRATIVE_CONSTITUTION.md
  - ../00 Foundation/Stewardship/Product Authority/PRODUCT_SHIFT_AUTHORITY_2026-08-25.md
  - 00_RELEASE_AUTHORITY_AND_DECISIONS.md
  - 15_FOUNDING_100_HIGH_CONVERSION_FUNNEL_ARCHITECTURE.md
  - 16_FOUNDING_100_BELIEF_OBJECTION_PROOF_MATRIX.md
  - 17_FOUNDING_100_35_MINUTE_CONVERSION_BEAT_SHEET.md
---

# StrategicAI Homepage Launch-State Narrative Architecture

## Purpose

The homepage is the company-level entry surface. It should make an owner
recognize the business they are living inside, let them see StrategicAI perform
a bounded version of the mechanism, and create a coherent handoff into the
Founding 100 path.

The homepage is not the 35-minute conversion presentation. It compresses the
belief movement and the Golden Proof Thread into a shorter first encounter:

```text
HUMAN RECOGNITION
    -> THE BUSINESS IS MOVING / THE OWNER IS RECONSTRUCTING THE STORY
    -> REFRAME
    -> GOLDEN THREAD
    -> OPERATIONAL REALITY / OPERATIONAL INTELLIGENCE
    -> BUSINESS VIEWS — WHAT CAN I SEE?
    -> ASK NEMO — WHAT CAN I ASK?
    -> FOUNDER / WHY THIS EXISTS
    -> FOUNDING 100
```

The presentation expands the same logic into a full belief transformation,
then uses a longer Golden Proof Thread, objections, desire, and the Founding
100 exchange. The two surfaces must feel like one system, not two unrelated
sales stories.

## Release posture

```text
FINAL_NARRATION = AUTHORIZED_FOR_DRAFT
ASSUME_LAUNCH_STATE_PROOF = TRUE
P0_PROOF_RECEIPTS = REQUIRED_BEFORE_PUBLICATION / NOT_REQUIRED_BEFORE_NARRATION
FINAL_PUBLICATION = BLOCKED_UNTIL_PROOF_AND_COMMERCIAL_ACCEPTANCE
```

This architecture may be implemented against the launch-state proof sequence.
The homepage must not represent a mock, storyboard, or legacy screenshot as
accepted current runtime proof. The 30–60 second visual proof slot must be
replaced or verified with the accepted Golden Proof Thread before public
release. Customer outcomes, testimonials, case studies, ROI, and public
artifacts still require separate evidence and permission.

## Audit of the humanized homepage

The production `/` route is `AlternateHomePage`, rendered inside the existing
`Shell` with the shared `Navbar` and `Footer`. The older `HomePage` component is
not the production route.

| Surface | Current implementation | Doctrine / conversion finding | Authority position |
| --- | --- | --- | --- |
| Hero | “Everyone has a piece. You’re still the one putting it together.” | Human recognition is the front door; proof is the primary next step | Preserve the humanized headline, proof CTA, and subordinate Founding 100 path |
| Recognition | Concrete owner moments around handoffs, interruptions, delays, and unwritten workarounds | People should recognize their own week before seeing product terminology | Keep PEOPLE FIRST / PRODUCT EXPLANATION SECOND |
| Reframe | Understanding precedes intervention; “Automation Without Understanding” is category contrast | The problem is not a lack of activity; it is an invisible operating picture | Keep actions broader than automation: clarify, fix, notify, investigate, automate when warranted, or leave alone |
| Proof | Four-part Golden Proof Thread with insertion-ready visual frames | One business/problem/evidence lineage makes the mechanism observable | Preserve `AWAITING_REAL_PROOF` until accepted launch-state capture is cleared |
| Category | Operational Reality → Operational Intelligence | The category should arrive after recognition and mechanism proof | Preserve the category and keep definitions human-readable |
| Business Views | Question-oriented inspection surfaces | Views are how the owner sees bounded parts of the picture | Use “What are you trying to understand right now?” rather than a static dashboard catalog |
| Ask Nemo | Active “Ask Nemo” behavior after the picture is available | The public job is experiential curiosity, not an abstract feature label | Preserve Ask Nemo as behavior; do not make Nemo the product or imply omniscience |
| Founder / close | Founder bridge followed by Founding 100 exchange | Human origin and cohort rationale complete the recognition-to-action movement | Preserve authentic-media-only posture and the current authorized commercial boundaries |

## Canonical homepage proposition

The product statement that governs the page is:

> **StrategicAI is Operational Intelligence built from Operational Reality.**

Plain-English translation:

> **StrategicAI helps you understand how your business actually works before
> you decide what should change, be automated, or be left alone.**

“An AI that knows your business” may be used as explanatory shorthand when it
helps comprehension. It is not the homepage headline, category, or primary
promise.

The homepage must preserve this hierarchy:

```text
HOW THE BUSINESS ACTUALLY WORKS
    -> OPERATIONAL REALITY
    -> OPERATIONAL INTELLIGENCE
    -> BUSINESS VIEWS / SEE
    -> ASK NEMO / ASK
    -> CAPABILITIES / AUTOMATION / EXECUTION WHEN WARRANTED
```

The public value architecture is:

```text
HOW THE BUSINESS ACTUALLY WORKS
    ↓
OPERATIONAL REALITY
    ↓
OPERATIONAL INTELLIGENCE
    ├── BUSINESS VIEWS → SEE
    └── ASK NEMO → ASK
    ↓
ACTION / CAPABILITY WHEN WARRANTED
```

## Exact copy architecture

### 1. Hero — recognition has an owner

**Role:** Recognition and immediate category entry.

**Kicker:**

> HOW THE BUSINESS ACTUALLY WORKS

**Headline:**

> **Everyone has a piece.**
>
> **You’re still the one putting it together.**

**Body:**

> The answer lives across your people, systems, files, meetings, and memory.
> StrategicAI turns those pieces into a picture of how the business actually
> works—one the owner can inspect, correct, and use.

**Primary CTA:**

> **See the proof**

Destination: `#proof-thread`.

**Secondary CTA:**

> **Explore Founding 100**

Destination: `/founding100/offer` with the current Founding 100 attribution
context.

**Support line:**

> Start with the evidence already inside the organization. See the proof before
> deciding what deserves your attention.

**Hero boundary:** Do not promise complete understanding, automatic diagnosis,
guaranteed improvement, or an active purchase. The primary CTA remains
proof-oriented: **See the proof** → `#proof-thread`.

### 2. Recognition — the business is moving and the owner is reconstructing the story

**Role:** Recognition → tension.

**Section label:**

> YOU KNOW THESE MOMENTS

**Headline:**

> **The business is moving.**
>
> **You’re still reconstructing the story.**

**Body:**

> A customer asks what happened. Sales has one answer. Operations has another.
> A system has part of the truth. Someone remembers the exception.

**Recognition points:**

- Three people need you to answer: “What happens next?”
- Sales says it was handed off; Operations says they never got what they needed.
- The problem was visible Tuesday; you found out Friday.
- One person knows why the workaround exists; nobody wrote it down.

**Closing line:**

> These aren’t random annoyances. They’re clues about how the business actually
> works.

Keep the governing rule: **PEOPLE FIRST. PRODUCT EXPLANATION SECOND.**

The recognition section should make the owner think, “That is my company,”
before introducing Operational Reality, Business Views, or Nemo terminology.

### 3. Reframe — understanding precedes intervention

**Role:** Tension → new explanation and category contrast.

**Section label:**

> THE REFRAME

**Headline:**

> **Your business already has an operating model.**
>
> **It just may not be visible.**

**Body:**

> The real business lives in the relationships between people, work, systems,
> decisions, exceptions, and history. Before you add another tool—or automate
> another step—you need to see that picture clearly enough to challenge it.

**Callout:**

> **Automation Without Understanding**

> Start with the picture. Then decide what deserves action.

The action set remains broader than automation:

- clarify ownership;
- fix a handoff;
- investigate;
- notify someone;
- automate when the picture supports it;
- leave it alone.

**Boundary:** This is a category contrast, not a claim about every named
competitor or a rejection of automation.

### 4. Visual proof thread — 30–60 seconds

**Role:** Convert explanation into an observable mechanism.

**Section label:**

> SEE THE MOVE

**Headline:**

> **A short proof of what changes when the picture becomes inspectable.**

**Intro:**

> Follow one operating problem through the same evidence lineage. The point is
> not to show a feature tour. The point is to show the picture forming, being
> corrected, becoming visible, and supporting a better question.

**Golden Proof Thread for the homepage:**

```text
same business / same operating problem / same evidence lineage
    -> people and systems contribute evidence
    -> a bounded picture forms
    -> disagreement and one unknown remain visible
    -> the owner corrects the picture
    -> a bounded Business View makes the relationship visible / SEE
    -> Ask Nemo follows one consequential question from that context / ASK
```

**Proof controls:**

- `Start the 45-second proof`
- `Pause proof`
- Four direct step controls: `Evidence`, `Picture`, `Correction`, `Ask Nemo`

**Proof step copy:**

1. **Evidence — Different people hold different parts of the picture.**
   Leadership context and team evidence show what each role sees around the
   same operating pressure.
2. **Picture — The evidence becomes a bounded operating picture.** The system
   makes relationships, pressure, and missing context inspectable without
   pretending the unknown is known.
3. **Correction — The owner can say, “No. That’s not how it works.”** The
   accepted picture changes when the owner corrects a relationship or boundary.
4. **Ask Nemo — What you can ask next.** Business Views make a bounded part of
   the picture visible. Ask Nemo lets the owner bring a consequential question
   to the accepted company context rather than start from a blank prompt.

**Proof close:**

> The value is not a prettier dashboard. It is a more useful place to begin.

The Golden Thread should culminate in the experiential question:

> **What would you Ask Nemo once the business is already in the room?**

**Release requirement:** The final public asset must be a real accepted capture
or a clearly labeled controlled demonstration. Legacy images may illustrate the
current surface during implementation, but they must not be presented as proof
of the complete launch-state thread.

### 5. Category — name the territory after the viewer has seen it

**Role:** Give the mechanism a durable category.

**Section label:**

> THE CATEGORY

**Headline:**

> **StrategicAI is Operational Intelligence built from Operational Reality.**

**Body:**

> Operational Reality is how the organization actually works across people,
> systems, work, decisions, authority, dependencies, constraints, exceptions,
> competing perspectives, and unknowns. StrategicAI is being built to turn that
> reality into useful intelligence for better-scoped questions and decisions.

**Hierarchy labels:**

- **Operational Reality** — the connected reality already present in the company.
- **Operational Intelligence** — useful understanding formed from that reality.
- **Business Views** — bounded ways to inspect selected relationships and conditions; the public question is, “What can I see?”
- **Ask Nemo** — the behavior of bringing a consequential question to the available company context; the public question is, “What can I ask?”
- **Capabilities** — automation, change, ownership, alerts, investigation, or no change when warranted.

**Close:**

> The order matters: evidence before prescription, scope before automation.

### 6. Business Views — make the useful parts visible

**Role:** Translate category into visible value.

**Section label:**

> BUSINESS VIEWS

**Headline:**

> **What are you trying to understand right now?**

**Body:**

> Business Views are question-oriented, bounded, inspectable projections of the
> company picture. They make selected relationships, dependencies, bottlenecks,
> unknowns, or priorities visible without pretending to own the whole truth.

**View examples:**

- What still depends on me?
- Where does work get stuck?
- Who needs what from whom?
- What do we still not know?
- What deserves attention next?

**Boundary line:**

> The starting questions stay consistent. The exact views depend on what the
> evidence supports; this is not a static dashboard catalog.

### 7. Ask Nemo — experiential curiosity from company context

**Role:** Let the owner imagine the first consequential question they would ask
once the business is already in the room. The architecture remains an
interaction layer, but the public job is experiential curiosity.

**Section label:**

> ASK NEMO

**Headline:**

> **What would you Ask Nemo first?**

**Body:**

> Once the company picture is available, Ask Nemo gives you somewhere real to
> start. Bring the question that matters: where work is waiting, what depends
> on one person, which handoff is fragile, what remains unknown, and what should
> be looked at next.

**Curiosity line:**

> How much better is AI when you do not spend half the conversation teaching it
> what world it is operating inside? **Ask Nemo.**

**Question examples:**

- What still depends too much on me?
- Where does this customer handoff become fragile?
- Which relationship should I inspect before I automate this?

**Boundary line:**

> Ask Nemo is not omniscient, automatically authoritative, professionally
> licensed, or a replacement for accountable leadership. Nemo reasons from the
> company context that is actually available in the named experience.

### 8. Founder — why I’m building this

**Role:** Create the human bridge between the operating problem and the cohort
without turning the homepage into a biography.

**Section label:**

> WHY I’M BUILDING THIS

**Bridge:**

> Everybody had a piece of the answer. The owner was still the one putting it
> together. Then AI made it incredibly easy to automate pieces of a company—and
> I became convinced we were starting in the middle.

> StrategicAI is my attempt to make how the business actually works visible
> before we decide what software, people, process, or automation should do next.

**Media boundary:**

Use authentic founder media only when available and approved. No stock founder
imagery. No generated founder imagery. A real founder note, portrait, or short
founder video may support this section; it must not become fabricated proof.

### 9. Founding 100 — make the cohort rationale legible

**Role:** Handoff into the early-cohort experience.

**Section label:**

> FOUNDING 100

**Headline:**

> **If everyone has a piece and you’re still the one putting it together, start
> here.**

**Body:**

> We’re opening StrategicAI to the first 100 businesses at `$299`. Bring the
> real business: messy handoffs, unwritten rules, conflicting perspectives, and
> hard questions. We’ll build the picture with you, you correct what we get
> wrong, and during the authorized Founding 100 experience you can Ask Nemo the
> questions you care about from the context you’ve built.

**Value bridge:**

> This is not access to another AI tool. It is participation in building the
> evidence base, delivery learning, correction patterns, and usage understanding
> that a mature StrategicAI offering will eventually need.

**CTA:**

> **Explore Founding 100**

Destination: `/founding100/offer` with the current attribution context.

**Secondary CTA:**

> **See how it works**

Destination: `/how-it-works`.

**Commercial boundary:** The homepage must not imply an active purchase, price,
guaranteed Business View bundle, verified 90-day Nemo continuity, outcome,
scarcity, or public proof permission while the applicable commercial and release
gates remain open. The offer route itself owns the current checkout state.

## Executive Brief residue classification

- **Historical:** the pre-humanization homepage architecture used Executive Brief
  as a primary entry and CTA; that architecture is retired.
- **Portfolio artifact:** Executive Brief may remain as one proposed artifact in
  the Business Intelligence Portfolio where the offer specification explicitly
  classifies it that way.
- **Active acquisition CTA:** none on the current homepage authority. The live
  primary path is proof → Founding 100; Executive Brief is not the public front
  door.
- **Stale removed:** `Build My Executive Brief`, `Start with My Executive
  Brief`, and their homepage CTA source contracts are not current homepage copy.

## Visual system preservation

The implementation uses the existing visual language:

- `bg-slate-950` page background and slate surfaces;
- cyan accent, white primary type, slate-muted body copy;
- existing `max-w-6xl` section container and generous vertical rhythm;
- rounded-3xl / rounded-[2rem] bordered surfaces;
- `brain-bg.png` as the existing hero atmosphere, with the current edge fade;
- explicit `homepage-proof-*-placeholder.svg` assets in the proof thread and
  existing `ImageViewer` behavior; each placeholder is designed for mechanical
  replacement with the accepted launch-state capture;
- no new brand, typography, logo, navigation, or visual paradigm.

The proof thread varies density within the existing system: an image-led frame,
an explicit state transition, and a question frame. It is not a new dashboard
or a replacement product UI.

## Analytics contract

The homepage should measure belief progression and qualified movement, not vanity
engagement alone:

| Event | Required payload |
| --- | --- |
| `homepage_view` | `page`, `surface_version` |
| `homepage_proof_start` | `proof_thread`, `surface_version` |
| `homepage_proof_step` | `proof_step`, `step_index`, `auto_advanced` |
| `homepage_proof_complete` | `proof_thread`, `completed_steps` |
| `homepage_proof_pause` | `proof_step`, `elapsed_step_count` |
| `homepage_business_view_select` | `view_id` |
| `homepage_nemo_question_select` | `question_id` |
| `founding100_cta_click` | `source`, `destination`, `commercial_branch_state` |

Readouts should separate owner comprehension and continuation from competitor
reaction. A click does not prove category adoption or runtime capability.

## Release checklist

- [x] Homepage order is human recognition → reframe → Golden Thread → category → Business Views / SEE → Ask Nemo / ASK → founder → Founding 100.
- [x] Existing dark/cyan visual system and shared shell are preserved.
- [x] “An AI that knows your business” is not the headline or primary promise.
- [x] Automation Without Understanding is direct but category-focused and not anti-automation.
- [x] Golden Proof Thread uses one declared business/problem/evidence lineage.
- [x] Homepage proof controls and insertion-ready placeholder images are live.
- [x] Business Views and Ask Nemo are visible before the founder and Founding 100 close.
- [x] Executive Brief remains classified as a possible portfolio artifact, not the homepage product or acquisition CTA.
- [ ] Accepted launch-state proof receipt and final capture replace the four visible placeholders.
- [ ] G-04, G-07, G-08, G-09, legal review, commercial acceptance, and applicable
      product/runtime receipts are closed before final publication.

## Exact next action

> Attach the accepted launch-state Golden Proof Thread capture to the homepage
> proof slot, then run the public release review against the proof and
> commercial gates. Do not convert the current illustrative frames into
> unqualified runtime claims before that review.
