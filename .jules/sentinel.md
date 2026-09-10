## 2026-03-31 - Client-Side Define Block Credential Exposure
**Vulnerability:** In `vite.config.ts`, `define` was used to inject `process.env.GEMINI_API_KEY` globally into client-side JS bundles.
**Learning:** Using Vite's `define` block to replace global variables with environment secrets bakes sensitive API keys into production assets accessible to anyone inspecting the bundle.
**Prevention:** Never pass server-side secrets or API keys into Vite's `define` config. Use `import.meta.env.VITE_*` strictly for non-sensitive public variables, and keep sensitive operations server-side.
