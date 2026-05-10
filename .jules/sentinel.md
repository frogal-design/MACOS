## 2025-05-22 - [Sensitive API Key Exposure via Vite Define]
**Vulnerability:** Hardcoded or environment-injected sensitive secrets (like GEMINI_API_KEY) in the client-side bundle.
**Learning:** Using Vite's `define` property to inject environment variables makes them part of the public JavaScript bundle, exposing them to anyone who inspects the client-side code.
**Prevention:** Never use `define` for sensitive keys. Use server-side proxies, edge functions, or Vite's `VITE_` prefix (only for public keys) with careful consideration. Sensitive operations should stay on the server.
