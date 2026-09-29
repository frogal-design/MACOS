## 2026-03-31 - Client-Side Define Credential Exposure

**Vulnerability:** Using Vite's `define` option to replace `process.env.GEMINI_API_KEY` with `env.GEMINI_API_KEY` causes environment variable secrets to be directly inlined as plaintext literals in client-side production JavaScript bundles during `vite build`.

**Learning:** Vite's `define` performs static string replacement at build time. When configured with sensitive server-side environment variables, any user accessing the compiled client JS bundle can extract secret API keys or credentials from the browser.

**Prevention:** Never include sensitive backend environment variables in Vite's `define` or `vite.config.ts` configuration. Client-side applications should only expose non-sensitive public variables (e.g. `VITE_` prefixed variables) or route authenticated API calls through a secure backend proxy server.
