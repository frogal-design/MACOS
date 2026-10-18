## 2025-05-15 - API Key Leak via Vite Define
**Vulnerability:** Sensitive `GEMINI_API_KEY` was exposed to the frontend bundle via Vite's `define` configuration.
**Learning:** Vite's `define` performs static string replacement at build time. Using it to inject environment variables into the client bundle makes them visible in plain text in the final JavaScript assets.
**Prevention:** Never use `define` for sensitive secrets. Rely on backend proxies or the standard `VITE_` prefix only for non-sensitive public configuration. Use a server-side component (like Express) to handle sensitive API interactions.
