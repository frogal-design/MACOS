## 2026-04-18 - Vite Define Block Secret Exposure Vulnerability

**Vulnerability:** The Vite configuration contained a `define` mapping (`'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)`), which injected sensitive server environment variables directly into client-side JS bundles at build time.

**Learning:** Vite's `define` option replaces exact token matches globally during bundling. When used with sensitive environment variables like API keys or credentials, any reference in client-accessible code gets replaced with literal strings, exposing secrets in public static assets.

**Prevention:** Never use Vite `define` to expose private environment variables. Keep server credentials strictly on the server or proxy backend calls through dedicated API endpoints.
