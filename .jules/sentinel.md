## 2026-03-31 - Client-Side Environment Variable Global Define Secret Leak

**Vulnerability:**
`vite.config.ts` configured Vite's `define` property (`'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)`) to inject `GEMINI_API_KEY` globally into client-side JS bundles during production build.

**Learning:**
Vite's global `define` replaces expressions at build time across the entire source code. When secret environment variables (such as API keys) are defined via `define` in a frontend Vite config, any secret key present in the build environment is hardcoded into the compiled public assets distributed to clients.

**Prevention:**
Never use Vite's global `define` block to expose backend or secret environment variables in client-side builds. Frontend client variables should be explicitly prefixed with `VITE_` and accessed via `import.meta.env.VITE_*`, while sensitive keys should only be used in server/backend environments or proxy endpoints.
