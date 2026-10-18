## 2025-05-27 - Secret Exposure via Vite Config

**Vulnerability:** The `GEMINI_API_KEY` was explicitly injected into the client-side bundle using Vite's `define` property in `vite.config.ts`.

**Learning:** Vite's `define` property performs a global search-and-replace at build time. Defining sensitive environment variables here makes them accessible in the final JavaScript bundle, even if they are not explicitly referenced in the source code, as they become part of the global scope or replaced literals.

**Prevention:** Never use Vite's `define` property to inject sensitive secrets. Sensitive variables should remain server-side. If a variable must be accessed in the frontend, use the `VITE_` prefix (for variables that are safe to expose) and be aware that they will be visible in the source code. For truly sensitive keys, use a backend proxy or server-side rendering.
