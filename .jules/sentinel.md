## 2026-05-18 - Client-side Define Block Credential Exposure

**Vulnerability:** `vite.config.ts` was configured with `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }`, which bakes secret environment variables directly into client-side JS build bundles.
**Learning:** In Vite applications, global `define` blocks compile backend environment variables into static literal values in JavaScript artifacts, exposing secrets to anyone inspecting the frontend bundle.
**Prevention:** Never define backend secrets in Vite's global `define` block or `import.meta.env` for client-only applications. Route API requests requiring sensitive keys through a secure backend proxy or serverless endpoint.
