## 2026-06-25 - Hardcoded Secret Exposure in Vite Config
**Vulnerability:** API key exposure via Vite's `define` property.
**Learning:** Vite's `define` property performs a global search-and-replace during build time, causing sensitive environment variables to be bundled into the client-side code even if they are not explicitly referenced in the source.
**Prevention:** Avoid using `define` for sensitive secrets. Keep AI/LLM logic on the backend or use server-side environment variables if the application has a backend. Remove unused dependencies that might tempt insecure frontend implementations.
