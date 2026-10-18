## 2026-06-07 - Prevention of Secret Exposure via Vite's `define`
**Vulnerability:** Build-time injection of `GEMINI_API_KEY` into the client-side bundle using Vite's `define` property.
**Learning:** Vite's `define` performs a global search-and-replace during build time. Defining sensitive environment variables in `vite.config.ts` causes them to be bundled into the frontend code even if they are not explicitly used in the `src/` directory.
**Prevention:** Avoid using Vite's `define` for sensitive secrets. If secrets are needed for backend calls, they should be managed server-side. Regularly audit `vite.config.ts` for security regressions.
