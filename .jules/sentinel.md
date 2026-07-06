## 2026-06-25 - Prevented GEMINI_API_KEY exposure in client bundle
**Vulnerability:** The `vite.config.ts` was using the `define` property to inject `process.env.GEMINI_API_KEY` into the client-side bundle.
**Learning:** Vite's `define` property performs a global search-and-replace at build time. Even if the variable is not explicitly used in the source code, it might still be bundled or at least create a risk of accidental exposure if referenced later.
**Prevention:** Avoid using `define` for sensitive environment variables in frontend-only applications. Use server-side proxies or edge functions if API keys are required for external services.

## 2026-06-25 - Dependency Hardening
**Vulnerability:** Multiple high-severity vulnerabilities were present in `react-router-dom` (DoS/CSRF) and `vite` (File Read/Disclosure), alongside unused packages like `express` and `@google/genai`.
**Learning:** Standard React boilerplates or evolving projects often accumulate unused "ghost" dependencies that increase the attack surface.
**Prevention:** Regularly audit `package.json` for unused dependencies and keep core framework dependencies (`vite`, `react-router`) updated to their latest secure versions.
