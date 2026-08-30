# StrategicAI Public Site Launch-State Information Architecture

**Status:** `DRAFT_FOR_FOUNDER_REVIEW_AND_IMPLEMENTATION`

**Scope:** strategicai.app public information architecture, shared shell,
route disposition, metadata, and cross-page narrative progression.

**Out of scope:** Product Doctrine, Formation/runtime authority, Founding 100
commercial terms, checkout implementation, and the 35-minute webinar
architecture.

## 1. Launch-state premise

The public site must read as one StrategicAI story. The homepage has already
moved to the launch-state sequence; the surrounding shell and secondary routes
must now make the same proposition legible.

> **StrategicAI is Operational Intelligence built from Operational Reality.**

The plain-language lead is:

> **Understand how your business actually works.**

The product hierarchy is:

```text
How the business actually works
    -> Operational Reality
    -> Operational Intelligence
    -> Business Views
    -> Nemo
    -> capabilities / automation / execution when warranted
```

“An AI that knows your business” remains explanatory shorthand only. It is not
the company promise or product identity.

## 2. Public narrative progression

```text
HOME
  Recognition -> Reframe -> Golden Proof Thread -> Category
  -> Business Views -> Nemo -> Founding 100

HOW IT WORKS
  Evidence and perspectives -> Formation -> inspect / disagree / correct
  -> Operational Reality -> Operational Intelligence -> Business Views
  -> Nemo -> warranted action

PRODUCT
  Operational Reality -> Operational Intelligence -> Business Views
  -> Nemo -> capabilities when warranted

PARTNERS
  Understand before implementation -> better-scoped intervention
  -> qualified advisor / automation / specialist / ecosystem delivery

FOUNDING 100
  Current commercial entry and dedicated campaign funnel
```

The main site sells StrategicAI and the category. Founding 100 is the current
commercial entry exposed by the main site; it does not replace the broader
StrategicAI story.

## 3. Launch-state navigation

```text
StrategicAI

How It Works
Product
Partners
[ Founding 100 ]
```

Primary navigation requirements:

- remove `Engagements` from the primary navigation;
- remove `Build My Executive Brief` from all shared-shell CTAs;
- use `/how-it-works`, `/product`, `/partners`, and `/founding100/offer`;
- keep the existing dark, cyan-accented visual system, spacing, typography,
  and responsive behavior;
- do not create separate top-level routes for Business Views or Nemo.

## 4. Route census and disposition

| Route | Disposition | Launch-state role | Implementation decision |
| --- | --- | --- | --- |
| `/` | `CURRENT` | Primary recognition, proof, category, and commercial handoff | Preserve the upgraded homepage and converge its CTAs with the shared shell |
| `/how-it-works` | `CURRENT` | Customer-language mechanism page | Add a concise evidence-to-warranted-action explanation |
| `/product` | `REWRITE` | Canonical product explanation | Replace the old artifact ladder with the current hierarchy |
| `/partners` | `REWRITE` | Partner qualification and downstream relationship | Center “Understand before implementation” |
| `/pricing` | `COMPATIBILITY_SURFACE` | Ways to work with StrategicAI | Rewrite as a thin current surface; do not retain the old commercial ladder |
| `/engagements` | `REDIRECT` | Legacy alias | Redirect to `/pricing` |
| `/intake` | `REDIRECT` | Legacy Executive Brief acquisition alias | Redirect to `/founding100/offer`, preserving query attribution |
| `/intake/thanks` | `REDIRECT` | Legacy intake confirmation alias | Redirect to `/founding100/offer`; preserve old intake code only for historical reference |
| `/founding100/quick` | `CURRENT` | Short campaign content | Preserve dedicated funnel surface |
| `/founding100/webinar` | `CURRENT` | Full campaign content | Preserve dedicated funnel surface |
| `/founding100/offer` | `CURRENT` | Founding 100 commercial entry | Preserve offer and release boundaries |
| `/founding100` | `CURRENT` | Post-payment customer handoff | Preserve onboarding limitations and post-payment experience |
| `/features` | `REDIRECT` | Historical product alias | Redirect to `/product` |
| `/strategic-ai-brain` | `REDIRECT` | Historical product alias | Redirect to `/product` |
| `/why` | `REDIRECT` | Historical narrative alias | Redirect to `/` |
| `/smb` | `REDIRECT` | Historical audience alias | Redirect to `/` |
| `/partner` | `REDIRECT` | Historical partner alias | Redirect to `/partners` |
| `/authority-partner` | `REDIRECT` | Historical partner alias | Redirect to `/partners` |
| `/operator` | `REDIRECT` | Historical certification alias | Redirect to `/partners` |
| `/certified-operator` | `REDIRECT` | Historical certification alias | Redirect to `/partners` |
| `/economics` | `REDIRECT` | Historical partner economics alias | Redirect to `/partners` |
| `/authority-economics` | `REDIRECT` | Historical partner economics alias | Redirect to `/partners` |
| `/partner-revenue-simulator` | `REDIRECT` | Historical partner economics alias | Redirect to `/partners` |
| `/legacy-home` | `REDIRECT` | Historical homepage alias | Redirect to `/` |
| `/brain` | `REDIRECT` | Historical homepage alias | Redirect to `/` |
| `/alt-home` | `REDIRECT` | Historical homepage alias | Redirect to `/` |
| `/login` | `COMPATIBILITY_SURFACE` | Authorized activation placeholder | Keep out of acquisition navigation until activation authority is ready |
| `/roadmap` | `REDIRECT` | Historical product alias | Redirect to `/product`; do not expose the old placeholder |
| `*` | `CURRENT` | Branded 404 behavior | Render a current-site 404 surface with home and Founding 100 recovery paths |

