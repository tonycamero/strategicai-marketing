# META-TICKET: Fix Dropdown Hover Continuity Issues

## STATUS: ACTIVE
## TIMESTAMP: 2026-04-03T04:09:00Z

## CONTEXT
The user is experiencing a "hover gap" where the dropdown menu closes while moving the mouse from the navigation item to the dropdown menu.

## OBJECTIVE
1. Ensure the hover state is continuous between the navigation item and the dropdown card.
2. Maintain a visual gap without breaking the hover trail.

## SCOPE
- `frontend/src/components/Navbar.tsx`: Navbar interaction fix.

## EXECUTION PLAN
* [x] Remove the `mt-2` margin-top from the `dropdownCard` style.
* [x] Ensure the dropdown is flush with the parent container's hover area.

## STATUS
**COMPLETED** - Hover gap eliminated. The drop-down menu now maintains state while moving the cursor from the trigger to the sub-menu items.
