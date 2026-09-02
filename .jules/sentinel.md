## 2026-04-12 - Client-Side Define Credential Exposure

**Vulnerability:**
`vite.config.ts` configured `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }`, which bakes secret API keys directly into public client-side JavaScript bundles during Vite build execution.

**Learning:**
Vite's `define` option performs textual replacement across client source files during bundling. Passing backend API secrets into `define` exposes sensitive credentials to any user or attacker inspecting the compiled JavaScript assets in the browser.

**Prevention:**
Never use Vite's `define` option to inject backend secrets or API keys into frontend client bundles. Frontend code requiring client-accessible environment variables should strictly use `VITE_` prefixed variables via `import.meta.env`, and sensitive secret API keys must remain strictly on server/backend environments or proxy endpoints.
