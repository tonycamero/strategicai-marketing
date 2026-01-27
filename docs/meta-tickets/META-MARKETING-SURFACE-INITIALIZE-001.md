# META-TICKET v2: META-MARKETING-SURFACE-INITIALIZE-001

## Goal
Initialize the infrastructure needed to preview the extracted marketing surface in the `strategicai-marketing` repository. This repository currently contains standalone `.tsx` components but lacks the build system, entry points, and dependencies required to render in a browser.

## Critical Constraints
- MUST NOT modify the existing page components in `frontend/src/pages/public/`.
- MUST use Vite + React as the build system.
- MUST provide the USER with a command to run the dev server manually.
- MUST preserve established branding (StrategicAI.app).

## Scope
### IN SCOPE
- Creation of `package.json` with necessary dependencies (`react`, `react-dom`, `vite`, `tailwindcss`, `wouter`).
- Creation of `index.html` and `src/main.tsx` entry points.
- Creation of `src/App.tsx` to route the 6 existing sales pages.
- Configuration of Tailwind CSS (`tailwind.config.js`, `postcss.config.js`, `src/index.css`).
- Restoration or mocking of the `TrustAgentShell` component to allow pages to compile.

### OUT OF SCOPE
- Modifying the text or logic of the sales pages.
- Implementing backend services.
- Permanent deployment (Vercel/GitHub Actions).

## Acceptance Criteria
- Repository has a valid `package.json` and Vite configuration.
- `npm run dev` (or equivalent) successfully compiles the project.
- The USER can navigate to `/`, `/smb`, `/economics`, `/partner`, `/operator`, and `/features` in a local browser.
- No Tenant/App/SuperAdmin surfaces are included.

## Verification
1. Agent confirms `package.json` exists and contains required packages.
2. Agent confirms routing in `App.tsx` matches the file structure.
3. USER confirms the site boots in their local environment.
