# META-TICKET: Standardize Intake CTA - "Build My AI Brain"

## STATUS: ACTIVE
## TIMESTAMP: 2026-04-03T04:35:00Z

## CONTEXT
The user wants to standardize the primary call-to-action across the site to "Build My AI Brain" for all links leading to the intake form.

## OBJECTIVE
1. Replace all intake-bound button labels on the homepage (`StrategicAiBrain.tsx`) with "Build My AI Brain".
2. Update the primary site-wide CTA in `Navbar.tsx` to "Build My AI Brain".

## SCOPE
- `frontend/src/pages/public/StrategicAiBrain.tsx`: Homepage CTA standardization.
- `frontend/src/components/Navbar.tsx`: Site-wide CTA standardization.

## EXECUTION PLAN
* [x] Identify and replace all `<Link to="/intake">` labels in `StrategicAiBrain.tsx`.
* [x] Update the `Navbar` button text from "Get Clarity" to "Build My AI Brain".

## STATUS
**COMPLETED** - "Build My AI Brain" is now the universal CTA for all intake-related actions across the homepage and site navigation.
