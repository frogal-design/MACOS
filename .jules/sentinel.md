## 2026-06-28 - Build-time Secret Injection Removal

**Vulnerability:** Hardcoded secret exposure via Vite's `define` property. The `GEMINI_API_KEY` was being injected into the global `process.env` object during the build process, making it accessible in the client-side bundle.

**Learning:** Vite's `define` property performs a global search-and-replace at build time. This means any sensitive variable defined here will be bundled into the production JavaScript, even if it's not explicitly used in the source code.

**Prevention:** Avoid using `define` for sensitive environment variables. Use the standard `VITE_` prefix for variables intended for the frontend, and ensure that only non-sensitive configuration is exposed to the client. Periodically audit `vite.config.ts` for accidental secret injection.
