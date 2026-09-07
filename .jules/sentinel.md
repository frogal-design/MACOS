## 2026-03-30 - Client-Side Environment Variable Global Define Leakage

**Vulnerability:**
The `vite.config.ts` configuration file previously loaded environment variables using Vite's `loadEnv` and injected `GEMINI_API_KEY` into `define` as `process.env.GEMINI_API_KEY`. When built, Vite statically replaces all occurrences of `process.env.GEMINI_API_KEY` in source code with the literal string value of the environment variable, embedding secret keys directly into public distribution assets (`dist/assets/*.js`).

**Learning:**
In client-side single-page applications (SPAs), defining secrets in build tools like Vite/Webpack/Rollup `define` blocks exposes those secrets to anyone inspecting the built client-side JavaScript bundle. Public frontends cannot safely hold or hide secret API keys.

**Prevention:**
1. Never define secret API keys or server-side environment variables in Vite `define` configuration.
2. In Vite projects, only expose intentional public variables prefixed with `VITE_` using `import.meta.env`.
3. Perform sensitive API operations requiring private keys through secure backend API proxies or serverless functions rather than directly in client-side code.
