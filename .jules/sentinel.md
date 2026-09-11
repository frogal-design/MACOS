## 2026-03-30 - Client-Side Environment Variable Credential Exposure

**Vulnerability:** Configured Vite's `define` option in `vite.config.ts` to replace `process.env.GEMINI_API_KEY` with the raw string value loaded from `.env`. This bakes sensitive environment variables into public client-side JavaScript build artifacts.

**Learning:** Developers often attempt to bridge Node.js style `process.env` references in Vite apps by defining global replacements in `vite.config.ts`. However, using `loadEnv()` inside `define` causes Vite to inline sensitive secrets into production JS bundles accessible to any user or client.

**Prevention:** Never use global `define` replacements in Vite for sensitive secrets or API keys. Keep backend API calls server-side or proxy them through secure endpoints rather than injecting private keys into client-side build configs.
