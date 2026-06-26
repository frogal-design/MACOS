# Sentinel Security Journal

## 2026-06-18 - Build-time Secret Injection Removal

**Vulnerability:** Build-time secret injection via Vite's `define` property.
**Learning:** Using `define` to inject `process.env` variables into the client bundle is dangerous as it performs a global search-and-replace, potentially bundling secrets into the frontend assets even if they are not explicitly used in the source code.
**Prevention:** Avoid using `define` for sensitive environment variables. Use Vite's built-in `VITE_` prefixing mechanism for variables that are safe to expose, and ensure unused dependencies that might tempt insecure patterns are removed.
