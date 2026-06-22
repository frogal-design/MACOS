## 2026-06-18 - [Build-time Secret Injection]
**Vulnerability:** The 'GEMINI_API_KEY' was being injected into the client-side bundle via Vite's 'define' configuration.
**Learning:** Vite's 'define' property performs a global search-and-replace during build time, meaning sensitive placeholders (like 'process.env.GEMINI_API_KEY') will be replaced in the client bundle even if the variable is not explicitly referenced in the source code.
**Prevention:** Avoid using Vite's 'define' property for sensitive environment variables. Instead, use 'VITE_' prefixed variables which are only exposed to the client if explicitly accessed via 'import.meta.env.VITE_...'.
