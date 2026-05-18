## 2025-05-15 - API Key Exposure in Client Bundle
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` property in `vite.config.ts`. This would expose the secret API key to anyone inspecting the application's JavaScript in the browser.
**Learning:** Using `loadEnv` and `define` in `vite.config.ts` can accidentally bake environment variables into the frontend build if not carefully managed.
**Prevention:** Avoid using the `define` property for sensitive environment variables. Use server-side proxies or runtime injection for secrets that must remain confidential.
