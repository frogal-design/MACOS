## 2026-10-24 - Unintentional Client-Side Bundle Secret Exposure via Vite Define

**Vulnerability:**
`vite.config.ts` was configured with `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }`. When building the frontend web app with Vite, this replaces `process.env.GEMINI_API_KEY` globally in the source code with the literal string value of `GEMINI_API_KEY` present in `.env` / environment variables at build time, exposing sensitive API credentials in plain text inside public client JS production bundles (`dist/assets/*.js`).

**Learning:**
In client-side single-page applications built with Vite, any variable mapped using Vite's `define` property or prefixed with `VITE_` gets embedded directly into the frontend production JavaScript bundle. Secret API keys meant for backend environments or server side execution should never be globally replaced via `define` in Vite configurations for pure frontend applications.

**Prevention:**
Avoid defining secret server-side environment variables in client-side Vite configurations (`vite.config.ts`). Keep secret API keys strictly on server-side or proxy endpoints, or only expose non-sensitive public configuration variables to the client bundle.
