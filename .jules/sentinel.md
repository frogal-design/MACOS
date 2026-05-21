## 2025-05-15 - [CRITICAL] Prevent accidental exposure of GEMINI_API_KEY
**Vulnerability:** The `vite.config.ts` was explicitly injecting `GEMINI_API_KEY` into the client-side bundle using Vite's `define` property.
**Learning:** Even if the code doesn't currently use a secret in the frontend, defining it in the build configuration makes it accessible via `process.env` or globally, leading to potential exposure if any third-party script or developer accidentally references it.
**Prevention:** Never use `define` in Vite to inject sensitive environment variables into the client bundle. Use server-side proxies or edge functions for sensitive API calls.
