## 2026-04-14 - Prevent Credential Exposure via Client-Side Vite Define

**Vulnerability:**
`vite.config.ts` injected `process.env.GEMINI_API_KEY` into client-side global definitions (`define: { 'process.env.GEMINI_API_KEY': ... }`), exposing sensitive API keys in production JS bundles.

**Learning:**
Configuring global string replacements in Vite for server-side or build-time environment variables bakes secret values directly into client-side asset outputs.

**Prevention:**
Never expose raw secrets or backend API keys in client-side Vite `define` config. Use backend proxies or explicit `VITE_` prefixed public environment variables if non-sensitive.
