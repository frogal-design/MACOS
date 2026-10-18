## 2026-06-18 - Build-time Secret Exposure via Vite Define
**Vulnerability:** Build-time secret injection of `GEMINI_API_KEY` into the client-side bundle.
**Learning:** The Vite `define` property performs a global search-and-replace during build. If `process.env.GEMINI_API_KEY` is defined there, any occurrence (or even potential occurrence in some build configurations) will be replaced with the actual key value, potentially bundling it into production assets even if not explicitly referenced in the `src/` directory.
**Prevention:** Avoid using the `define` configuration to inject sensitive environment variables. Use Vite's built-in `VITE_` prefix mechanism for variables that are intended to be public, and keep sensitive keys purely on the server side or in a backend proxy.
