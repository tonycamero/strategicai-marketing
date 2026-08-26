---
id: F100-COMMENT-SEE-FUNNEL-CONTRACT
title: StrategicAI Founding 100 Comment SEE Funnel and Message Card Contract
status: MARKET_FUNNEL_IMPLEMENTED_COMMERCIAL_DELIVERY_GATED
created: 2026-08-25
scope: strategicai-marketing-only
supersedes: gated-webinar-registration-as-primary-front-door
depends_on:
  - STRATEGICAI-PRODUCT-SHIFT-AUTHORITY-2026-08-25
  - STRATEGICAI-NARRATIVE-CONSTITUTION-V2
  - STRATEGICAI-MARKET-LEARNING-CHARTER
  - STRATEGICAI-CLAIM-TRUTH-CLASS-MATRIX
---

# Authority and boundary

This document is the governing marketing-funnel contract for the Founding 100
Comment `SEE` acquisition path. It canonizes architecture, routes,
attribution, event semantics, interaction states, and implementation
requirements for the customer-facing funnel surfaces now present in this
repository.

It is authoritative for the marketing route and event contract. It does not
make every phrase in an experiment canonical, and it does not authorize the
commercial offer merely because an offer route exists.

It does not authorize or implement Formation, Operational Reality runtime,
Operational Intelligence runtime, Business View generation, Nemo runtime,
Stripe verification, social messaging transport, or product activation events.

# Canonical hierarchy

```text
HOW THE BUSINESS ACTUALLY WORKS
    -> OPERATIONAL REALITY
    -> OPERATIONAL INTELLIGENCE
    -> BUSINESS VIEWS
    -> NEMO
    -> CAPABILITIES / AUTOMATION / EXECUTION WHEN WARRANTED
```

```text
STRATEGICAI = OPERATIONAL_INTELLIGENCE_BUILT_FROM_OPERATIONAL_REALITY
PLAIN_LANGUAGE_LEAD = HOW_THE_BUSINESS_ACTUALLY_WORKS
AN_AI_THAT_KNOWS_YOUR_BUSINESS = EXPLANATORY_SHORTHAND_ONLY
```

# Canonical market-learning funnel

```text
PAIN / MESSAGE
    -> COMMENT SEE
    -> PRIVATE CHAT / DM
    -> PICK YOUR DEPTH
       -> 5-MINUTE VIDEO
          -> FULL 35-MINUTE WALKTHROUGH OR QUALIFIED CONVERSATION
       -> 35-MINUTE WALKTHROUGH
          -> CONTINUE CONTENT OR QUALIFIED CONVERSATION

OPTIONAL COMMERCIAL BRANCH, INACTIVE UNTIL SEPARATELY AUTHORIZED
    -> FOUNDING 100 OFFER
    -> VERIFIED CHECKOUT
    -> AUTHORIZED ACTIVATION
```

The first conversion event is the comment, not an email submission or webinar
registration.

```text
CANONICAL_COMMENT_KEYWORD = SEE
PRIMARY_MICRO_CONVERSION = SEE_COMMENT
EMAIL_GATE_BEFORE_CONTENT = NO
```

Governing principle:

> **Give the person the content they asked for before asking them for more.**

# Public CTA contract

Default visible CTA:

> **Comment SEE and I’ll send you the video.**

Allowed declared CTA test:

> **Comment SEE and I’ll send you the walkthrough.**

Do not vary CTA wording inside a hook-comparison test. `SEE` remains fixed even
when the visible sentence is tested.

# DM choice contract

Canonical response:

> **You got it. Pick your depth:**
>
> **5-minute version**<br>
> Get the core idea fast.
>
> **35-minute walkthrough**<br>
> Go through the full StrategicAI story.

```text
SEE_SHORT = SHORT_5_MIN
SEE_DEEP = DEEP_35_MIN
```

Do not request email, phone, company name, application, questionnaire, account,
or any other identity field before delivering the selected content URL.

# Content roles

## Short content

The 5-minute video is a belief-shift asset, not a compressed webinar.

```text
0:00–0:45   recurring operator recognition
0:45–1:45   separate problems are signals
1:45–2:45   people, systems, files, and experience hold pieces
2:45–3:45   how the business actually works -> Operational Reality -> Operational Intelligence
3:45–4:30   Nemo starts with the organization, not a blank prompt
4:30–5:00   full 35 minutes or another truthful, available next step
```

Required line:

> **Nemo doesn’t start with a blank prompt. It starts with your organization.**

