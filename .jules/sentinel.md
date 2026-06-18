## 2026-06-18 - Build-time Secret Injection Removal
**Vulnerability:** Build-time secret injection of `GEMINI_API_KEY` via Vite's `define` property.
**Learning:** Vite's `define` property performs a global search-and-replace during build time, potentially leaking secrets into the client-side bundle even if not explicitly used in the source code.
**Prevention:** Avoid using `define` for sensitive environment variables. Use `import.meta.env` with the `VITE_` prefix for variables intended for the client, and ensure server-side secrets are never exposed to the build process.

## 2026-06-18 - Dependency Hardening
**Vulnerability:** High and moderate severity vulnerabilities in `react-router-dom`, `express`, `qs`, `ws`, and `protobufjs`.
**Learning:** `npm audit fix` updates `package-lock.json` but may not update `package.json` if the fix is outside the specified range, leading to potential regressions if the environment is reset.
**Prevention:** Manually synchronize `package.json` with secure versions identified during `npm audit` to ensure persistent security hardening.
