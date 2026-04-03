# META-TICKET: Site-Wide CTA Standardization - "Build My AI Brain"

## STATUS: ACTIVE
## TIMESTAMP: 2026-04-03T04:39:00Z

## CONTEXT
The user identified that "Build My AI Brain" was not applied to all pages. Specifically, `/pricing` and `/features` still have legacy CTA labels like "Start My Roadmap".

## OBJECTIVE
1. Replace all remaining intake-bound button labels (e.g., "Start My Roadmap", "Identify My Constraint") with "Build My AI Brain" across the entire codebase.

## SCOPE
- `frontend/src/pages/public/Pricing.tsx`: Update CTAs.
- `frontend/src/pages/public/Features.tsx`: Update CTAs.
- Any other pages containing links to `/intake`.

## EXECUTION PLAN
* [x] Search for all occurrences of `to="/intake"` and update their labels to "Build My AI Brain".
* [x] Updated Pricing, Features, Why StrategicAI, SmbSales, and legacy HomePage.

## STATUS
**COMPLETED** - "Build My AI Brain" is now the universal CTA site-wide, replacing all iterations of "Start My Roadmap", "X-Ray", and "See It In Action".
