## 2026-07-16 - Client-Side API Key Exposure via Vite Define

**Vulnerability:**
`vite.config.ts` used `loadEnv` and defined `process.env.GEMINI_API_KEY` globally in `define`, causing secret environment variables to be compiled directly into client-side production JavaScript bundles.

**Learning:**
Configuring global replacement of secret environment variables in Vite's `define` block bakes those secrets into client JS bundles during `vite build`. In client-side Vite apps, server secrets should never be injected via global `define` blocks.

**Prevention:**
Remove secret environment variables from global `define` configs. For client-accessible variables, use standard Vite `import.meta.env.VITE_*` conventions and keep backend API keys isolated on server environments.
