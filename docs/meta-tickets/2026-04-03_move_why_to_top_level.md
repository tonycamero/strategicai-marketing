# META-TICKET: Update Navbar - Move "Why Strategic AI" to Top Level

## STATUS: ACTIVE
## TIMESTAMP: 2026-04-03T04:05:00Z

## CONTEXT
The user wants to highlight the "Why Strategic AI?" narrative by moving it from a sub-menu into the primary top-level navigation.

## OBJECTIVE
1. Remove "Why StrategicAI?" from the `navLinks` Product category.
2. Render "Why StrategicAI?" as a top-level link at the far left of the main navigation menu.

## SCOPE
- `frontend/src/components/Navbar.tsx`: UI layout update.

## EXECUTION PLAN
* [x] Remove the link from the `navLinks` object.
* [x] Manually insert the `<Link>` component before the `navLinks.map` call in the navigation container.

## STATUS
**COMPLETED** - "Why StrategicAI?" is now the first top-level link in the navigation menu, providing direct access to the core narrative without needing to open a dropdown.
