---
id: F100-PORTFOLIO-ARCHITECTURE
title: StrategicAI Business Intelligence Portfolio Architecture
status: DRAFT_FOR_REVIEW
created: 2026-08-25
scope: product-facing-specification
---

# Purpose

This is the product-facing specification for the standalone value of StrategicAI Founding 100. It defines a coherent Business Intelligence Portfolio that is projected from one governed understanding of the company and then improved through correction and Nemo use.

It is not authorization to claim that the runtime already generates or delivers every artifact below.

# 1. Recommended portfolio architecture

## Guaranteed core

The following ten artifacts are the recommended commercial core. Commercial authority must ratify the list before it appears as a contractual promise.

- Executive Brief
- Current-State Business Profile
- Operating Model View
- People + Responsibility View
- Systems + Information View
- Bottleneck + Owner Dependency View
- Opportunity Map
- Unknowns + Open Questions
- 90-Day Improvement Agenda
- Business Questions Queue

This split is stronger than promising every possible map because it covers the owner’s basic sequence:

```text
understand the business
    → see how it works
    → see where pressure is carried
    → decide what deserves attention
    → know what to ask next
```

## Adaptive Business Views

Generate these when the discovered business contains enough evidence and the view answers a real owner question:

- Handoff + Dependency Map
- Operating Fragility Map
- Automation Readiness Map
- Decision + Priority Map

The adaptive layer prevents a six-person service company and a forty-person manufacturer from receiving the same artificial bundle.

## Optional deeper views

Only create these when a named business question warrants them:

- function-specific operating views;
- deeper customer, sales, production, delivery, or finance flows;
- contradiction or change-impact views;
- focused decision briefs;
- follow-up snapshots after a material correction or decision.

## Customer-facing boundary

```text
The core questions stay consistent. The exact views depend on what we discover about your business.
```

# 2. Artifact specifications

Each artifact is a projection of the shared company understanding. It is not a standalone prompt chain.

## Executive Brief

```text
OWNER_QUESTION = What is the clearest current picture of this business?
PURPOSE = Give the owner a concise, shareable understanding of the business, current priorities, constraints, owner dependencies, friction, and significant unknowns.
INPUTS = Business Profile, evidence, participant perspectives, goals, constraints, corrections, open questions.
OUTPUT = Short owner-level brief with observed conditions, qualified inferences, tensions, and questions that deserve attention.
UNCERTAINTY_RULE = Separate known, inferred, disputed, stale, missing, and unresolved material.
CORRECTION_BEHAVIOR = Owner correction updates the underlying assertion and records what changed and why.
CUSTOMER_VALUE = A credible starting picture that can be shared with a partner, leadership team, or trusted advisor.
INITIAL_OR_EVOLVING = Initial, then corrected and versioned.
```

## Current-State Business Profile

```text
OWNER_QUESTION = What is this company, operationally, right now?
PURPOSE = Create the structured current-state view from which other Business Views are projected.
INPUTS = Business model, customer types, revenue motions, functions, people, systems, workflows, goals, constraints, dependencies, failure points, unknowns.
OUTPUT = Structured profile of the business as discovered, not a marketing description.
UNCERTAINTY_RULE = Never convert an incomplete intake into a complete-sounding profile; list missing dimensions explicitly.
CORRECTION_BEHAVIOR = Corrections update the relevant profile fact, relationship, or confidence and trigger impacted-view review.
CUSTOMER_VALUE = A canonical place to inspect what StrategicAI currently believes about the company.
INITIAL_OR_EVOLVING = Initial and continuously evolving.
```

## Operating Model View

```text
OWNER_QUESTION = How does work actually move through the company?
PURPOSE = Show work entry, major states, transitions, people, systems, decisions, loops, stalls, and completion conditions.
INPUTS = Workflows, cases, participant accounts, systems, handoffs, decision points, exceptions, corrections.
OUTPUT = Business-specific flow with states, transitions, actors, systems, queues, and unresolved branches.
UNCERTAINTY_RULE = Preserve competing workflow descriptions and mark unverified transitions.
CORRECTION_BEHAVIOR = A correction changes the affected transition or adds a versioned exception; dependent views are flagged for review.
CUSTOMER_VALUE = Makes the path of work visible instead of reducing the company to an org chart.
INITIAL_OR_EVOLVING = Initial, then strengthened during See and Challenge.
```

## People + Responsibility View

