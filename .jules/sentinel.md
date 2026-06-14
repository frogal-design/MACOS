## 2026-06-07 - Secret leakage via build-time injection
**Vulnerability:** Build-time injection of sensitive environment variables into the client bundle.
**Learning:** Vite's `define` property performs a global search-and-replace during build time. Defining sensitive variables like `GEMINI_API_KEY` exposes them to the client bundle even if they are not explicitly referenced in the source code, as long as the placeholder exists.
**Prevention:** Avoid using `define` for sensitive variables. Secrets should only be used on the server side or accessed via secure environment variable patterns that are not bundled into the client.
