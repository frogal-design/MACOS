# Sentinel Journal

## 2026-08-06 - [Client-Side Key Leakage & Supply Chain Attack Surface Hardening]
**Vulnerability:** Client-side leakage risk of `GEMINI_API_KEY` via Vite global define injections, alongside high-severity CSRF/XSS vulnerabilities in `react-router-dom@7.14.2` and multiple server-side unused dependencies (`express`, `dotenv`, `@google/genai`).
**Learning:** Merging older branches can silently override security hardening in `package.json` and `vite.config.ts`, re-introducing high-severity CVEs and API key exposure risks.
**Prevention:** Keep production environments clean by immediately pruning unused backend libraries, pin-upgrading core routing and build dependencies to known secure versions, and removing any global API key definitions from compilation configs.
