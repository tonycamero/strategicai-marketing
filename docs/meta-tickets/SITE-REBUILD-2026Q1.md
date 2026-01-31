
id: SITE-REBUILD-2026Q1
title: Execute Full StrategicAI Site Refresh
status: READY
created: 2026-01-30
author: StrategicAI Team
---

# Objective

Fully implement the 2026Q1 refresh of the StrategicAI marketing site, using updated image assets, refined UX structure, and simplified navigation. This update emphasizes differentiated value for **SMBs** (front-end) and **Partners** (back-end consultants), aligning content and visuals with user pain points and product realities.

---

# Scope of Work

## 1. 🎯 NAVIGATION CLEANUP

**Remove all legacy header links** (e.g., `Authority Economics`, `Certified Operator`, etc.)

**New navigation items:**

| Label           | Destination        |
|----------------|--------------------|
| Product         | `/product`         |
| Why StrategicAI | `/why`             |
| Pricing         | `/pricing`         |
| Partner Program | `/partners`        |
| Login           | `/login`           |
| CTA Button      | `/roadmap` (Label: “Get Strategic Clarity”) |

---

## 2. 🧩 HOMEPAGE (`SmbSales.tsx`) STRUCTURE

Rebuild the homepage to follow a clear **narrative arc** for SMBs:

| Section | Purpose | Image | Copy |
|--------|---------|-------|------|
| **Hero** | Instant clarity value prop | `smb-dashboard-main.png` | "Connect your vision to execution in weeks, not months." |
| **Strategic Intake** | Shows org type classification | `smb-intake-org.png` | "We tune to your world: restaurant, agency, or trade." |
| **Role-Based Intake** | Highlights team-specific feedback loop | `smb-intake-team.png` | "We capture your team's reality — not assumptions." |
| **Executive Brief** | Aligns team on facts pre-recommendation | `smb-executive-brief.png` | "A clear snapshot of what’s broken—and why." |
| **AI Diagnostic** | Transforms findings into prioritized plan | `smb-report-overview.png`, `smb-report-opportunities.png` | "We synthesize into a prioritized action plan." |
| **TrustConsole™** | Conversational AI copilot | `smb-trust-console.png` | "Ask anything. Your AI advisor knows your team’s reality." |
| **Final CTA** | Dual-path CTA | _None_ | “Start your roadmap” + “Talk to an advisor” |

---

## 3. ⚙️ PARTNER PAGE (`Partners.tsx`) STRUCTURE

Highlight back-end power for consultants/operators.

| Section | Purpose | Image | Copy |
|--------|---------|-------|------|
| **Hero** | Shows Partner control plane | `partner-dashboard-main.png` | "Deliver like a full agency — without building one." |
| **Execution System** | Workflow automation & intake gating | `partner-execution-steps.png` | "You control when, how, and who gets to build." |
| **Delivery Console** | Diagnostic and Brief delivery controls | `partner-delivery-console.png` | "Briefs, roadmaps, diagnostics — one click delivery." |

---

## 4. 📂 ASSETS & NAMING

All screenshots are renamed and placed in `/frontend/public/images/` as:

```

smb-dashboard-main.png
smb-intake-org.png
smb-intake-team.png
smb-executive-brief.png
smb-report-overview.png
smb-report-opportunities.png
smb-trust-console.png
partner-dashboard-main.png
partner-execution-steps.png
partner-delivery-console.png

```

Use `<img src="/images/____.png" />` syntax in the site code.

---

## 5. 🚫 VISIBILITY CONTROLS

Do **not** reference or expose any in-progress system steps such as:
- Diagnostic generation
- Roadmap builder
- AI synthesis pipeline

✅ Only show completed deliverables:
- Executive Brief
- Roadmap
- TrustConsole™

---

## 6. 🧠 COPYWRITING + MESSAGING

**IMPORTANT**  
Use the attached `content-search-guide.md` for copy prompts and user-facing messaging. Prioritize:
- Plainspoken explanations
- Pain-point matching headlines
- Search-friendly phrasing

---

# Status After Completion

- Public site reflects updated visual narrative
- Audience segmentation is clear (SMB vs Partner)
- TrustConsole is visible but abstracted as final interface
- Diagnostic process is invisible until report is “ready”

---

# Notes

You can soft-launch by toggling a `NEXT_PUBLIC_SITE_VERSION=2026Q1` flag in `.env` if needed.

