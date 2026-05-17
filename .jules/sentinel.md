## 2025-05-15 - [HIGH] Accidental exposure of environment variables via Vite `define`
**Vulnerability:** Sensitive environment variables (like `GEMINI_API_KEY`) were being injected into the client-side bundle via the `define` property in `vite.config.ts`.
**Learning:** Using `loadEnv(mode, '.', '')` and then mapping secrets to `process.env` inside `define` makes them publicly accessible in the browser's JavaScript.
**Prevention:** Avoid using `define` for sensitive keys. Only expose variables prefixed with `VITE_` if they are intended for the client, and keep the `vite.config.ts` as minimal as possible. Use explicit security warnings in `.env.example` and documentation.
