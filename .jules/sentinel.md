## 2026-06-25 - Secret Leakage via Vite Define
**Vulnerability:** Hardcoded secret injection via Vite's `define` property.
**Learning:** Vite's `define` property performs a global search-and-replace during build time. This means that if a secret is mapped in `define` (e.g., `'process.env.SECRET': JSON.stringify(env.SECRET)`), it will be bundled into the client-side code even if it's never explicitly used in the source.
**Prevention:** Avoid using Vite's `define` for sensitive information. Use standard environment variable patterns (VITE_ prefix) for non-sensitive config, and handle secrets only on the server-side.
