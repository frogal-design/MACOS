# Sentinel's Journal - Makerere College School

## 2026-06-25 - Removal of unused Gemini API Key exposure
**Vulnerability:** The `vite.config.ts` was configured to globally define `process.env.GEMINI_API_KEY`, making it available to the client-side bundle even if it was not explicitly used in the source code.
**Learning:** Vite's `define` property can lead to unintentional secret leakage if environment variables are globally mapped without strict usage verification.
**Prevention:** Avoid using `define` for sensitive environment variables unless absolutely necessary, and prefer Vite's built-in `import.meta.env` for client-side environment variables which requires a `VITE_` prefix.
