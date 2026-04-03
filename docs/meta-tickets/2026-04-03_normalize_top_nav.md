# META-TICKET: Normalize Top Navigation across Site

## STATUS: ACTIVE
## STATUS: COMPLETED
## TIMESTAMP: 2026-04-03T03:52:00Z

## CONTEXT
The current site has duplicated navigation logic across multiple page files (`HomePage.tsx`, `Partners.tsx`, `SmbSales.tsx`, etc.). This leads to inconsistent navigation and makes updates difficult. The user wants to normalize the navigation and nest related links into dropdowns.

## OBJECTIVE
* [x] Create centralized `Navbar` with dropdowns
* [x] Create centralized `Footer`
* [x] Integrate global layout in `Shell.tsx`
* [x] Strip local nav/footer from `HomePage.tsx`
* [x] Strip local nav/footer from `Partners.tsx`
* [x] Strip local nav/footer from `SmbSales.tsx`
* [x] Strip local nav/footer from `Product.tsx`
* [x] Strip local nav/footer from `WhyStrategicAI.tsx`
* [x] Strip local nav/footer from `Pricing.tsx`
* [x] Strip local nav/footer from `Intake.tsx`
* [x] Strip local nav/footer from `AuthorityEconomics.tsx`
* [x] Strip local nav/footer from `AuthorityPartner.tsx`
* [x] Strip local nav/footer from `CertifiedOperator.tsx`

## STATUS
**COMPLETED** - All pages normalized to the global layout. Redundant navigation and footer code removed. Verify site-wide consistency in browser.

## SCOPE
- `frontend/src/components/Navbar.tsx`: New component.
- `frontend/src/components/Shell.tsx`: Update to include `Navbar`.
- All pages in `frontend/src/pages/public/`: Remove duplicated navigation.

## EXECUTION PLAN
5. [ ] Update `Footer` if necessary for consistency.

## BLOCKED
None.
