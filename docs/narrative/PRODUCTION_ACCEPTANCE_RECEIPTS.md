---
id: STRATEGICAI-PRODUCTION-ACCEPTANCE-RECEIPTS
title: StrategicAI Marketing Claim Production Acceptance Receipts
status: ACTIVE_EVIDENCE_REGISTER
created: 2026-07-17
release_gate: BLOCKED
---

# StrategicAI Marketing Claim Production Acceptance Receipts

## Purpose

This register holds the current production evidence required before a marketing claim may be classified as `Available now` under the StrategicAI Narrative Constitution.

Source code, a rendered UI, an isolated endpoint, or a successful build is supporting evidence only. An `Available now` receipt must prove a customer-accessible path end to end in the current production environment under its stated conditions.

## Receipt 2026-07-17-A - Production Entry Path

Status: **FAILED - UPSTREAM DATABASE AUTHENTICATION**

Observed production surfaces:

| Check | Result | Evidence |
| --- | --- | --- |
| Marketing homepage | `200` | `https://strategicai.app/` returned the deployed Vite document. |
| Marketing product deep link | `200` | `https://strategicai.app/product` returned the SPA fallback document. |
| Production signup page | `200` | `https://go.strategicai.app/signup` returned the deployed Strategic AI Roadmap Portal shell. |
| Deployed signup authority | Present | The deployed bundle posts to `/api/public/prospect-intake` and resolves its API origin to `https://api.strategicai.app`. |
| Cross-origin preflight | `204` | The public prospect-intake endpoint allows `POST` from `https://go.strategicai.app`. |
| Production API health | `503` | `https://api.strategicai.app/api/health` reported database status `unavailable`. |
| Database authority | Failed | Health response reported PostgreSQL error code `28P01`, no `lastReadyAt`, and 110 consecutive failures at observation time. |

Observed deployment identity:

```text
Provider: Railway
Project: strategic-ai-staging
Environment: production
Service: strategic-ai-staging
Public API release commit: 5870c84359349608a6036cae8bd2d8f92d7f67b3
Observation time: 2026-07-17T05:00:37Z
```

Security note: no secret value was read, printed, or copied during this verification.

Decision:

- The production signup UI is reachable and correctly wired at the HTTP and CORS layers.
- The customer path is not `Available now` because the production API cannot authenticate to its database.
- No prospect or tenant smoke record was created while the database authority was unhealthy.
- Signup, owner/team intake, Executive Brief delivery, and pre-upgrade Nova remain `Pending Available-now verification`.

## Required Remediation

The platform authority must complete the credential cutover described in its database-rotation runbook:

1. Reconcile the active Neon production role and password without exposing the credential.
2. Replace the Railway production `DATABASE_URL` with the tested connection string through the provider secret boundary.
3. Redeploy or restart the backend service so the new secret is active.
4. Verify `/api/health` returns `200`, database status `ready`, and a current `lastReadyAt`.
5. Confirm the old credential is rejected if the rotation procedure requires that proof.

The platform repository was dirty with unrelated database and pilot-governance work during this check. No platform file was changed by the marketing sprint.

## Acceptance Path After Remediation

### Receipt B - Signup Through Authenticated Workspace

Required proof:

1. Open `https://go.strategicai.app/signup` with a unique test source.
2. Submit a clearly labeled acceptance-test organization and owner.
3. Confirm the public prospect intake returns success and provisions the expected owner, tenant, organism, and continuation payload.
4. Authenticate with Magic using an inbox controlled for the test.
5. Confirm the authenticated owner lands in the provisioned workspace and can continue onboarding.
6. Record request IDs, tenant/prospect identifiers, timestamps, environment, and cleanup disposition without recording tokens or secrets.

Claim unlocked when passed:

```text
A leader can begin from the marketing site and continue in the production platform.
```

### Receipt C - Owner and Team Evidence

Required proof:

1. Complete the production owner intake in the acceptance-test workspace.
2. Send at least one team invitation.
3. Accept the invitation through the supported identity path.
4. Submit the team intake.
5. Confirm both owner and team evidence are visible to the authorized workflow and associated with the correct tenant.
6. Record timestamps, identifiers, and cleanup disposition.

Claim unlocked when passed:

```text
StrategicAI collects organization context, leadership input, and team evidence.
```

### Receipt D - Executive Brief Delivery

Required proof:

1. Trigger the production Executive Brief flow using the accepted owner and team evidence.
2. Confirm synthesis completes under the Mirror boundary.
3. Confirm the immutable PDF artifact is persisted for the correct tenant and Brief.
4. Confirm the owner can access the delivered artifact through the currently supported delivery path.
5. Confirm the artifact does not contain final diagnosis, intervention prescription, or Roadmap sequencing.
6. Record artifact identifier, checksum or immutable reference, delivery timestamp, and cleanup disposition without storing private Brief content in this repository.

Claim unlocked when passed:

```text
StrategicAI produces and delivers an Executive Brief.
```

### Receipt E - Bounded Pre-Upgrade Nova

Required proof:

1. Enter Nova as the acceptance-test owner before Diagnostic entitlement.
2. Ask Nova to explain the Executive Brief and the next commercial stage.
3. Confirm Nova provides process and artifact explanation.
4. Ask for definitive root cause, intervention sequence, and Roadmap-grade prescription.
5. Confirm Nova refuses or remains inside the pre-upgrade boundary.
6. Record the session identifier, entitlement state, timestamps, and redacted boundary result.

Claim unlocked when passed:

```text
Nova can help users understand the Brief and the next stage.
```

## Marketing Release Gate

The narrative package may be reviewed while these receipts are pending, but it cannot be marked fully approved for release with the four claims classified as `Available now`.

Allowed paths:

- Repair production and complete Receipts B through E.
- Keep the claims pending and hold the public release.
- Approve a separately revised public narrative that removes or explicitly gates the unavailable paths.

No path may treat code presence, CORS success, or a reachable signup shell as equivalent to customer availability.
