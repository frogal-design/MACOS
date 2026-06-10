## 2026-06-07 - Unused Secret Injection in Vite
**Vulnerability:** Hardcoded `GEMINI_API_KEY` being injected into the client-side bundle via Vite's `define` property.
**Learning:** Vite's `define` configuration performs a global search-and-replace during build time. Even if the variable is not explicitly used in the source code, defining it can sometimes lead to exposure if not careful, and in this case, it was a regression of a previously removed secret injection that was no longer needed by the frontend.
**Prevention:** Avoid using `define` for sensitive environment variables in frontend builds. Prefer using `import.meta.env` for non-sensitive public variables and keep all secrets on the backend. Regularly audit `vite.config.ts` for secret leaks.

## 2026-06-07 - Dependency Synchronization
**Vulnerability:** Outdated dependencies (`react-router-dom`, `express`) with known DoS vulnerabilities.
**Learning:** `npm audit fix` correctly updated the `package-lock.json` to secure versions, but the `package.json` manifest still pointed to vulnerable versions (e.g., `^7.14.2`). This creates a discrepancy between the intended and actual state of the codebase.
**Prevention:** Manually synchronize `package.json` with the secure versions identified and installed by `npm audit fix` to ensure future installs and audits correctly reflect the security posture.
