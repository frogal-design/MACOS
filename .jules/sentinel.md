## 2026-06-25 - [Frontend Secret Exposure and Unused Dependency Hardening]
**Vulnerability:** Hardcoded environment variables like `GEMINI_API_KEY` were being injected into the client bundle via Vite's `define` configuration.
**Learning:** In frontend-only static applications, utilizing global `define` or `process.env` replacements in bundlers exposes sensitive server-side variables to the client-side build artifact where they can be trivially extracted.
**Prevention:** Avoid injecting server-only or unused credentials into frontend bundlers; use proper client-side environment variable prefixing (e.g., `VITE_`) only for variables intended to be public, and keep configuration clean of unused environment loaders.