```text
OWNER_QUESTION = Who owns what, and where is ownership unclear?
PURPOSE = Show people, roles, responsibility, approval, influence, overlap, ambiguity, dependency, and owner concentration.
INPUTS = People, roles, work, approvals, decisions, participant perspectives, escalation paths, corrections.
OUTPUT = Responsibility relationships with explicit ambiguity, duplicated ownership, owner-only work, and unowned work.
UNCERTAINTY_RULE = Do not infer authority from job title alone; distinguish reported responsibility from observed dependency.
CORRECTION_BEHAVIOR = People can correct role or ownership claims; the prior assertion remains visible in change history.
CUSTOMER_VALUE = Shows where responsibility is clear, concentrated, duplicated, or missing.
INITIAL_OR_EVOLVING = Initial and evolving as participants correct the picture.
```

## Systems + Information View

```text
OWNER_QUESTION = Where does the company’s information actually live?
PURPOSE = Show systems, information, owners, system-of-record candidates, manual transfers, duplicates, gaps, and human-carried context.
INPUTS = Systems, information objects, workflows, source claims, transfer steps, owners, contradictions, evidence.
OUTPUT = Relationship view of where information originates, changes, waits, duplicates, or becomes unavailable.
UNCERTAINTY_RULE = A system containing data is not automatically a trusted source; mark source-of-record status as a claim with evidence.
CORRECTION_BEHAVIOR = Corrections update source relationships and flag dependent handoffs, bottlenecks, and automation candidates.
CUSTOMER_VALUE = Makes visible the difference between having information and being able to use it.
INITIAL_OR_EVOLVING = Initial, with deeper views added only where the business warrants them.
```

## Bottleneck + Owner Dependency View

```text
OWNER_QUESTION = Where does work slow down, and what still depends too heavily on me?
PURPOSE = Combine queues, waits, approvals, rework, interruptions, escalations, owner-held knowledge, and owner-only decisions into one pressure view.
INPUTS = Operating Model, People + Responsibility, handoffs, owner accounts, recurring incidents, queues, evidence, questions.
OUTPUT = Pressure points with observed condition, affected work, owner dependence, likely contributing factors, and evidence gaps.
UNCERTAINTY_RULE = Use “appears,” “reported,” or “requires investigation” when causal certainty is not supported.
CORRECTION_BEHAVIOR = Owner corrections revise the pressure description and can split an appropriate owner authority from avoidable dependence.
CUSTOMER_VALUE = Helps the owner distinguish necessary authority from work the business has quietly routed back to one person.
INITIAL_OR_EVOLVING = Initial and strongly evolving during Challenge.
```

## Opportunity Map

```text
OWNER_QUESTION = What appears most worth improving?
PURPOSE = Organize evidence-backed opportunities without generating generic improvement ideas.
INPUTS = Pressure views, goals, constraints, evidence, owner questions, dependencies, missing evidence, corrections.
OUTPUT = Opportunity records containing observed condition, why it matters, current hypothesis, missing evidence, possible intervention, consequence, and next question.
UNCERTAINTY_RULE = Every hypothesis must be labeled as a hypothesis and never presented as a guaranteed diagnosis.
CORRECTION_BEHAVIOR = Corrections update the condition or hypothesis and record whether the opportunity remains, changes, or is closed.
CUSTOMER_VALUE = Gives the owner a short, grounded set of things worth investigating rather than a generic AI idea list.
INITIAL_OR_EVOLVING = Initial candidates, evolving through Challenge and Change.
```

## Unknowns + Open Questions

```text
OWNER_QUESTION = What do we still not know?
PURPOSE = Preserve unresolved questions, conflicting perspectives, stale information, missing evidence, and unverified assumptions.
INPUTS = All source assertions, contradictions, stale markers, missing fields, participant disagreement, Business Questions Queue.
OUTPUT = Prioritized unknowns with affected views, evidence needed, owner, and next question.
UNCERTAINTY_RULE = Unknowns are first-class output; the system must not smooth them into a single answer.
CORRECTION_BEHAVIOR = A correction can resolve, narrow, split, or create an unknown; the history must show the transition.
CUSTOMER_VALUE = Proves the portfolio is honest about its limits and shows the owner where more understanding is needed.
INITIAL_OR_EVOLVING = Initial and continuously evolving.
```

## 90-Day Improvement Agenda

