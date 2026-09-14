## 2026-04-18 - Client-Side Environment Variable Define Block Exposure
**Vulnerability:** `vite.config.ts` used `loadEnv` and Vite's `define` config option to globally replace `process.env.GEMINI_API_KEY` with the environment variable value. In client-side Vite builds, this bakes secret API keys directly into static JavaScript bundles delivered to browsers.
**Learning:** `define` in Vite performs compile-time string replacement. Exposing server-side secrets or API keys via `define` in frontend projects exposes them publicly in production assets.
**Prevention:** Never use Vite `define` to expose secret server API keys to client-side bundles. Only use `import.meta.env` with `VITE_` prefixed public environment variables when client exposure is intentional.
