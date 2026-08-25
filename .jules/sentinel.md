## 2026-08-25 - Prevent Client-Side Exposure of Secret API Keys in Vite Config
**Vulnerability:** `vite.config.ts` defined a client-side global replacement `process.env.GEMINI_API_KEY` using `loadEnv`, causing secret API keys to be statically inlined and baked into public frontend JS bundles during Vite builds.
**Learning:** Client-side Vite applications expose anything defined in `define` or prefixed with `VITE_` directly to the browser. Defining backend secrets in `define` bakes sensitive credentials into distributed production build artifacts.
**Prevention:** Remove global `define` bindings for secret environment variables in Vite configs and ensure sensitive credentials remain strictly server-side or are accessed via secure backend proxy endpoints.
