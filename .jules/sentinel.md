## 2025-05-14 - Secret Exposure via Vite define
**Vulnerability:** Sensitive environment variables like `GEMINI_API_KEY` were being injected into the client-side bundle using Vite's `define` property in `vite.config.ts`.
**Learning:** Using `define` to expose environment variables hardcodes their values into the production JavaScript bundle. This makes secrets accessible to anyone who inspects the frontend source code.
**Prevention:** Never use the `define` property to inject sensitive keys into the client. Keep secrets on the server-side. For AI integrations, use a backend proxy or serverless functions to interact with APIs like Gemini, ensuring the API key remains secure.
