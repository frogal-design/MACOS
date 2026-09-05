## 2026-03-05 - Global Define Key Exposure in Client Bundles

**Vulnerability:** A `define` block in `vite.config.ts` was setting `process.env.GEMINI_API_KEY` to `JSON.stringify(env.GEMINI_API_KEY)`, causing secret environment variables to be inlined into public client-side JavaScript bundles during Vite builds.
**Learning:** Vite's `define` option replaces exact string matches in source code with literal expressions. Defining server-side API keys in `define` bakes them into static asset bundles built for browsers.
**Prevention:** Never include sensitive API keys or secret environment variables in Vite's `define` configuration. Keep client-side environment variables prefixed with `VITE_` and never pass backend keys to frontend builds.
