## 2026-09-15 - Client-Side Environment Variable Define Block Credential Risk

**Vulnerability:**
`vite.config.ts` configured Vite's `define` property to inject `process.env.GEMINI_API_KEY` into client-side code bundles using `JSON.stringify(loadEnv(...).GEMINI_API_KEY)`.

**Learning:**
Using Vite's `define` block to map server-side environment variables into client global replacements causes sensitive secrets (such as API keys) to be compiled directly into production JavaScript assets (`dist/assets/*.js`). Anyone downloading or inspecting client-side assets can extract those credentials.

**Prevention:**
Never inject server-side secrets or API keys into client bundles via `define` in Vite or Webpack configurations. Client-side applications should only use public `VITE_` prefixed environment variables or perform sensitive API operations via a backend proxy/server.
