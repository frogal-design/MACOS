## 2026-03-31 - Global Define Block Client Secret Exposure
**Vulnerability:** Global `define` block in `vite.config.ts` (`'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)`) bakes server environment variables directly into client static build artifacts (`dist/assets/*.js`).
**Learning:** Vite replaces defined string tokens at build time, converting environment secrets into plain text string literals in public production JS bundles.
**Prevention:** Never use global `define` in Vite config to expose secret API keys to client code. Store secrets server-side or use backend proxy endpoints for authenticated API requests.
