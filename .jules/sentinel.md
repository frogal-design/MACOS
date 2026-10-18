## 2026-06-18 - Build-time Secret Injection via Vite's `define`
**Vulnerability:** Use of `define` property in `vite.config.ts` to inject `process.env.GEMINI_API_KEY`.
**Learning:** Vite's `define` property performs a global search-and-replace during build time, meaning sensitive placeholders will be replaced in the client bundle even if the variable is not explicitly referenced in the source code.
**Prevention:** Avoid using `define` for sensitive information. Use Vite's built-in `VITE_` prefix for environment variables if they MUST be exposed to the client, or keep secrets on the server-side.
