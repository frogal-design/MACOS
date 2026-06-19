# Sentinel Journal

## 2026-06-18 - Build-time Secret Leakage via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` property. This bakes the secret directly into the production JavaScript assets, making it publicly accessible.
**Learning:** Vite's `define` configuration performs a static string replacement at build time. Using it to expose `process.env` variables (especially those without the `VITE_` prefix) is a common pattern for accidental secret disclosure.
**Prevention:** Never use `define` to inject sensitive keys into the frontend. Use a secure backend proxy for API calls that require secrets, or use Vite's built-in `VITE_` prefix mechanism only for non-sensitive public configuration.
