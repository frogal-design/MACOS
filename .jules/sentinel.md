## 2026-04-12 - Prevent Exposure of Secret API Keys via Client-Side Define Blocks

**Vulnerability:**
In `vite.config.ts`, `loadEnv()` was used to load `GEMINI_API_KEY` from the environment and inject it into the client-side bundle via Vite's `define` option (`'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)`). This exposes secret API keys directly inside publicly downloadable frontend JavaScript bundles.

**Learning:**
Vite's `define` option performs compile-time static replacement across client-side code. Exposing non-public API keys or secrets via `define` or `VITE_` prefixed variables bundles those secrets directly into static client assets.

**Prevention:**
Never pass secret API keys or backend tokens to Vite's `define` block or `VITE_` prefixed environment variables unless they are explicitly meant to be public client keys. Keep confidential API credentials restricted to secure server-side/backend services or proxy endpoints.
