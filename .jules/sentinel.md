## 2026-06-25 - [Secret Exposure via Vite Define]
**Vulnerability:** Global environment variable exposure via Vite's `define` configuration.
**Learning:** Vite's `define` property can be used to inject environment variables globally into the client-side code. If sensitive variables like `GEMINI_API_KEY` are defined here but not actually used by the application, they still end up in the production bundle, exposing them to anyone viewing the site.
**Prevention:** Only use Vite's `define` or `import.meta.env` for variables that are absolutely necessary for the client-side application. Remove any unused or sensitive configuration from `vite.config.ts`.