```text
OWNER_QUESTION = What should we actually work on now, next, and later?
PURPOSE = Turn the current picture into a bounded improvement agenda, not a guaranteed implementation plan.
INPUTS = Opportunities, priorities, goals, constraints, dependencies, reversibility, missing evidence, owner decisions.
OUTPUT = NOW / NEXT / LATER areas with questions to resolve, evidence to collect, low-risk experiments, decisions, and initiatives to scope.
UNCERTAINTY_RULE = Show tradeoffs, blocked items, missing evidence, and alternative paths; do not imply one objective ranking.
CORRECTION_BEHAVIOR = Changed evidence or priority creates a new agenda version and a change note.
CUSTOMER_VALUE = Gives the owner a practical way to decide what deserves attention without pretending implementation is included.
INITIAL_OR_EVOLVING = Initial agenda, evolving during Change.
```

## Business Questions Queue

```text
OWNER_QUESTION = What are the most important questions this business needs to answer?
PURPOSE = Create the bridge from the static portfolio into the 90-day Nemo experience.
INPUTS = Unknowns, contradictions, opportunities, priorities, owner language, decisions, dependencies, and corrections.
OUTPUT = Prioritized consequential questions with context, why they matter, affected views, evidence needed, and a status.
UNCERTAINTY_RULE = Questions must remain questions until evidence supports a stronger statement; do not turn curiosity into diagnosis.
CORRECTION_BEHAVIOR = Owner can reorder, rewrite, answer, defer, or reject a question; every change is attributable.
CUSTOMER_VALUE = Gives Nemo and the owner a real starting point instead of a blank prompt box.
INITIAL_OR_EVOLVING = Initial queue that grows and changes throughout 90 days.
```

## Adaptive and optional artifact contracts

### Handoff + Dependency Map

```text
OWNER_QUESTION = Who needs what from whom for work to keep moving?
PURPOSE = Show required information, completion conditions, upstream/downstream dependencies, failure conditions, and notification paths.
INPUTS = Operating Model, Systems + Information, People + Responsibility, workflow evidence.
OUTPUT = Handoff records with sender, receiver, required input, completion condition, failure mode, and downstream effect.
UNCERTAINTY_RULE = Missing handoff conditions remain visible; do not infer a healthy handoff from a completed task alone.
CORRECTION_BEHAVIOR = Rebuild affected transitions and mark downstream views for review.
CUSTOMER_VALUE = Makes the hidden contract between people, work, and systems inspectable.
INITIAL_OR_EVOLVING = Adaptive initial or Challenge-phase view.
```

### Operating Fragility Map

```text
OWNER_QUESTION = Where is the company brittle?
PURPOSE = Show single-person dependencies, undocumented knowledge, weak handoffs, delayed signals, ambiguous sources, and high-impact dependencies.
INPUTS = Pressure, responsibility, systems, handoffs, unknowns, impact observations.
OUTPUT = Fragility points with evidence, impact path, fallback state, and confidence.
UNCERTAINTY_RULE = Use bounded “operating fragility,” not regulated risk-assessment language.
CORRECTION_BEHAVIOR = Add, remove, or downgrade fragility claims when evidence or owner context changes.
CUSTOMER_VALUE = Helps the owner see where a small change may create a large downstream effect.
INITIAL_OR_EVOLVING = Adaptive and evolving.
```

### Automation Readiness Map

```text
OWNER_QUESTION = What should we automate, and what should we not automate yet?
PURPOSE = Separate understand first, simplify first, clarify ownership, integrate first, automate now, keep human, do not automate, and needs more evidence.
INPUTS = Operating Model, Systems + Information, ownership, exceptions, goals, evidence quality, reversibility.
OUTPUT = Candidate-by-candidate readiness state with reasons and missing evidence.
UNCERTAINTY_RULE = Never treat automation readiness as an instruction or guarantee; it is a bounded recommendation for further review.
CORRECTION_BEHAVIOR = Any correction to workflow, exception, or authority re-evaluates the candidate.
CUSTOMER_VALUE = Reinforces “understand it before you automate it.”
INITIAL_OR_EVOLVING = Adaptive Change-phase view.
```

### Decision + Priority Map

```text
OWNER_QUESTION = What deserves attention first, given the tradeoffs?
PURPOSE = Show now, next, later, blocked, low-cost test, high-consequence decision, missing evidence, urgency, and reversibility.
INPUTS = Opportunities, agenda, dependencies, goals, constraints, owner priorities, unknowns.
OUTPUT = Explicit alternatives and tradeoffs, not a single hidden ranking.
UNCERTAINTY_RULE = Show the basis and limits of each priority; never present an inferred ranking as objective truth.
CORRECTION_BEHAVIOR = New evidence creates a new priority version and change note.
CUSTOMER_VALUE = Helps an accountable owner make a better-scoped choice without handing authority to the system.
INITIAL_OR_EVOLVING = Adaptive Change-phase view.
```

# 3. Portfolio readiness

