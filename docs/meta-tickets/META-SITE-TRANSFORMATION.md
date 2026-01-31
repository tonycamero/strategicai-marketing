---
id: META-SITE-TRANSFORMATION
title: Pivot Site to SMB-Facing Sales Page (with Screenshot Integration)
status: APPROVED
created: 2026-01-30
author: Antigravity
---

# Objective  
Transform the StrategicAI marketing site to speak directly to SMB end-customers ("tenants") while preserving a dedicated section for consultants/operators. Focus the homepage around *clarity, automation, and execution*, reinforced with UI screenshots from the actual platform.

---

## Goals  
- Replace the current consultant-focused homepage with a conversion-oriented sales page for SMBs.
- Integrate FE (tenant-facing) UI screenshots into key sales copy sections.
- Migrate existing B2B/operator content to `/partners` and position it as a power tool for delivery consultants.
- Clarify navigation hierarchy: SMB-first, consultants-secondary.

---

## Pages & Structure

### `/` – **SMB Sales Page** (`SmbSales.tsx`)
- **Hero**:  
  - *Headline*: “Get Strategic Clarity”  
  - *Sub*: “Connect your vision to execution in weeks, not months.”
  - *Visual*: `smb-dashboard-main.png`  
  - *CTA*: “Get My Roadmap”  

- **Section: Strategic Intake**  
  - Copy: “We capture your team's reality—not assumptions.”  
  - Visuals: `smb-intake-org.png`, `smb-intake-team.png`

- **Section: Executive Brief**  
  - Copy: “A clear snapshot of what’s broken—and why.”  
  - Visual: `smb-executive-brief.png`

- **Section: Automated Diagnostic**  
  - Copy: “We synthesize the findings into a prioritized action plan.”  
  - Visuals: `smb-report-overview.png`, `smb-report-opportunities.png`

- **Section: Trust Console**  
  - Copy: “Ask anything. Your AI advisor knows your team’s reality.”  
  - Visual: `smb-trust-console.png`

- **Footer CTA**  
  - “Start your roadmap” / “Talk to an advisor”

---

### `/partners` – **Partner Enablement Page** (`Partners.tsx`)
- **Hero**:  
  - *Headline*: “Deliver Strategy Like an Agency”  
  - *Sub*: “Run high-leverage engagements without drowning in docs.”
  - *Visual*: `partner-dashboard-main.png`

- **Section: Control & Delivery**  
  - Copy: “Assign, track, and deliver roadmaps across accounts.”  
  - Visual: `partner-delivery-console.png`

- **Section: Execution System**  
  - Copy: “Support execution across multiple stakeholders.”  
  - Visual: `partner-execution-steps.png`

- Optional: “White-label mode,” “Client-facing tools,” etc.

---

## Screenshot Mapping  
See ticket `META-SCREENSHOT-MAPPING` for filename associations and placement.

---

## Dev Tasks Summary
- [x] Swap route order to make `SmbSales.tsx` the homepage.
- [x] Rename and relocate screenshots in `public/images/`.
- [x] Add `<img>` elements to page sections using the mapped screenshots.
- [x] Update nav layout and route links.
- [x] Validate mobile/responsive layouts after injection.
- [x] Implement Lightbox/Modal for full-screen image viewing.
