## 2026-06-25 - Secret Leakage via Vite Define
**Vulnerability:** Hardcoded secrets in client bundle via `define` configuration in `vite.config.ts`.
**Learning:** Using Vite's `define` property for environment variables like `GEMINI_API_KEY` performs a global static text replacement. This hardcodes the secret into the production JavaScript bundle, making it accessible to anyone.
**Prevention:** Avoid using `define` for sensitive keys. Use Vite's built-in `import.meta.env` mechanism with the `VITE_` prefix for variables that *must* be public, and keep sensitive keys on the server-side only. In this project, the key was unused in the frontend, so removal was the best fix.