Truth status: `AUTHORIZED_CONTROLLED_MARKET_HYPOTHESIS`. This required
narrative beat is not runtime proof and cannot migrate into an offer as a
current fact without accepted context evidence.

The full walkthrough or a qualified conversation may be offered when its
destination is ready. The Founding 100 offer must not appear as an active next
step until Commercial Commitment authority closes.

## Deep content

The 35-minute walkthrough continues the originating hook instead of restarting
with a generic company welcome.

```text
OPERATOR WTF MOMENT
    -> THESE ARE SIGNALS
    -> HOW THE BUSINESS ACTUALLY WORKS
    -> OPERATIONAL REALITY
    -> OPERATIONAL INTELLIGENCE
    -> BUSINESS VIEWS
    -> NEMO
    -> TRUTHFUL NEXT STEP
       -> OPTIONAL FOUNDING 100 BRANCH ONLY WHEN COMMERCIALLY AUTHORIZED
```

Final narration remains a separate content artifact and is not invented here.

# Message Card contract

Message Cards are a separate language-testing instrument.

```text
TRACK = MC
MESSAGE_CARD_ID = F100-MC-{TERRITORY}-{NN}
JOB = LANGUAGE_TESTING
CANONICAL_CTA = COMMENT_SEE
```

Every Message Card is governed as a market experiment, not as automatically
canonical copy. Its manifest row must record `experiment_id`, `truth_class`,
`market_hypothesis`, `controlled_variable`, capability and commercial
implication review, and its eventual `PROMOTE | RETEST | DEMOTE | RETIRE`
decision.

Territory codes:

| Code | Territory |
| --- | --- |
| `FRAGMENT` | Fragmented understanding |
| `RECUR` | Recurring problem |
| `LATE` | Late awareness |
| `OWNER` | Owner dependence |
| `HANDOFF` | Broken handoff |
| `GROWTH` | Growth pressure |
| `AUTO-C1` through `AUTO-C4` | Automation conflict intensity |
| `OPREAL` | How the business works / Operational Reality |
| `STRUCT` | Structural control |

Examples:

```text
F100-MC-FRAGMENT-01
F100-MC-RECUR-01
F100-MC-LATE-01
F100-MC-OWNER-01
F100-MC-AUTO-C3-01
F100-MC-AUTO-C4-01
F100-MC-OPREAL-01
```

`MC` does not replace `PS` or `CC`. A Message Card may point back to an
`originating_clip_id` or share a thesis with a pain/conflict clip, but its own
job is controlled sentence testing.

Hold constant where practical: solid brand background, typography, layout,
font weight, logo treatment, CTA, destination, audience, and distribution
policy. Change the hook.

# Attribution contract

Canonical internal attribution object:

```text
message_card_id
originating_clip_id
track
experiment_id
truth_class
market_hypothesis
controlled_variable
hook_family
exact_hook
conflict_intensity
source
platform
post_instance_id
utm_source
utm_medium
utm_campaign
utm_content
```

Public links should use an allowlisted compact query contract:

| Public parameter | Internal field | Rule |
| --- | --- | --- |
| `mc` | `message_card_id` | Required for Message Card traffic |
| `clip` | `originating_clip_id` | Optional when an originating video exists |
| `track` | `track` | `MC`, `PS`, or `CC` |
| `hf` | `hook_family` | Controlled taxonomy value |
| `ci` | `conflict_intensity` | Omit when not applicable |
| `pi` | `post_instance_id` | Platform-post identifier; no personal data |
| `utm_source` | `utm_source` | Standard UTM |
| `utm_medium` | `utm_medium` | Standard UTM |
| `utm_campaign` | `utm_campaign` | Standard UTM |
| `utm_content` | `utm_content` | Asset/edit/CTA identity |

Do not place `exact_hook` in the URL. Resolve it from the governed Message Card
manifest using `message_card_id` or `post_instance_id`.

The marketing frontend normalizes both canonical long-form inputs and the
allowlisted compact form once, attaches available attribution to funnel events,
and appends compact non-sensitive fields to internal content, offer, and
checkout links. `exact_hook` may be captured from an inbound URL but is removed
from the visible URL and is never propagated. Attribution is retained in
`sessionStorage` for the browser-tab session and expires when that tab session
ends. Longer retention, cross-device identity, consent changes, and durable
profile storage remain outside this implementation.

# Canonical route decision

The repository uses React Router routes declared in `frontend/src/routes.tsx`,
Netlify SPA fallback, and a static-route metadata generator. The clean additive
route set is:

