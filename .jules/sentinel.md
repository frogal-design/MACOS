# Sentinel Journal

## 2026-06-18 - Secret Injection via Vite Define
**Vulnerability:** Build-time secret injection of sensitive API keys (e.g., GEMINI_API_KEY) into the client-side bundle using Vite's `define` property.
**Learning:** Vite's `define` property performs a global search-and-replace during build time. Sensitive placeholders like `process.env.GEMINI_API_KEY` are replaced with their actual values in the final JavaScript assets, even if not explicitly referenced in the source code.
**Prevention:** Avoid using the `define` property for sensitive data. Use Vite's standard `VITE_` prefix for environment variables meant for the frontend, and ensure they are only accessed via `import.meta.env`.

## 2026-06-18 - Dependency Hardening and Surface Area Reduction
**Vulnerability:** High-severity Denial of Service (DoS) and CSRF vulnerabilities in `react-router-dom`, `express`, and `vite`, plus an unused `@google/genai` package.
**Learning:** Unused dependencies increase the attack surface and security maintenance burden. Outdated core dependencies like `react-router-dom` (v7.1.x) were vulnerable to DoS.
**Prevention:** Regularly prune unused packages and keep core dependencies updated to patched versions (e.g., `react-router-dom@7.18.0`, `express@4.22.2`, `vite@6.4.3`).
