## 2026-04-18 - Client-side Define Block Credential Exposure

**Vulnerability:**
`vite.config.ts` used `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }` to inject the server environment variable `GEMINI_API_KEY` globally during Vite bundle compilation.

**Learning:**
Vite's `define` configuration statically replaces matching global variable identifiers at build time, baking sensitive environment values (such as API keys and secrets) directly into public JavaScript bundles where end users or attackers can easily extract them.

**Prevention:**
Never use `define` in `vite.config.ts` to expose secret credentials or non-public environment variables to client-side bundles. Only explicit public variables prefixed with `VITE_` intended for client exposure should be read via `import.meta.env`.