| Surface | Canonical route | Current state | Implementation rule |
| --- | --- | --- | --- |
| 5-minute content | `/founding100/quick` | `EXISTS / MEDIA BLOCKED` | Direct ungated playback when the short YouTube asset is configured; honest not-configured state until then |
| 35-minute content | `/founding100/webinar` | `EXISTS / MEDIA BLOCKED` | Direct ungated playback; not a registration form; honest not-configured state until the YouTube asset exists |
| Founding 100 offer | `/founding100/offer` | `EXISTS / CHECKOUT BLOCKED` | `$299` offer; checkout remains disabled until an approved Stripe URL is configured |
| Post-payment handoff | `/founding100` | `EXISTS` | Remains downstream; must not become the offer page |

All three pre-purchase routes are standalone (`shell: false`) and are present
in both the React Router table and static-route metadata generator.

Do not create aliases or redirects from old registration URLs until traffic
and backward-compatibility evidence exists.

# Media and configuration boundary

Repository inspection still finds no 5-minute or 35-minute video asset. A
centralized typed media-configuration seam is now implemented.

```text
SHORT_VIDEO_ASSET = MISSING
DEEP_VIDEO_ASSET = MISSING
VIDEO_ASSET_STATE = SHORT_MISSING_DEEP_MISSING
```

The implementation uses YouTube as the ratified player provider and one typed
Founding 100 funnel configuration module backed by Vite environment values:

```text
VITE_F100_SHORT_YOUTUBE
VITE_F100_DEEP_YOUTUBE
VITE_F100_CHECKOUT_URL
```

Each YouTube value accepts an approved YouTube video ID or URL. Missing video
configuration renders an explicit not-configured state. The player uses the
YouTube IFrame API and `youtube-nocookie.com`; no fake, stock, generated, or
placeholder video URL is present.

# Social transport boundary

Social delivery is owned upstream by the multi-tenant NemoClaw Social DM
Automation infrastructure. This marketing repository deliberately contains no
Instagram/Facebook comment automation, Meta Messaging API, ManyChat, or other
DM-provider implementation or provider decision.

```text
COMMENT_TO_DM_TRANSPORT = EXTERNAL_PLATFORM_DEPENDENCY
OWNER = NEMOCLAW_SOCIAL_DM_AUTOMATION
MARKETING_REPO_PROVIDER_DECISION = NONE
```

Future transport input:

```text
platform
comment_keyword = SEE
message_card_id
originating_clip_id
post_instance_id
source attribution
```

Future transport output:

```text
SEE_DM_DELIVERED when observable
tracked /founding100/quick URL
tracked /founding100/webinar URL
delivery timestamp/status
```

The transport must deliver the two choices without collecting identity first.
Do not claim `SEE_COMMENT` or `SEE_DM_DELIVERED` from the marketing frontend;
those events require social-platform/transport evidence.

# Analytics contract

The approved repository mechanism is `trackEvent()` in
`frontend/src/lib/analytics.ts`. It pushes to `window.dataLayer`, calls `gtag`
when available, and dispatches `strategicai:analytics`. The repository does not
show a separate analytics framework or a confirmed provider bootstrap. Future
implementation must extend this mechanism rather than add a competing tracker.

Semantic events and implementation names:

| Semantic event | `trackEvent` name | Observable by | Current support |
| --- | --- | --- | --- |
| `SEE_COMMENT` | `see_comment` | Social transport | `EXTERNAL_PLATFORM_DEPENDENCY` |
| `SEE_DM_DELIVERED` | `see_dm_delivered` | Social transport | `EXTERNAL_PLATFORM_DEPENDENCY` |
| `SEE_SHORT` | `see_short` | Short-route arrival / transport click | `IMPLEMENTED` |
| `SEE_DEEP` | `see_deep` | Deep-route arrival / transport click | `IMPLEMENTED` |
| `SHORT_VIDEO_START` | `short_video_start` | YouTube player | `IMPLEMENTED / ASSET_PENDING` |
| `SHORT_VIDEO_PROGRESS` | `short_video_progress` | YouTube player at 25/50/75/90 | `IMPLEMENTED / ASSET_PENDING` |
| `SHORT_VIDEO_COMPLETE` | `short_video_complete` | YouTube player | `IMPLEMENTED / ASSET_PENDING` |
| `DEEP_VIDEO_START` | `deep_video_start` | YouTube player | `IMPLEMENTED / ASSET_PENDING` |
| `DEEP_VIDEO_PROGRESS` | `deep_video_progress` | YouTube player at 25/50/75/90 | `IMPLEMENTED / ASSET_PENDING` |
| `DEEP_VIDEO_COMPLETE` | `deep_video_complete` | YouTube player | `IMPLEMENTED / ASSET_PENDING` |
| `SEE_REASON_SELECTED` | `see_reason_selected` | Content page after access | `IMPLEMENTED / ANALYTICS_ONLY` |
| `SHORT_TO_DEEP` | `short_to_deep` | Short-page CTA | `IMPLEMENTED` |
| `CONTENT_TO_OFFER` | `content_to_offer` | Short/deep CTA | `IMPLEMENTED` |
| `OFFER_VIEW` | `offer_view` | Offer-route view | `IMPLEMENTED` |
| `CHECKOUT_CLICK` | `checkout_click` | Approved checkout CTA | `IMPLEMENTED / CHECKOUT_CONFIG_BLOCKED` |
| `PURCHASE_CONFIRMED` | `purchase_confirmed` | Verified server/payment boundary | `PROHIBITED_UNTIL_VERIFICATION_EXISTS` |

