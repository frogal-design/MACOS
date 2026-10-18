## 2026-06-18 - Build-time Secret Injection Removal

**Vulnerability:** Build-time secret injection via Vite's `define` property exposed `GEMINI_API_KEY` to the client-side bundle.

**Learning:** Using `loadEnv(mode, '.', '')` in `vite.config.ts` without a prefix filter, combined with `define`, can inadvertently bundle sensitive environment variables into production assets, even if they aren't explicitly referenced in the source code.

**Prevention:** Avoid using `define` for sensitive keys. Use Vite's built-in `VITE_` prefixing for environment variables that are intended for the frontend, and ensure the `loadEnv` call is properly scoped or eliminated if not strictly necessary.
