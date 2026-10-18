## 2025-05-15 - Exposure of sensitive environment variables via Vite config
**Vulnerability:** The `vite.config.ts` was using `define` to inject `GEMINI_API_KEY` into the client-side bundle and `loadEnv` with an empty prefix to load all environment variables.
**Learning:** Using Vite's `define` to expose environment variables without the `VITE_` prefix (or explicitly exposing them) makes them available in the production JS bundle, which is a major security risk for sensitive API keys.
**Prevention:** Never use `define` to inject sensitive secrets into the client. Only use the `VITE_` prefix for variables intended for public consumption, and handle sensitive operations on a secure backend.
