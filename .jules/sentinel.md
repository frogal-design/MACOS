## 2025-05-15 - Prevented exposure of GEMINI_API_KEY in client bundle
**Vulnerability:** The `vite.config.ts` was using the `define` property to inject the `GEMINI_API_KEY` into the client-side bundle via `process.env.GEMINI_API_KEY`.
**Learning:** Vite's `define` property performs a global search-and-replace during build time. Even if the variable is not used in the source code, it can be bundled into the production artifacts if the replacement string is found.
**Prevention:** Avoid using the `define` property for sensitive environment variables. Sensitive keys should remain server-side and should only be accessed through secure backend endpoints or handled by the platform (like AI Studio) without being bundled into the client code.
