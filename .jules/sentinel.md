## 2026-05-20 - Prevented build-time leakage of GEMINI_API_KEY

**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` property. This made the secret accessible in the browser's source code.

**Learning:** Vite's `define` property performs a global search-and-replace during build time. Even if the variable is not explicitly used in the source code, defining it with a sensitive value exposes it if it's accidentally referenced or if a developer later adds a reference thinking it's safe. In this case, it was being stringified and mapped to `process.env.GEMINI_API_KEY`.

**Prevention:** Do not use `define` for sensitive environment variables in frontend builds. Use backend proxies or server-side functions for API calls that require secrets. Add clear documentation and 🛡️ security warnings in `.env.example` and `README.md` to prevent future developers from re-introducing the exposure.
