## 2026-08-31 - Secret API Key Exposure via Vite Client Define Block

**Vulnerability:** `vite.config.ts` configured a global `define` block for `process.env.GEMINI_API_KEY` loaded via `loadEnv`, causing secret environment variables to be baked directly into public client-side JavaScript bundles during Vite builds.

**Learning:** Vite's `define` option performs static string replacement at build time. Exposing backend secret keys in `define` exposes sensitive credentials to end-user browsers and web scrapers.

**Prevention:** Never include sensitive backend API keys in client-side Vite `define` config. If public client environment variables are required, use `VITE_` prefixed variables via `import.meta.env` and restrict them to non-secret identifiers.
