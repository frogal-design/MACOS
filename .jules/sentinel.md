## 2026-09-18 - Client-Side Secret Define Block Exposure

**Vulnerability:** Configured `define` block in `vite.config.ts` replacing `process.env.GEMINI_API_KEY` with `env.GEMINI_API_KEY`.
**Learning:** Using Vite's `define` or `loadEnv` to inject sensitive server-side API keys directly into Vite configuration statically bakes secret keys into client-side JS distribution bundles during build time.
**Prevention:** Avoid defining sensitive API keys in client build configurations. Use backend proxy services or edge functions for API calls requiring sensitive keys, and never inject secrets into frontend client bundles.
