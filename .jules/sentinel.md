# Sentinel Security Journal

## 2026-06-18 - Secret Injection Remediation and Dependency Hardening
**Vulnerability:** Build-time secret injection of GEMINI_API_KEY into the client-side bundle via Vite's `define` property.
**Learning:** Vite's `define` property performs a global search-and-replace, meaning any occurrence of the placeholder in the source code (or even if not explicitly used but defined in config) will be replaced with the literal value in the bundled JS, exposing secrets to users.
**Prevention:** Avoid using `define` for sensitive environment variables. Use `VITE_` prefixed variables for intended public consumption and document security boundaries in `.env.example` and `README.md`.
