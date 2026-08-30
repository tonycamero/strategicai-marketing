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

The homepage is the company-level entry surface. It should make the category
intelligible, let an owner see StrategicAI perform a bounded version of the
mechanism, and create a coherent handoff into the Founding 100 path.

The homepage is not the 35-minute conversion presentation. It compresses the
belief movement and the Golden Proof Thread into a shorter first encounter:

```text
PAIN
    -> REFRAME
    -> 30–60 SECOND VISUAL PROOF
    -> CATEGORY
    -> BUSINESS VIEWS
    -> NEMO
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

## Audit of the existing homepage

The production `/` route is `AlternateHomePage`, rendered inside the existing
`Shell` with the shared `Navbar` and `Footer`. The older `HomePage` component is
not the production route.

| Existing surface | Current implementation | Doctrine / conversion finding | Required correction |
| --- | --- | --- | --- |
| Hero | “Change with clarity, control, and proof.” with a free Executive Brief CTA | Safe but too broad and still framed as governed change rather than the current category | Lead with how the business actually works and the Operational Intelligence proposition |
| Problem | Risk beneath change, fragmented context, and disconnected execution | Recognizable, but does not name the highest-conviction acquisition tension: Automation Without Understanding | Start with recurring operating pain and the risk of automating a guess |
| Proof | Sample Executive Brief image and Mission Control screenshot | A sample modal and a separate legacy product image are not a compressed proof thread | Add a 30–60 second evidence → picture → correction → question sequence using one lineage |
| Product explanation | “Digital Twin,” Executive Brief, Diagnostic, Roadmap, Mission Control | “Digital Twin” is not the current top-level category; Roadmap / Mission Control lead the visitor downstream too early | Use Operational Reality → Operational Intelligence → Business Views → Nemo → warranted action |
| Journey | Executive Brief → Diagnostic → Roadmap → Execution | This is a delivery journey, not the current homepage acquisition argument | Move the homepage through pain, reframe, proof, category, views, Nemo, and cohort |
| Business Views | Not named | The visible expression of Operational Intelligence is missing | Explain views as bounded, inspectable projections of the company picture |
| Nemo | Not named | The intended interaction layer is absent | Show Nemo as reasoning from available company context, not as a generic chatbot or advisor |
| CTA | “Build My Executive Brief” repeated | Useful existing entry point, but it is not the only next step and does not connect to Founding 100 | Keep Executive Brief as a low-friction path; add proof and Founding 100 paths with honest boundaries |
| Audience | Accountable leaders broadly | Good starting audience, but the page does not speak enough to the owner’s recurring operating experience | Use owner language: work, people, systems, handoffs, dependencies, bottlenecks, unknowns, and priorities |
| Claims | Some copy implies downstream delivery and outcome logic | Existing copy risks collapsing architecture, current runtime, and delivery into one promise | Use direct doctrine language; use intended-experience language where runtime or commercial acceptance remains open |

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
    -> BUSINESS VIEWS
    -> NEMO
    -> CAPABILITIES / AUTOMATION / EXECUTION WHEN WARRANTED
```

## Exact copy architecture

### 1. Hero — pain has an object

**Role:** Recognition and immediate category entry.

**Kicker:**

> HOW THE BUSINESS ACTUALLY WORKS

**Headline:**

> **See how your business actually works.**

**Body:**

> StrategicAI helps you form a credible, inspectable picture of the people,
> work, systems, decisions, dependencies, and pressure shaping the business—
> then turn that picture into Operational Intelligence.

**Primary CTA:**

> **See the proof**

Destination: `#proof-thread`.

**Secondary CTA:**

> **Build My Executive Brief**

Destination: existing production signup with source
`homepage_hero_executive_brief`.

**Support line:**

> Start with the evidence already inside your organization. No purchase is
> required to begin the Executive Brief.

**Hero boundary:** Do not promise complete understanding, automatic diagnosis,
guaranteed improvement, or an active Founding 100 purchase.

### 2. Pain — the business is moving without a shared explanation

**Role:** Recognition → tension.

**Section label:**

> THE OPERATING PROBLEM

**Headline:**

> **The work is moving. The explanation is missing.**

**Body:**

> The same problems keep returning in different forms. One person sees the
> handoff; another sees the delay. The system holds a fragment. The owner gets
> the escalation. By the time the pattern is visible, the business is already
> working around it.

**Recognition points:**

- Everything keeps coming back to the owner.
- Handoffs break between people, tools, or decisions.
- Priorities change before ownership and capacity catch up.
- Important context is spread across systems, files, conversations, and memory.

**Closing line:**

> This is not a request for more activity. It is a request for a better picture.

### 3. Reframe — understanding precedes intervention

**Role:** Tension → new explanation and category contrast.

**Section label:**

> THE REFRAME

**Headline:**

> **Before you automate the work, understand the system producing it.**

**Body:**

> If an AI automation system does not understand how your company actually
> works, it is automating a guess. Automation may still be the right move—but
> only after the evidence shows what the work is, where it depends on something
> else, and what the intervention is supposed to change.

**Callout:**

> **Automation Without Understanding**

