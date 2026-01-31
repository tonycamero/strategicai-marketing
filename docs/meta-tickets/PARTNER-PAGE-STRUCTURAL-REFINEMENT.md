
# 🎯 PARTNER-PAGE-STRUCTURAL-REFINEMENT

Refactor `/partners` to function as a **strategic routing and framing layer** for high-leverage visitors (Authority and Execution partners).

---

## EXECUTION STEPS

1.  **Refactor `Partners.tsx`**:
    *   **Hero Section**: Rewrite to focus on "identity filters" (operators, builders, authority figures with leverage). Use the specified bulleted list about mindset.
    *   **Phase Anchor**: Add the sentence "*StrategicAI is currently activating with a limited group of certified operators before broader partner expansion.*" in a muted style below the intro.
    *   **Archetype Blocks**: Implement cards for:
        *   **Authority Partners (License the Infrastructure)**: Link to `/authority-partner` and `/authority-economics`.
        *   **Certified Operators (Deliver with Leverage)**: Link to `/certified-operator` and `/partner-revenue-simulator`.
        *   **Strategic Explorers (Understand the Model)**: Link to `/authority-economics` and `/partner-revenue-simulator`.
        *   *Style Note:* Clean cards, no emojis/fluff.
    *   **Copy Cleanup**: Remove sales-heavy/promotional language. Use "doorway-style" CTAs (e.g., "Explore the Authority License").

2.  **Navigation Check**:
    *   Ensure NO changes are made to `routes.tsx` or `Shell.tsx` that would expose sub-pages. Access is strictly via `/partners`.
