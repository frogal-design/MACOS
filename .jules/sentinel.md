## 2026-06-07 - [Secret Exposure in Vite Config]
**Vulnerability:** The `vite.config.ts` was using `define` to inject `GEMINI_API_KEY` into the client-side bundle at build time.
**Learning:** Even if a secret is not explicitly used in the `src/` directory, Vite's `define` property performs a global search-and-replace, potentially exposing the key in the final JavaScript assets if any dependency or unexpected code path references the defined constant.
**Prevention:** Avoid using `define` for sensitive environment variables in frontend applications. Use `import.meta.env` for variables intended for the client, and keep secrets strictly on the server or build-time only without global injection.

## 2026-06-07 - [Vulnerable Dependencies]
**Vulnerability:** Multiple high and moderate severity vulnerabilities (DoS, Memory Disclosure) were present in core dependencies including `react-router-dom`, `express`, `qs`, and `ws`.
**Learning:** Regular security audits are necessary as vulnerabilities are frequently discovered in widely used packages like `react-router`.
**Prevention:** Integrate `npm audit` into the CI/CD pipeline and establish a routine for patching dependencies.
