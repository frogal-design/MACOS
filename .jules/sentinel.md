## 2025-05-14 - Exposed Gemini API Key in Vite Config
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` property, even though it was not being used in the source code.
**Learning:** Vite's `define` property performs a global search-and-replace at build time. If you define a variable there, it can be bundled into the client-side code even if not explicitly used, or it might be exposed if any third-party library or even a mistake in code references it.
**Prevention:** Never use `define` to inject sensitive secrets into a frontend bundle. Secrets should stay on the server-side. If a frontend needs to interact with an AI model, it should do so through a secure backend proxy.
