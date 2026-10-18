## 2026-06-25 - Recurring GEMINI_API_KEY Exposure in Vite Config
**Vulnerability:** The GEMINI_API_KEY was being injected into the client-side bundle via Vite's `define` property in `vite.config.ts`.
**Learning:** Even if the key is not explicitly used in the frontend code, Vite's `define` performs a global search-and-replace, making the value available in the bundled assets. This is a common regression when developers try to make environment variables available to the build process.
**Prevention:** Avoid using `define` for sensitive environment variables. Remove `loadEnv` and the `mode` parameter from `vite.config.ts` if they are only used for injecting secrets. Use a backend proxy for all API calls requiring secrets.
