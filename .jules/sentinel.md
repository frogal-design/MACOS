## 2026-06-07 - Remove build-time secret injection
**Vulnerability:** Build-time secret injection of `GEMINI_API_KEY` in `vite.config.ts`.
**Learning:** Vite's `define` property performs a global search-and-replace during build time, which can expose environment variables in the client-side bundle even if they are not explicitly used in the source code.
**Prevention:** Avoid using `define` for sensitive environment variables. Use `import.meta.env` for variables that are intended to be public, and keep secrets strictly on the server-side.