Every implemented event carries the available normalized attribution object,
`content_path`, and route. Progress events add `progress_percent` from
`25|50|75|90` and fire once per threshold per playback session.

# Optional SEE reason

Ask only after playback access is available:

> **What made you hit SEE?**

Customer-facing choices:

| Value | Label |
| --- | --- |
| `EVERYTHING_COMES_BACK_TO_ME` | Everything comes back to me |
| `CANT_SEE_WHATS_HAPPENING` | I can’t see what’s happening |
| `SAME_PROBLEMS_KEEP_RETURNING` | The same problems keep returning |
| `HANDOFFS_KEEP_BREAKING` | Handoffs keep breaking |
| `THINKING_ABOUT_AI_AUTOMATION` | I’m thinking about AI automation |
| `OTHER` | Something else |

This control is optional, dismissible, and cannot block playback. The current
repository has no durable first-party response store.

```text
DURABLE_SEE_REASON_STORAGE = ANALYTICS_ONLY
```

`see_reason_selected` is emitted through the existing analytics helper. The
repository does not guarantee durable storage or profile-level retrieval of
that answer, and no database or external form vendor was added.

# Abandonment state contract

| State | Evidence boundary | Future intervention hypothesis |
| --- | --- | --- |
| `SEE_NO_DM_CLICK` | Transport delivered DM; neither tracked choice opened | One transport-governed reminder, if consent/platform rules permit |
| `SHORT_SELECTED_NO_START` | Short route loaded; no player start | Diagnose player/load friction before messaging |
| `DEEP_SELECTED_NO_START` | Deep route loaded; no player start | Diagnose player/load or expectation mismatch |
| `SHORT_STARTED_NO_COMPLETE` | Start without completion threshold | Test resume affordance; no spam sequence |
| `DEEP_STARTED_NO_COMPLETE` | Start without completion threshold | Test resume affordance and chapter clarity |
| `CONTENT_COMPLETE_NO_OFFER` | Completion without offer visit | Test offer transition and CTA prominence |
| `OFFER_NO_CHECKOUT` | Offer view without checkout click | Test offer clarity, scope, trust, and price objection |
| `CHECKOUT_NO_VERIFIED_PURCHASE` | Checkout click without verified purchase | Cannot classify reliably until payment verification exists |

No reminder automation is authorized by this contract.

# Proposed offer and post-payment boundary — commercially gated

```text
OFFER = STRATEGICAI_FOUNDING_100
PRICE = 299_USD_ONE_TIME
OFFER_ROUTE = /founding100/offer
POST_PAYMENT_ROUTE = /founding100
```

The offer carries this hierarchy:

1. StrategicAI would begin forming an evidence-bounded understanding of how
   the business actually works.
2. That Operational Reality would support Operational Intelligence.
3. Included Business Views would make bounded parts visible and correctable.
4. Nemo would work from the company context actually available in the accepted
   experience.
5. The owner would use that context for serious questions during the defined
   Founding 100 term.

Do not sell “90 days of AI access.” Do not lead with “Build an AI that knows
your business.”

This section records proposed offer architecture for later review. Route and
copy implementation do not activate the offer or authorize its price,
deliverables, checkout, capacity, support, or 90-day experience.

# Future product activation handoff

Marketing may document but must not emit these conceptual milestones:

```text
FIRST_BUSINESS_VIEW_ACCEPTED_OR_CORRECTED
FIRST_CONSEQUENTIAL_NEMO_QUESTION
```

The future product integration must define its own actual event names,
identity/entitlement boundary, consent, and acceptance evidence. Marketing may
receive those events only through an authorized handoff. It must never infer or
fabricate them from page visits.

# Current-state matrix

