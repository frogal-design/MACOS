## 2025-05-15 - Accidental API Key Exposure via Vite Config

**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` property in `vite.config.ts`, even though it wasn't used in the frontend.

**Learning:** Vite's `define` property performs a global search-and-replace during build time. Even if an environment variable isn't explicitly used in the source code, defining it makes it available to the client and potentially exposes it in build artifacts if any libraries or internal scripts reference `process.env`.

**Prevention:** Never use `define` to inject sensitive environment variables into the client bundle. Only expose non-sensitive configuration values. If an environment variable is only needed for server-side operations or build-time logic, do not include it in the `define` block. Always use `VITE_` prefix for variables intended for the frontend, and keep others strictly server-side.
