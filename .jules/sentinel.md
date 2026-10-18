# Sentinel's Journal

## 2026-03-30 - Client-Side Global Define Block Credential Exposure Risk
**Vulnerability:** Defining global `process.env.GEMINI_API_KEY` in `vite.config.ts` via `loadEnv` risks statically injecting sensitive API keys directly into client-side JavaScript bundles.
**Learning:** Vite's `define` option performs static string replacement during compilation. When secret environment variables are added to `define`, any client-side code or module referencing the variable will have its raw secret value statically baked into public JS assets.
**Prevention:** Never expose server-side secrets in `vite.config.ts`'s `define` block. Rely on Vite's native `import.meta.env.VITE_*` mechanism for public frontend environment variables, and keep secret keys server-side or in proxy layer endpoints.
