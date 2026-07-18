# Sentinel Security Journal

## 2026-07-18 - Client-Side Secret Leakage via Vite Define Option
**Vulnerability:** The configuration in `vite.config.ts` used Vite's `define` property to inject environment variables (e.g., `process.env.GEMINI_API_KEY`) globally. Even if the variable is unused in source code, Vite's global string replacement mechanism can compile and embed secret values/API keys from the build environment into the production client-side bundle.

**Learning:** Vite's `define` option performs straightforward global string replacements at build time. Using it to process environment variables can lead to unintended exposure of sensitive configuration details, exposing secrets to users loading the application in their browsers. In this codebase, the `@google/genai` package and Gemini integrations were unused artifacts, but the presence of the `define` mapping in the config still posed a leakage risk.

**Prevention:** Avoid globally injecting sensitive environment variables using the `define` option in frontend build tools unless strictly necessary. Instead, use standard prefixing (e.g., `VITE_` prefixed variables with Vite's `import.meta.env`) which requires explicit references in source code to be included in the build output, and remove unused build configuration defines.
