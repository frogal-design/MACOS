## 2026-04-07 - Client-Side Define Block Credential Exposure
**Vulnerability:** `vite.config.ts` used Vite's `define` configuration block to define `'process.env.GEMINI_API_KEY'` via `JSON.stringify(env.GEMINI_API_KEY)`.
**Learning:** Using `define` for sensitive API keys in Vite builds causes Vite to perform a string literal substitution in compiled JS assets, baking sensitive secrets directly into public production JavaScript bundles (`dist/assets/index-*.js`).
**Prevention:** Never expose secret environment variables or API keys via `define` in client build configurations. Sensitive keys must remain strictly on backend environments or be proxied via secure server endpoints.
