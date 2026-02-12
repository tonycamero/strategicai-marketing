# 🎯 EXECUTION-TICKET: LINK-LOGIN-PORTAL
ID: EXEC-NAV-LINK-LOGIN-001

## OBJECTIVE
Link the "Login" button in the public site navigation to the external portal login page.

## REQUIREMENTS
- Target URL: `https://portal.strategicai.app/login`
- Behavior: Open in a new tab (`target="_blank"`)
- Scope: All public pages containing the "Login" navigation link.

## AFFECTED FILES
- `frontend/src/pages/public/Partners.tsx`
- `frontend/src/pages/public/WhyStrategicAI.tsx`
- `frontend/src/pages/public/Product.tsx`
- `frontend/src/pages/public/Pricing.tsx`
- `frontend/src/pages/public/SmbSales.tsx`

## EXECUTION STEPS
1. Locate the `<Link to="/login">` or similar "Login" button in the `nav` section of each affected file.
2. Replace it with an `<a>` tag:
   ```tsx
   <a 
     href="https://portal.strategicai.app/login" 
     target="_blank" 
     rel="noopener noreferrer" 
     className="text-sm text-slate-400 hover:text-white cursor-pointer"
   >
     Login
   </a>
   ```
3. Verify the change in each file.
