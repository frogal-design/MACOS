## 2026-05-18 - Client-Side Define Block Credential Exposure

**Vulnerability:**
Configuring Vite's `define` option in `vite.config.ts` to substitute `process.env.GEMINI_API_KEY` with `env.GEMINI_API_KEY` causes build-time secret environment variables to be string-substituted directly into client-side production JavaScript bundles.

**Learning:**
Vite's `define` option performs literal string replacement across bundled client code. Any sensitive API key or token passed into `define` will be baked into static client assets and publicly exposed to any visitor or inspector of the web app.

**Prevention:**
Never include secret API keys or server credentials in Vite's `define` config. Use client-safe `VITE_` prefixed environment variables (`import.meta.env.VITE_*`) only for non-sensitive public values, and keep sensitive operations on backend endpoints.
