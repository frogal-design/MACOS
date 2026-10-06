## 2026-07-14 - Client-Side Environment Variable Exposure in Vite Define Block

**Vulnerability:** The Vite configuration exposed `process.env.GEMINI_API_KEY` globally via `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }`. This causes environment secrets to be statically replaced and embedded into client-side production JS bundles during Vite build, making them publicly readable.

**Learning:** Global `define` injections in Vite statically inject values into client-side JS bundles. For frontend applications, secrets should never be defined in client-side bundler replacements unless explicitly intended to be public (`VITE_` prefixed public variables).

**Prevention:** Avoid defining server/secret environment variables inside Vite `define` config. Use backend proxies or standard runtime environment mechanisms for sensitive operations.
