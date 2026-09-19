## 2026-09-19 - Client-Side Environment Variable Define Block Exposure
**Vulnerability:** Global `define` in `vite.config.ts` replacing `process.env.GEMINI_API_KEY` directly with `loadEnv` values exposed secret API key variables in client-side production JavaScript bundles.
**Learning:** Vite's `define` option performs string substitution across the entire codebase at build time. When sensitive backend or service API keys are injected via `define`, they become plaintext string constants embedded in public web assets.
**Prevention:** Never use global `define` in Vite configurations to inject secret environment variables into frontend builds. Use server-side proxy routes or strict `import.meta.env.VITE_*` prefixes for non-sensitive public configuration variables only.
