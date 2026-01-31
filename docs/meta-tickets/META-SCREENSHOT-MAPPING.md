---
id: META-SCREENSHOT-MAPPING
title: Analyze and Map Site Screenshots
status: PROPOSED
created: 2026-01-30
author: Antigravity
---

# Screenshot Analysis & Mapping

## Objective
Analyze the set of provided screenshots (from 2026-01-30) to understand their context within the StrategicAI platform. Map these images to the appropriate marketing site sections based on the rule:
- **BE/Admin Images** -> Partner/Operator Pages (`/partners`)
- **FE/Tenant Images** -> SMB/Tenant Pages (`/`)

## Input Assets
Located in `frontend/public/images/`:
- Screenshot 2026-01-30 174858.png
- Screenshot 2026-01-30 174921.png
- Screenshot 2026-01-30 174942.png
- Screenshot 2026-01-30 174957.png
- Screenshot 2026-01-30 175040.png
- Screenshot 2026-01-30 175212.png
- Screenshot 2026-01-30 175253.png
- Screenshot 2026-01-30 175310.png
- Screenshot 2026-01-30 175343.png
- Screenshot 2026-01-30 175404.png
- Screenshot 2026-01-30 175732.png
- Screenshot 2026-01-30 180125.png

## Analysis & Mapping Results

Based on visual inspection, the screenshots have been categorized and mapped as follows:

| Original Filename | Proposed Name | Function | Audience | Target Page | Target Section |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Screenshot 2026-01-30 174858.png` | `smb-dashboard-main.png` | Tenant Dashboard (ROI, Roadmap) | **FE (SMB)** | `SmbSales.tsx` | Hero / "What You Get" |
| `Screenshot 2026-01-30 174921.png` | `smb-intake-org.png` | Org Type Selection (Intake) | **FE (SMB)** | `SmbSales.tsx` | "Strategic Intake" |
| `Screenshot 2026-01-30 174942.png` | `smb-intake-team.png` | Define Strategic Vectors (Team) | **FE (SMB)** | `SmbSales.tsx` | "Role-Based Intake" |
| `Screenshot 2026-01-30 175212.png` | `partner-dashboard-main.png` | Consultant Dashboard (Control Plane) | **BE (Partner)** | `Partners.tsx` | Hero / "Deliver Like a Agency" |
| `Screenshot 2026-01-30 175253.png` | `smb-report-overview.png` | Diagnostic Overview (Report) | **FE (SMB)** | `SmbSales.tsx` | "Automated Roadmaps" |
| `Screenshot 2026-01-30 175310.png` | `smb-report-opportunities.png` | AI Leverage Opportunities (Roadmap) | **FE (SMB)** | `SmbSales.tsx` | "ROI Dashboards" |
| `Screenshot 2026-01-30 175343.png` | `smb-executive-brief.png` | Executive Brief (Read View) | **FE (SMB)** | `SmbSales.tsx` | "Executive Brief" |
| `Screenshot 2026-01-30 175404.png` | `partner-delivery-console.png` | Brief Delivery Controls | **BE (Partner)** | `Partners.tsx` | "Launch in Days" |
| `Screenshot 2026-01-30 175732.png` | `smb-trust-console.png` | TrustAgent Chat Interface | **FE (SMB)** | `SmbSales.tsx` | "TrustConsole™" |
| `Screenshot 2026-01-30 180125.png` | `partner-execution-steps.png` | Execution Authority Workflow | **BE (Partner)** | `Partners.tsx` | "Execution System" |

*(Minor detail images `174957.png` and `175040.png` are omitted from primary mapping to avoid clutter, available for detailed views if needed.)*

## Implementation Plan
1.  **Rename Files**: Rename the image files in `frontend/public/images/` to the "Proposed Name" to ensure semantic clarity.
2.  **Update `SmbSales.tsx`**: Insert `<img>` tags in the relevant sections showing the User Interface to reinforce the "Operational OS" messaging.
3.  **Update `Partners.tsx`**: Insert `<img>` tags in the relevant sections to demonstrate the "Control Plane" power for consultants.
