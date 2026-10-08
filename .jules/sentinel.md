## 2026-04-18 - Prevent Secret Leakage via Client-Side Vite Define Blocks

**Vulnerability:** Global `define` configuration in `vite.config.ts` replacement of `process.env.GEMINI_API_KEY` using `loadEnv` stringification exposes server-side secrets directly inside client-side JS production bundles.

**Learning:** Vite replaces defined global constants directly during build string compilation. Exposing secret environment variables inside `define` causes the bundler to embed secret API keys in publicly accessible static web assets.

**Prevention:** Never map sensitive API keys or credentials into Vite `define` config blocks. For frontend applications, secrets should be managed server-side (e.g. backend proxy/BFF endpoints) rather than bundled into client-side JS.
