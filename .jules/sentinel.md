## 2026-06-25 - Vite Global Secret Exposure
**Vulnerability:** Use of Vite's `define` configuration to inject `process.env` variables into the global scope.
**Learning:** This practice hardcodes secrets into the client-side bundle even if the variable is not explicitly imported or used in the source code, as Vite performs a global string replacement during the build process.
**Prevention:** Avoid using `define` for sensitive environment variables. Use a secure backend to handle API calls that require secrets. In this project, removing the unused dependencies and their associated configuration resolved the exposure without breaking functionality.
