## 2026-07-14 - Client-Side Environment Variable Define Exposure

**Vulnerability:**
`vite.config.ts` used `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }` to inject environment variables into global scope at build time. This bakes secret API keys directly into public client JavaScript bundles.

**Learning:**
Vite's `define` option replaces matches in source code at compile time. Defining secrets in `vite.config.ts` exposes them to end-users inspectable in frontend build artifacts.

**Prevention:**
Never expose backend secrets via Vite `define`. Client-safe variables must use the `VITE_` prefix and `import.meta.env`, while sensitive API keys must remain strictly on backend services.
