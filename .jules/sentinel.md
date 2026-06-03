## 2026-05-22 - API Key Exposure Risk in Vite Config
**Vulnerability:** Accidental exposure of `GEMINI_API_KEY` to the client-side bundle via Vite's `define` property.
**Learning:** Even if a secret is not explicitly used in the frontend code, Vite's `define` performs a global search-and-replace during build time, which can bundle the key into the production assets if the replacement pattern is found or if the toolchain processes it.
**Prevention:** Remove build-time injection of sensitive server-side keys into the client bundle and use explicit documentation to warn against this pattern.
