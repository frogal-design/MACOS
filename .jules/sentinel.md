## 2026-06-07 - [Secret Exposure via Vite Define]
**Vulnerability:** Build-time injection of 'GEMINI_API_KEY' via Vite's 'define' property.
**Learning:** Vite's 'define' property performs a global search-and-replace during build time. This means sensitive placeholders will be replaced in the client bundle even if the variable is not explicitly referenced in the source code, potentially exposing secrets in the production assets.
**Prevention:** Avoid using 'define' for sensitive environment variables in frontend builds. Instead, use 'import.meta.env' with the 'VITE_' prefix for variables intended for the client, and keep backend-only secrets entirely out of the build configuration.
