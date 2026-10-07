## 2026-10-07 - Client-side Secret Variable Exposure via Vite Define
**Vulnerability:** Global define block in `vite.config.ts` injected `process.env.GEMINI_API_KEY` into client-side JS bundles.
**Learning:** Vite's `define` option performs compile-time string substitution, causing secret environment variables present at build time to be hardcoded in plain text inside public production JS assets.
**Prevention:** Avoid exposing server-side or API key environment variables via client-side `define` blocks. Use `VITE_` prefixed variables strictly for non-sensitive public configs when necessary, and route API calls through a secure backend proxy or serverless function.
