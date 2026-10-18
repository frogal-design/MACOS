## 2025-05-22 - Client-Side API Key Exposure Risk
**Vulnerability:** Use of Vite's `define` property to inject sensitive environment variables (e.g., `GEMINI_API_KEY`) into the client-side bundle.
**Learning:** Even if the code doesn't explicitly reference `process.env.GEMINI_API_KEY`, using `define` in `vite.config.ts` replaces occurrences in the source or injects them into the global scope, making them accessible via the browser console or bundle inspection.
**Prevention:** Remove `define` entries for sensitive secrets and ensure they are only used in server-side contexts or handled via secure backends. Use explicit security warnings (🛡️) in documentation to reinforce this pattern.
