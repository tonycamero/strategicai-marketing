# 🎯 EXECUTION-TICKET: PUBLIC-INTAKE-FORM
ID: EXEC-MKTG-INTAKE-001
STATUS: COMPLETED
## OBJECTIVE
Create a new public intake form at `/intake` and wire all landing page CTAs to it. This replaces the placeholder `/roadmap` path for marketing CTAs.

## REQUIREMENTS
- New Page: `/intake` with a multi-field pre-qualification form.
- Success Page: `/intake/thanks` or inline success state.
- Routing: Add to `frontend/src/routes.tsx`.
- CTAs: Update all "Get Strategic Clarity" and "Get My Roadmap" buttons to point to `/intake`.
- Backend: Implement `/api/intake` endpoint for form submission.
- Validation: Required fields and basic format checks.
- Spam Protection: Honeypot field.

## AFFECTED FILES
- `frontend/src/routes.tsx`
- `frontend/src/pages/public/Intake.tsx` (NEW)
- `frontend/src/pages/public/IntakeThanks.tsx` (NEW)
- `frontend/src/pages/public/SmbSales.tsx`
- `frontend/src/pages/public/Partners.tsx`
- `frontend/src/pages/public/Product.tsx`
- `frontend/src/pages/public/WhyStrategicAI.tsx`
- `frontend/src/pages/public/Pricing.tsx`
- `netlify/functions/intake.ts` (NEW)
- `netlify.toml` (Update for function routing)

## SCHEMA (Conceptual)
`intake_submissions` table:
- id: uuid
- full_name: text
- email: text
- phone: text
- company: text
- role: text
- team_size: text
- primary_pains: text[]
- other_pain: text
- priority_bottleneck: text
- website: text
- notes: text
- created_at: timestamp
