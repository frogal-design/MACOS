## 2025-05-14 - Secret Exposure in Vite Config
**Vulnerability:** Sensitive API keys (GEMINI_API_KEY) were being explicitly bundled into the client-side JavaScript through Vite's `define` configuration.
**Learning:** Vite's `define` property performs a static replacement in the source code during build time. Using it with `loadEnv` to inject secrets makes them publicly accessible in the browser's source tab, even if the `.env` file itself is not committed.
**Prevention:** Do not use `define` or `import.meta.env.VITE_*` for sensitive secrets that must remain server-side. Remove unnecessary `loadEnv` calls from `vite.config.ts` to reduce the risk of accidental exposure. Use 🛡️ security warnings in documentation to flag sensitive variables.
