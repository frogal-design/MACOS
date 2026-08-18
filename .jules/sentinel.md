## 2026-08-15 - Client-Side Environment Variable Exposure & Unused Dependency Pruning

**Vulnerability:**
`vite.config.ts` was injecting `process.env.GEMINI_API_KEY` into client bundle global definitions via Vite's `define` config. Additionally, `package.json` included unused backend and AI dependencies (`@google/genai`, `dotenv`, `express`, `@types/express`) alongside vulnerable versions of `react-router-dom` and `vite`.

**Learning:**
Define-block injections in Vite export secrets directly into compiled JavaScript assets for any client to inspect. In frontend-only Vite React apps, unused server dependencies like `express` or `dotenv` expand the supply chain attack surface needlessly.

**Prevention:**
Avoid global `define` blocks for sensitive API keys in client-side Vite configurations. Periodically audit and prune unused dependencies while maintaining dependencies at updated, security-patched versions (`react-router-dom@^7.18.2`, `vite@^6.4.3`).
