## 2026-03-30 - Client-Side Environment Variable Exposure Prevention

**Vulnerability:** In `vite.config.ts`, the `define` configuration was set to statically replace `process.env.GEMINI_API_KEY` with `JSON.stringify(env.GEMINI_API_KEY)`. When built, Vite statically injects any present secret API keys directly into public client JS assets (`dist/assets/*.js`), exposing credentials to end users.
**Learning:** Vite's `define` option performs compile-time string replacement. Defining backend secret keys in `vite.config.ts` bakes secret environment variables into client bundles.
**Prevention:** Avoid defining secret API keys in `vite.config.ts` `define` block for client-side applications. Keep secret credentials strictly server-side and use standard Vite `import.meta.env.VITE_*` conventions only for public client-safe variables.
