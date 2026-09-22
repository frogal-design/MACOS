## 2026-03-30 - Client-Side Environment Variable Define Exposure

**Vulnerability:**
The Vite configuration (`vite.config.ts`) contained a global `define` block that mapped `process.env.GEMINI_API_KEY` to `loadEnv(mode, '.', '').GEMINI_API_KEY`. In client-side Vite builds, `define` replaces matches across the entire source code with stringified values, potentially hardcoding secret API keys into public production JS bundles.

**Learning:**
Client-side SPAs run entirely in user browsers. Defining server-side secrets or API keys in Vite's `define` option risks bundling secret keys directly into public client artifacts whenever `process.env.KEY` is referenced.

**Prevention:**
Avoid defining server-side API keys or secrets in `vite.config.ts` via `define`. Non-sensitive public client environment variables in Vite should use the `VITE_` prefix and be accessed via `import.meta.env.VITE_*`. Any sensitive API requests requiring secret keys should be proxied through a secure backend server or serverless function.
