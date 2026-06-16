## 2026-06-07 - Insecure Build-time Secret Injection
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` configuration in `vite.config.ts`.
**Learning:** Vite's `define` performs a global search-and-replace during build time. Even if the variable is not explicitly referenced in the source code, any sensitive placeholders like `process.env.GEMINI_API_KEY` will be replaced and bundled into the client-side assets, making them publicly accessible.
**Prevention:** Avoid using `define` for sensitive environment variables. Only use `VITE_` prefixed variables that are intended for client-side use, or better yet, proxy all sensitive API calls through a secure backend to keep secrets entirely on the server.
