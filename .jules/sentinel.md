## 2025-05-15 - Prevent sensitive secret exposure via Vite's `define`
**Vulnerability:** Potential exposure of `GEMINI_API_KEY` to the client-side bundle.
**Learning:** Using Vite's `define` configuration to inject environment variables performs a global search-and-replace during the build process. This results in the secret being embedded directly into the generated JavaScript assets, making it accessible to anyone viewing the website.
**Prevention:** Remove sensitive keys from `vite.config.ts`. Always handle sensitive API calls on a secure backend and use environment variables only for non-sensitive, client-safe configuration on the frontend.