A company is `PORTFOLIO_READY` when StrategicAI has enough evidence to project the guaranteed core without pretending certainty.

## Minimum evidence dimensions

- business purpose, customer types, and major revenue motion;
- primary people, roles, and responsibility claims;
- at least one material workflow from entry through completion or stall;
- systems and information sources used in that workflow;
- at least one handoff, dependency, or decision point;
- owner-held work or decision context;
- current goals, constraints, and pressure examples;
- participant corrections or explicit confirmation that a point is unverified;
- a recorded unknowns/contradictions set.

## Readiness rules

- Missing evidence does not block every artifact; it blocks only the claims that depend on it.
- A core artifact may be projected with a visible `partial` state when its minimum dimensions are present.
- A view must be withheld or labeled `not enough evidence` when its central relationship cannot be grounded.
- Contradictions must be shown before any reconciliation is proposed.
- The portfolio must never fill a missing section with generic best practices.
- Each core artifact must have at least one evidence reference or an explicit missing-evidence record.

## Progressive projection

```text
first evidence → initial profile and brief
    → first workflow and responsibility views
    → systems, handoffs, pressure, and unknowns
    → opportunities, questions, and agenda
    → adaptive views when the evidence earns them
```

# 4. Artifact generation architecture

## Shared source model

The source model should represent at minimum:

- `Company`
- `Person`
- `Role`
- `Responsibility`
- `Work`
- `WorkflowState`
- `Transition`
- `System`
- `InformationObject`
- `Goal`
- `Constraint`
- `Decision`
- `Handoff`
- `Dependency`
- `Observation`
- `Assertion`
- `EvidenceReference`
- `Correction`
- `Contradiction`
- `Unknown`
- `Question`
- `Opportunity`

Every assertion needs:

- source/evidence reference;
- source type and date;
- author or perspective where available;
- state: `known`, `inferred`, `disputed`, `stale`, `missing`, or `unresolved`;
- confidence or support level;
- affected entities and views;
- correction/version history.

## Projection rule

```text
Formation / company understanding
        ↓
shared evidence-and-relationship source model
        ↓
artifact-specific projection rules
        ↓
Business Intelligence Portfolio views
        ↓
Nemo context and owner questions
```

Do not implement fifteen unrelated prompts against raw intake. Each projection must declare its source entities, required relationships, evidence references, uncertainty treatment, and correction propagation behavior.

## Correction propagation

When an owner corrects a claim:

1. store the correction as a first-class event;
2. update the source assertion or add the competing assertion;
3. identify dependent relationships and artifacts;
4. mark impacted views as needing review or regeneration;
5. create a new portfolio version or snapshot;
6. show the owner what changed and why;
7. add or update the relevant Business Question if the correction exposes a new unknown.

No view may silently rewrite historical output.

## Provenance

Customer-visible provenance should be available at least for material claims:

- `Observed in` evidence reference;
- `Reported by` perspective where appropriate;
- `Last checked` date;
- `State` and confidence;
- `Changed because` correction note.

# 5. Versioning and delivery behavior

## Version states

- `initial` — first portfolio projection after minimum readiness;
- `corrected` — owner or participant correction changes a claim or relationship;
- `expanded` — an adaptive view is added because evidence warrants it;
- `snapshot` — preserved view for sharing or decision history;
- `superseded` — prior view remains visible but is no longer current;
- `stale` — evidence age or source change requires review.

## Initial versus evolving delivery

### Initial delivery

Provide the guaranteed core in a navigable portfolio with a concise executive entry point, evidence/uncertainty markers, correction path, and Business Questions Queue.

### During See

Correct the core, resolve obvious missing fields, and add relevant Handoff or Fragility views.

### During Challenge

Add dependency, contradiction, opportunity, and question detail where owner questions justify it.

### During Change

Refine Decision + Priority, Automation Readiness, and the 90-Day Improvement Agenda. Preserve prior snapshots.

## Delivery model

### Founding 100 MVP

The most feasible target is a controlled web portfolio with per-view pages, a concise executive entry point, versioned snapshots, and downloadable PDF or print-ready exports after review. Do not promise this until the delivery path exists and is acceptance-tested.

### Ideal future state

Interactive portfolio plus downloadable snapshots, share permissions, evidence/provenance inspection, correction history, change notes, and Nemo entry points from each Business View.

PDF-only delivery is insufficient as the long-term model because it weakens correction, provenance, versioning, and the connection to Nemo.

# 6. Artifact quality standard

Score each artifact from `0` to `2` on each dimension:

