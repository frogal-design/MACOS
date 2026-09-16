## 2026-09-16 - Client-Side Environment Variable Global Define Secret Exposure

**Vulnerability:** The `vite.config.ts` configuration contained a global `define` block mapping `process.env.GEMINI_API_KEY` to `JSON.stringify(env.GEMINI_API_KEY)`. If an API key or secret was provided in the build environment, Vite would replace all occurrences or bake the value into compiled client-side JavaScript bundles, exposing sensitive credentials publicly.
**Learning:** Using `define` in Vite to expose backend or API keys forces the build tool to inline literal values into client artifacts. In single-page frontend applications, client-side JavaScript is publicly accessible in browser inspection tools.
**Prevention:** Never use Vite `define` or `import.meta.env.VITE_*` for sensitive secret API keys. API calls requiring confidential keys must be routed through a backend proxy or serverless function.
