## 2026-05-20 - Sensitive API Key Exposure Risk in Vite Config
**Vulnerability:** Accidental exposure of `GEMINI_API_KEY` to the client-side bundle via Vite's `define` property.
**Learning:** Vite's `define` property performs a global search-and-replace during build time, which can bundle sensitive environment variables into the frontend even if not explicitly prefixed with `VITE_`.
**Prevention:** Avoid using `define` for sensitive keys. Keep sensitive logic server-side and use explicit 🛡️ security warnings in `.env.example` and `README.md` to educate developers.
