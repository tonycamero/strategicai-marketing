---
id: META-STRATEGY-PIVOT
title: Strategy Pivot to SMB/Tenant Targeting — FINALIZED
status: APPROVED
created: 2026-01-30
author: StrategicAI Core
---

# Strategy Pivot: Target Tenants/SMBs — Finalized

## Objective
Refocus primary marketing to serve **SMBs and internal operators** directly, under the positioning of *“Get Strategic Clarity.”*

Consultant and Operator content is preserved on `/partners` with a clear CTA funnel from the homepage.

---

## Core Architecture

### 1. Homepage (`/`)
**Audience:** SMBs, internal operators, small teams, business owners

**Page Name:** `SmbSales.tsx` (remains)

**Headline Theme:** **"Get Strategic Clarity"**

---

### 2. Partners Page (`/partners`)
**Audience:** Consultants, fractional COOs, agency owners, educators

**Content Source:** Existing homepage (`Features.tsx`)

**Page Rename:** `Features.tsx` → `Partners.tsx`

---

## Navigation

- Left:
  - `Product`
  - `Why StrategicAI` (or `ROI`)
  - `Pricing` *(if/when ready)*

- Right:
  - `Partner Program` (links to `/partners`)
  - `Login`
  - `Get Strategic Clarity` *(primary CTA)*

---

## New Homepage Structure (`/`)

> ### “Your Strategy. Executed.”
> StrategicAI is your Operational OS — built for growing businesses that want more than dashboards.  
> **Get clarity. Drive execution. See results.**

---

### ✅ SECTION 1: The Problem

**“Too many businesses die in a spreadsheet.”**  
You know the feeling:

- Strategy lives in a doc nobody reads  
- Daily execution pulls teams in 5 directions  
- You’re stuck answering “what’s next?” over and over  

---

### ✅ SECTION 2: The Solution

**StrategicAI turns your plans into motion.**  
We give every client:

- A **clear roadmap** based on your real ops
- A **TrustConsole** that guides daily execution
- A system that tracks progress automatically — no micromanaging

---

### ✅ SECTION 3: What You Get

> **Every StrategicAI Tenant Includes:**

- **TrustConsole** – Your private execution intelligence, available 24/7
- **Role-Based Intake** – Hear from Sales, Ops, Delivery — not just the founder
- **Automated Roadmaps** – Generated from your real context
- **Workflow Enforcement** – Stop guessing if things are done right
- **ROI Dashboards** – Know what’s working at 30/60/90 days

No fluff. No AI gimmicks.  
Just operational clarity.

---

### ✅ SECTION 4: Proof + Visuals

**Real Results from Real Businesses**  
- “Reduced onboarding friction by 40%.”  
- “Weekly execution aligned for the first time in years.”  
- “Feels like we finally have a system.”  

📸 *Insert screenshots of TrustConsole, Roadmap UI, and ROI Dashboard*

---

### ✅ SECTION 5: Get Started CTA

> **Get Strategic Clarity for Your Business**

Choose your entry path:

- **[Request Access]** – Start your own StrategicAI Tenant  
- **[View a Sample Roadmap]** – See what clarity looks like  
- *(small link)* Are you a consultant? → [See the Partner Program]

---

## Execution Plan Updates

### ✅ ROUTES
- Set `/` = `SmbSales.tsx` (this new version)
- Set `/partners` = `Features.tsx` (renamed as `Partners.tsx`)

### ✅ CTA Standardization
Replace all homepage CTAs with:  
**“Get Strategic Clarity”**

Use alternates only inline, e.g.:
- “View a Sample Roadmap”
- “Request Access”

---

## Optional Add-Ons
*(Can ship post-pivot)*

- `/roi` or `/why` – strategic proof page
- Simple `/pricing` estimator page (non-public beta)
- Integrate scroll-activated visuals (TrustConsole flows)

---

## Summary

This new version:

- Speaks directly to SMB pains without dumbing down the product
- Frames StrategicAI as an *execution OS*, not AI fluff
- Maintains a clean funnel to keep operators and consultants engaged

Let’s implement this pivot and reroute traffic accordingly.
