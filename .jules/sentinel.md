## 2026-03-05 - Insecure Exposure of Sensitive API Keys via Vite `define` Block

**Vulnerability:**
The `vite.config.ts` configuration file contained a `define` block mapping `process.env.GEMINI_API_KEY` to `loadEnv(mode, '.', '').GEMINI_API_KEY`. In Vite applications, `define` perform global string replacement during build time, embedding secret values directly into public JavaScript production bundles.

**Learning:**
Server-side secrets must never be exposed or injected into client-side Vite builds via `define` or `VITE_` prefixed environment variables if the key is intended to remain confidential (e.g. LLM API keys, database credentials, server secrets).

**Prevention:**
Always proxy requests requiring secret API keys through a secure backend/API server, or ensure only public credentials intentionally scoped for client exposure use client-side environment variable mechanisms.
