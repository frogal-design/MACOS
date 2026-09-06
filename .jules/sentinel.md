## 2026-03-30 - Client-side Define Block Credential Exposure
**Vulnerability:** Global `define` block in `vite.config.ts` hardcoding/baking `process.env.GEMINI_API_KEY` into client bundle outputs.
**Learning:** Using `define: { 'process.env.KEY': ... }` in Vite embeds backend/server secrets directly into compiled public JavaScript assets during build, exposing credentials to any website visitor.
**Prevention:** Avoid defining secret environment variables in client build tool configs. Store secrets exclusively on backend servers or serverless functions, and interact with external APIs via secure backend proxies.
