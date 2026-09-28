## 2026-04-10 - Client-Side API Key Exposure in Vite Global Define Block

**Vulnerability:**
The `vite.config.ts` configuration defined `'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)`. When Vite built production assets, any `process.env.GEMINI_API_KEY` reference or string literal substitute was replaced and inlined directly into client-side public JavaScript bundles.

**Learning:**
Vite's `define` option performs string replacement at build time. Including secret environment variables inside `define` bakes sensitive credentials directly into static client assets accessible to anyone inspecting browser network/source files.

**Prevention:**
Never pass secret API keys or server credentials to Vite's `define` option. Only expose public client configuration variables prefixed with `VITE_` or handle API calls through backend proxy endpoints.
