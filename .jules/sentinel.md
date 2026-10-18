## 2025-05-15 - [HIGH] Fix API key exposure via Vite config
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via the `define` property in `vite.config.ts`.
**Learning:** This occurred because the configuration was explicitly stringifying and defining a global `process.env.GEMINI_API_KEY` for the frontend.
**Prevention:** Avoid using `define` for sensitive environment variables. Always handle sensitive API calls on the server-side and use documentation to warn against exposing secrets.
