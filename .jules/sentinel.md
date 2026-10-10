## 2026-10-10 - Client-Side API Key Exposure via Vite Define Block
**Vulnerability:** `vite.config.ts` used `define` to globally replace `process.env.GEMINI_API_KEY` with the environment variable value, baking sensitive API credentials into compiled client-side JavaScript bundles.
**Learning:** Vite's `define` option performs compile-time string substitution. Any environment variable injected here will be exposed in plain text in public production assets.
**Prevention:** Never map secret environment variables into Vite's `define` configuration. Keep secret keys server-side or behind proxy routes, and only expose client-intended public variables with the `VITE_` prefix using `import.meta.env`.
