## 2025-05-15 - Accidental exposure of GEMINI_API_KEY via Vite config
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` property.
**Learning:** Vite's `define` property performs a global search-and-replace during build time. Defining sensitive variables there exposes them to the client even if they are not explicitly referenced in the source code.
**Prevention:** Remove sensitive variables from Vite's `define` property. If they must be used on the client, use the `VITE_` prefix and understand the implications, or better yet, keep them exclusively on the server side.
