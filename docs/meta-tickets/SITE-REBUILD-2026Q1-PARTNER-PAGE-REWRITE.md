
# 🎯 SITE-REBUILD-2026Q1-PARTNER-PAGE-REWRITE

 Transform the `/partners` page into a strategic routing hub for high-leverage collaborators (Authority and Execution partners). This page becomes the exclusive gateway to `/authority-partner`, `/authority-economics`, `/certified-operator`, and `/partner-revenue-simulator`.

---

## EXECUTION STEPS

1.  **Overwrite `Partners.tsx`**:
    *   **Section 1 (Identity Framing):** Define the mindset filter (leverage builders vs. link pushers).
    *   **Section 2 (Three Partner Archetypes):**
        *   **Authority Partners:** Link to `/authority-partner` (Explore License) and `/authority-economics` (Understand Model).
        *   **Execution Partners:** Link to `/certified-operator` (Operator Path) and `/partner-revenue-simulator` (Run Simulator).
        *   **Strategic / Exploratory:** Link to `/authority-economics` and `/partner-revenue-simulator`.
    *   **Section 3 (Philosophy):** "Not an affiliate network" block with bulleted beliefs.
    *   **Styles:** Use clean cards/blocks, visual density reduction for framing, and explicit linking.

2.  **Navigation Clean-up**:
    *   Ensure `/partners` is the *only* top-nav link for partners.
    *   Verify sub-pages (`/authority-*`, `/certified-*`, `/partner-revenue-*`) are NOT in the top nav.

3.  **Routing Verification**:
    *   Confirm `routes.tsx` maintains these routes but they are simply not linked in the global nav (which is already true based on previous `routes.tsx` edits, but good to double-check).

---

## REFERENCE COPY

### Identities
> "This is for serious partners building with leverage — not link-pushers."

### Archetypes
*   Authority: Ecosystem owners, list builders. Infrastructure licensing.
*   Execution: GHL agencies, ops teams. Sell + deliver roadmaps.

### Philosophy
> StrategicAI is not an affiliate network. Access is structured to maintain leverage, protect quality, and align incentives.
