## 2026-06-25 - [Client-side Secret Leakage via Vite Define]
**Vulnerability:** The `vite.config.ts` was using the `define` property to inject `GEMINI_API_KEY` into the global `process.env` space.
**Learning:** Even if the variable is not explicitly used in the source code, Vite's `define` performs a global search-and-replace during the build process. If any dependency or future code were to include the string `process.env.GEMINI_API_KEY`, the actual secret key would be hardcoded into the production JS bundle.
**Prevention:** Avoid using `define` for sensitive environment variables in frontend-only projects. Use `import.meta.env` for variables intended for the client, and ensure secrets are only handled by server-side components or edge functions that are not part of the client bundle.
