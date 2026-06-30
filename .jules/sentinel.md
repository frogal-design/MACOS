## 2026-06-25 - Build-time Secret Exposure in Vite
**Vulnerability:** Use of Vite's `define` property to inject environment variables (like `GEMINI_API_KEY`) into the client bundle.
**Learning:** Vite's `define` performs a global search-and-replace during build time. Even if a variable isn't explicitly used in the source code, any placeholder (like `process.env.GEMINI_API_KEY`) will be replaced with its value, potentially leaking secrets if the bundle is analyzed.
**Prevention:** Avoid using `define` for sensitive keys. Use Vite's `VITE_` prefix for frontend-safe variables, and keep secrets strictly on the server-side. Regularly audit `package.json` for unused dependencies to reduce attack surface.