| Surface or capability | State | Implemented now | Blocker / next authority |
| --- | --- | --- | --- |
| `PS` / `CC` media system | `PARTIAL` | `YES` in production documentation; `NO` in live publication | Release gates, transport, assets, routes, and claim approval |
| Message Card taxonomy | `SPECIFIED` | `YES` in documentation | Create approved manifest and first cards |
| Comment `SEE` CTA | `SPECIFIED` | `NO` in social runtime | Script/card revision and channel approval |
| Comment-to-DM transport | `EXTERNAL PLATFORM DEPENDENCY` | `NO` | NemoClaw Social DM Automation owns provider choice, keyword handling, and delivery evidence |
| `/founding100/quick` | `EXISTS / MEDIA BLOCKED` | `YES` | Supply and accept the 5-minute YouTube asset; clear release gates before public traffic |
| `/founding100/webinar` | `EXISTS / MEDIA BLOCKED` | `YES` | Supply and accept the 35-minute YouTube asset; clear release gates before public traffic |
| `/founding100/offer` | `EXISTS / CHECKOUT BLOCKED` | `YES` | Supply approved Stripe destination and commercial/legal release inputs |
| `/founding100` | `EXISTS` | `NO CHANGE` | Payment verification, Formation, Terms, Privacy remain unresolved |
| 5-minute video | `MISSING` | `NO` | Produce and accept asset |
| 35-minute walkthrough | `MISSING` | `NO` | Produce and accept asset |
| SEE reason storage | `ANALYTICS_ONLY` | `YES` | Analytics-provider/bootstrap confirmation remains unresolved |
| Attribution | `BROWSER TAB SESSION` | `YES` | Any longer retention or cross-device identity requires separate privacy/consent authority |
| Stripe checkout | `PARTIAL / UNRESOLVED` | `CONFIG SEAM YES; DESTINATION NO` | Approved checkout URL and commercial terms |
| Purchase verification | `MISSING` | `NO` | Server/payment verification contract |
| Formation / Operational Reality capture | `MISSING / NOT_READY` | `NO` | Product authority, entitlement, intake, evidence, and correction runtime |
| Operational Intelligence / Business Views | `PARTIAL PROPOSITION` | `NO` verified delivery runtime in this repository | Product architecture, generation, persistence, quality, and delivery acceptance |
| 90-day Nemo experience | `PARTIAL PROPOSITION` | `NO` verified runtime contract in this repository | Naming, context, retention, access, support, and commercial authority |
| Product activation events | `FUTURE HANDOFF` | `NO` | Product-side authority and integration |

# Implementation state and remaining order

Completed in the marketing repository:

1. Ratified the route contract and superseded gated webinar registration as the primary front door.
2. Added typed YouTube and checkout configuration with no fake defaults.
3. Built `/founding100/quick` and `/founding100/webinar` as ungated standalone content routes with honest not-configured states.
4. Built `/founding100/offer` from the governed offer proposition and kept `/founding100` post-payment.
5. Extended the existing analytics helper/event list, YouTube player events, optional SEE reason, and allowlisted attribution propagation.
6. Browser-tested direct navigation, transitions, session attribution, missing-media behavior, console health, and responsive layouts.

Remaining release sequence:

1. Produce, approve, and configure the 5-minute YouTube asset.
2. Produce, approve, and configure the 35-minute YouTube asset.
3. Supply the approved Stripe destination and clear Terms, Privacy, commercial, and payment-verification gates.
4. Let NemoClaw Social DM Automation integrate the two destination URLs and approved attribution contract outside this repository.
5. Run asset-level playback/progress QA and the external transport-to-checkout acceptance test.
6. Add `purchase_confirmed` only after real server/provider verification exists; keep product milestones future-only.

# Open decisions

1. Which external transport implementation and DM labels will NemoClaw Social DM Automation authorize and acceptance-test?
2. What are the approved YouTube IDs/URLs for the 5-minute and 35-minute assets?
3. What analytics destination actually consumes `dataLayer`, `gtag`, or `strategicai:analytics` in production?
4. What privacy/consent treatment, if any, is required beyond browser-tab-session attribution?
5. What checkout URL, refund/tax/capacity terms, and verification mechanism receive G-01/G-09 approval?

# Next exact action

Produce and approve the 5-minute YouTube asset, then set
`VITE_F100_SHORT_YOUTUBE` and acceptance-test the content-only `SEE` path. Keep
the offer link disabled. Checkout, Terms, Privacy, delivery, capacity, and
payment verification proceed under the separate commercial workstream.
DM-provider selection remains owned by NemoClaw Social DM Automation, not this
repository.