- **Grounding** — supported by company evidence;
- **Usefulness** — answers a real owner question;
- **Specificity** — could not be pasted onto a random company;
- **Inspectability** — claims can be traced to evidence or uncertainty;
- **Correctability** — owner can challenge or update it;
- **Uncertainty honesty** — known and unknown are distinct;
- **Actionability** — helps the owner decide what to investigate or do next;
- **Visual clarity** — understandable quickly;
- **Cross-view consistency** — matches the rest of the portfolio;
- **No consulting fluff** — every section earns its place.

## Pass threshold

- minimum `16 / 20` overall;
- no score of `0` for Grounding, Uncertainty Honesty, or Cross-view Consistency;
- at least one named evidence reference or explicit missing-evidence explanation;
- no generic filler section;
- correction path tested for every interactive claim.

Any artifact that fails the threshold is withheld, labeled incomplete, or returned for evidence collection. It is not polished into a false sense of certainty.

# 7. Measurement upgrade

Add portfolio-value signals to the existing media and market learning system.

## Behavioral signals

- `PORTFOLIO-VIEWED` — owner opens a Business View;
- `PORTFOLIO-SHARED` — owner shares a view or snapshot;
- `PORTFOLIO-CORRECTED` — owner submits a correction;
- `PORTFOLIO-DOWNLOADED` — owner exports a snapshot;
- `PORTFOLIO-QUESTION-USED` — owner brings a Business Questions Queue item to Nemo;
- `PORTFOLIO-DEEPER-VIEW` — owner requests an adaptive or deeper view.

## Qualitative signal

`PORTFOLIO-VALUE` means the customer identifies standalone value independent of Nemo.

Examples:

- “This alone was worth the $299.”
- “I sent this to my partner.”
- “We are using this in our management meeting.”
- “I have never seen the company mapped like this.”

Record the customer’s words, artifact/view, source, date, and whether the value was independent of Nemo use. Do not turn a single quote into a universal ROI claim.

# 8. Release gates

Before the portfolio proposition becomes a public contract, require:

- commercial approval of the guaranteed core and `$299` scope;
- evidence that Formation can collect the minimum readiness dimensions;
- an accepted shared source model and projection boundary;
- an accepted correction/versioning behavior;
- an accepted delivery format and export path;
- a verified Nemo context boundary for the 90-day period;
- support and capacity plan;
- claim review for “serious body of work,” “knows your business,” and “works from context” language;
- Terms and Privacy routes;
- payment/session verification and post-payment entitlement handling.

# 9. Implementation backlog

## NOW

- Ratify the guaranteed core and adaptive boundary.
- Define the Formation minimum evidence schema.
- Define the shared source model and uncertainty states.
- Create artifact acceptance fixtures using real or approved redacted evidence.
- Define the 90-day Nemo context/retention boundary.

## NEXT

- Build progressive core projections.
- Build owner correction and impact propagation.
- Build a reviewed web portfolio and snapshot export.
- Instrument artifact and portfolio-value signals.
- Connect Business Questions Queue items to Nemo entry points.

## LATER

- Add adaptive/deeper view generation.
- Add share permissions, provenance inspection, supersession, and change notes.
- Add continuation decision surfaces after 90 days.
- Expand portfolio analytics only after privacy and consent are approved.

# Final status

```text
F100_DELIVERABLE_ARCHITECTURE = PASS_WITH_IMPLEMENTATION_GATES

PORTFOLIO_NAME = STRATEGICAI_BUSINESS_INTELLIGENCE_PORTFOLIO
GUARANTEED_CORE_DEFINED = PASS
ADAPTIVE_VIEWS_DEFINED = PASS
ARTIFACT_SPECS = PASS
FORMATION_REQUIREMENTS = PASS
ARTIFACT_GENERATION_ARCHITECTURE = PASS
QUALITY_STANDARD = PASS
DELIVERY_MODEL = PASS_WITH_RUNTIME_DEPENDENCY
MEASUREMENT_UPDATE = PASS
CLAIM_GOVERNANCE = PASS
PUBLIC_10K_CLAIM = NOT_AUTHORIZED

OPEN_BLOCKERS =
- Portfolio generation and delivery runtime are not verified in this repository.
- Formation minimum evidence collection is not implemented here.
- Nemo context/retention boundary is unresolved.
- Payment verification, Terms, Privacy, support, and delivery-capacity contracts remain open.

NEXT_EXACT_ACTION =
Ratify the guaranteed core and Portfolio Readiness contract with the product and delivery owners, then build one end-to-end core artifact slice from evidence through correction, versioning, and customer delivery.
```
