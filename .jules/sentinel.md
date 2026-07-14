# Sentinel Journal - MAKERERE COLLEGE SCHOOL

## 2026-05-30 - Remediate GEMINI_API_KEY Exposure Risk
**Vulnerability:** The `vite.config.ts` was using the `define` property to inject `process.env.GEMINI_API_KEY` into the client-side bundle. This would result in the API key being hardcoded into the production JavaScript artifacts.
**Learning:** Vite's `define` performs a global search-and-replace during build time. Variables defined here are exposed to the client even if they are not explicitly referenced in the source code if they are part of a bundled module or if the global replacement triggers. In this case, the key was not even used in `src/`, making the exposure entirely unnecessary.
**Prevention:** Never use `define` to inject sensitive environment variables into the client bundle. Use server-side proxying or Vite's `VITE_` prefixing convention for public variables only, and strictly audit any environment variables being passed to the frontend.
