## 2026-05-18 - Client-Side Define Block Credential Exposure

**Vulnerability:** `vite.config.ts` used `loadEnv` and Vite's `define` property (`'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)`) to directly inject API key environment variables into the compiled production bundle.

**Learning:** Vite's `define` config replaces variable expressions at build time across the entire client code base. In statically built single-page apps (SPAs), any value assigned in `define` will be hardcoded into public JS artifacts served to browser clients, exposing secrets to end users and automated scrapers.

**Prevention:** Never use Vite `define` or standard `process.env` defines to inject backend secrets or private API keys into client-side SPA builds. If client-side access is strictly required, use `VITE_` prefixed environment variables via `import.meta.env` and ensure third-party API calls needing secret keys are proxied through a secure backend/serverless function.