> Start with the picture. Choose the intervention after.

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
    -> a bounded Business View makes the relationship visible
    -> Nemo follows one consequential question from that context
```

**Proof controls:**

- `Start the 45-second proof`
- `Pause proof`
- Four direct step controls: `Evidence`, `Picture`, `Correction`, `Question`

**Proof step copy:**

1. **Evidence — Different people hold different parts of the picture.**
   Leadership context and team evidence show what each role sees around the
   same operating pressure.
2. **Picture — The evidence becomes a bounded operating picture.** The system
   makes relationships, pressure, and missing context inspectable without
   pretending the unknown is known.
3. **Correction — The owner can say, “No. That’s not how it works.”** The
   accepted picture changes when the owner corrects a relationship or boundary.
4. **Question — The next question follows the relationship.** Nemo is intended
   to help the owner reason from the accepted company context rather than start
   from a blank prompt.

**Proof close:**

> The value is not a prettier dashboard. It is a more useful place to begin.

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
- **Business Views** — bounded ways to inspect selected relationships and conditions.
- **Nemo** — the intended interaction layer for reasoning from available company context.
- **Capabilities** — automation, change, ownership, alerts, investigation, or no change when warranted.

**Close:**

> The order matters: evidence before prescription, scope before automation.

### 6. Business Views — make the useful parts visible

**Role:** Translate category into visible value.

**Section label:**

> BUSINESS VIEWS

**Headline:**

> **See the part of the business you need to understand next.**

**Body:**

> Business Views are bounded, inspectable projections of the company picture.
They can make selected relationships, dependencies, bottlenecks, unknowns, or
priorities visible without pretending to own the whole truth.

**View examples:**

- How work moves
- Who owns what
- Where information lives or goes missing
- Where handoffs break
- What depends too heavily on the owner
- What is still unknown or disputed
- What deserves attention next

**Boundary line:**

> The starting questions stay consistent. The exact views depend on what the
> evidence supports.

### 7. Nemo — reason from company context

**Role:** Explain the interaction layer without collapsing the product into a chatbot.

**Section label:**

> NEMO

**Headline:**

> **Nemo gives the owner somewhere real to start.**

**Body:**

> Once the company picture is available, Nemo is intended to help you inspect
> the questions that matter: where work is waiting, what depends on one person,
> which handoff is fragile, what remains unknown, and what should be looked at
> next.

**Question examples:**

- What still depends too much on me?
- Where does this customer handoff become fragile?
- Which relationship should I inspect before I automate this?

**Boundary line:**

> Nemo is not omniscient, automatically authoritative, professionally licensed,
> or a replacement for accountable leadership. It reasons from the company
> context that is actually available in the named experience.

### 8. Founding 100 — make the cohort rationale legible

**Role:** Handoff into the early-cohort experience.

**Section label:**

> FOUNDING 100

**Headline:**

> **Build the intelligence before you decide what to automate.**

**Body:**

> The Founding 100 are the first businesses helping us build and harden this
> experience with real use. The exchange is intentionally practical: you bring
> your company, your evidence, your corrections, and your hard questions; we
> build a serious body of intelligence about how the business actually works,
> make useful parts visible through Business Views, and give the authorized
> cohort experience a real context to work from.

**Value bridge:**

> This is not access to another AI tool. It is participation in building the
> evidence base, delivery learning, correction patterns, and usage understanding
> that a mature StrategicAI offering will eventually need.

**CTA:**

> **Review the Founding 100**

Destination: `/founding100/offer` with the current attribution context.

**Secondary CTA:**

> **Start with My Executive Brief**

Destination: existing production signup with source
`homepage_founding100_executive_brief`.

**Commercial boundary:** The homepage must not imply an active purchase, price,
guaranteed Business View bundle, verified 90-day Nemo continuity, outcome,
scarcity, or public proof permission while the applicable commercial and release
gates remain open. The offer route itself owns the current checkout state.

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
| `executive_brief_cta_click` | existing source attribution |

Readouts should separate owner comprehension and continuation from competitor
reaction. A click does not prove category adoption or runtime capability.

## Release checklist

- [x] Homepage order is pain → reframe → proof → category → Business Views → Nemo → Founding 100.
- [x] Existing dark/cyan visual system and shared shell are preserved.
- [x] “An AI that knows your business” is not the headline or primary promise.
- [x] Automation Without Understanding is direct but category-focused and not anti-automation.
- [x] Golden Proof Thread uses one declared business/problem/evidence lineage.
- [x] Homepage proof controls and insertion-ready placeholder images are live.
- [x] Business Views and Nemo are visible before Founding 100.
- [x] Existing Executive Brief path remains available as a lower-friction entry point.
- [ ] Accepted launch-state proof receipt and final capture replace the four visible placeholders.
- [ ] G-04, G-07, G-08, G-09, legal review, commercial acceptance, and applicable
      product/runtime receipts are closed before final publication.

## Exact next action

> Attach the accepted launch-state Golden Proof Thread capture to the homepage
> proof slot, then run the public release review against the proof and
> commercial gates. Do not convert the current illustrative frames into
> unqualified runtime claims before that review.