No redirect may land on the post-payment `/founding100` route. Legacy
pre-purchase traffic goes to the offer surface instead.

## 5. Executive Brief disposition

Every occurrence is classified by role before mutation:

- `CURRENT_BOUNDED_ARTIFACT`: may be named as one possible Business View or
  artifact where explicitly authorized;
- `HISTORICAL_ONLY`: retained in archive or historical documentation;
- `LEGACY_ROUTE`: `/intake` and its confirmation alias;
- `STALE_PRODUCT_POSITIONING`: Executive Brief as the product identity or
  mandatory first rung;
- `STALE_CTA`: `Build My Executive Brief` in shared shell or acquisition copy;
- `STALE_COMMERCIAL_LADDER`: Executive Brief → Diagnostic → Roadmap →
  Implementation as the public product architecture.

The live site must contain no stale CTA, stale product identity, or stale
commercial ladder. A bounded-artifact reference must be explicitly framed as
one possible view, never as the front door or prerequisite for deeper work.

Source-only legacy modules such as the old Intake, SMB sales, old homepage,
brain, partner-economics, and certification components remain outside the
route graph for historical reference. They are not current public surfaces and
are not included in the live route bundle.

## 6. Page contracts

### How It Works

Explain the mechanism in customer language:

```text
real company evidence
  -> people / work / systems / perspectives
  -> Formation
  -> known / disputed / unknown
  -> correction
  -> Operational Reality
  -> Operational Intelligence
  -> Business Views
  -> Nemo
  -> decision or warranted action
```

The page should link back to the homepage Golden Proof Thread and forward to
the Product and Founding 100 surfaces.

### Product

Explain StrategicAI as Operational Intelligence built from Operational Reality.
Describe Business Views as bounded, inspectable, correctable projections and
Nemo as reasoning from accepted organizational context. Capabilities may
include automation, coordination, alerts, investigation, or execution only
when the evidence warrants it and authority is explicit.

### Partners

Lead with **Understand before you implement.** StrategicAI establishes a usable
operating picture so advisors, automation partners, systems specialists,
domain experts, and ecosystem partners can scope downstream work more
responsibly. Do not claim StrategicAI controls partner delivery.

### Ways to Work / pricing compatibility surface

`/pricing` remains available for compatibility but no longer presents the old
four-step commercial ladder. It explains that Founding 100 is the current
commercial entry and that other work is separately scoped when warranted.

## 7. Shared CTA contract

Every visible public CTA has one declared job:

| CTA family | Job | Canonical destination |
| --- | --- | --- |
| `SEE_PROOF` | Move a visitor to the Golden Proof Thread | `/#proof-thread` |
| `HOW_IT_WORKS` | Explain the mechanism | `/how-it-works` |
| `FOUNDING_100` | Enter the current commercial/content architecture | `/founding100/offer` |
| `PARTNER_INQUIRY` | Explain or begin partner qualification | `/partners` |
| `AUTHORIZED_ACTIVATION` | Reach a separately authorized runtime surface | `/login` only when explicitly released |

`BUILD_EXECUTIVE_BRIEF` is retired as a general acquisition CTA.

## 8. Metadata and release controls

Current metadata must use the Operational Reality → Operational Intelligence
proposition. Static route metadata must match the live page metadata for all
current routes and compatibility surfaces.

Before publication:

- every homepage proof placeholder is replaced with an accepted launch-state
  capture;
- any Product or How It Works proof claim is supported by the same accepted
  evidence boundary;
- Founding 100 checkout, Terms, Privacy, post-payment verification, and
  Formation dependencies remain separately gated;
- no customer testimonial, ROI, or outcome claim is inferred from product
  proof;
- public route smoke tests show no dead CTA, redirect loop, or accidental
  post-payment landing.

## 9. Acceptance state

This architecture is implemented inside the existing visual system. Final
publication remains independently gated by accepted proof and commercial
acceptance. The next exact action after this convergence is:

> Replace the remaining homepage proof placeholders with accepted launch-state
> captures and perform final publication acceptance.
