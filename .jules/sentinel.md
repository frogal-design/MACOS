## 2026-03-30 - Client-Side Secret Exposure via Vite Define

**Vulnerability:**
The `vite.config.ts` configuration used `loadEnv` with an empty string prefix filter (`''`) and declared a global `define` mapping for `'process.env.GEMINI_API_KEY'`. In Vite, `define` replaces tokens in source code during compile time, causing secret environment variables to be baked directly into public static frontend JS bundles.

**Learning:**
Developers sometimes use global `define` in Vite as a quick workaround to support legacy Node-style `process.env` references on the frontend. However, exposing non-`VITE_` prefixed environment variables via `define` introduces severe secret leakage risks when building distribution artifacts.

**Prevention:**
Never expose sensitive server-side API keys or secret environment variables to frontend client bundles via `define` in Vite config. Any client-facing environment variables must explicitly use the `VITE_` prefix (`import.meta.env.VITE_*`) and contain non-sensitive credentials only.
