## 2026-06-12 - [CRITICAL] Secret leakage via Vite `define`
**Vulnerability:** API keys injected via `vite.config.ts` using the `define` property were being bundled into the client-side assets, even if not explicitly referenced in the source code.
**Learning:** Vite's `define` property performs a global search-and-replace during build time. Using it to inject environment variables makes those variables accessible in the browser's global scope and hardcodes them into the generated chunks.
**Prevention:** Never inject sensitive secrets into the client bundle via `define`. Use a backend proxy to interact with sensitive APIs.
