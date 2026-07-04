# Sentinel Security Journal

## 2026-06-25 - [Secret Exposure in Vite Config]
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` property in `vite.config.ts`.
**Learning:** Using `define` for environment variables perform a global search-and-replace, effectively hardcoding the value into the production JS assets, even if the variable is not explicitly referenced in the source code.
**Prevention:** Avoid using `define` for sensitive keys. Use a backend proxy or server-side environment variables if the key must be kept secret. In this case, the dependency using the key was also unused and removed.

## 2026-06-25 - [Dependency Hardening]
**Vulnerability:** Multiple high-severity vulnerabilities in `react-router-dom` (DoS/CSRF) and `vite` (File Read/NTLM disclosure).
**Learning:** Regular auditing is necessary as even modern frameworks like React Router 7 can have critical vulnerabilities discovered shortly after release.
**Prevention:** Keep core dependencies like `vite` and `react-router-dom` updated to the latest patched versions.
