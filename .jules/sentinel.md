## 2026-03-31 - Prevent Client-Side Define Block Secret Exposure in Vite Build

**Vulnerability:** Unintended client-side replacement of `process.env.GEMINI_API_KEY` via `define` block in `vite.config.ts`, which bakes environment secret keys directly into static frontend JavaScript bundles exposed in the browser.

**Learning:** Using `loadEnv` combined with Vite's global `define` block to map secret environment variables (e.g., `GEMINI_API_KEY`) into `process.env` in client bundles causes secrets to be hardcoded during `vite build`, making them public to any client loading the app.

**Prevention:** Never use Vite `define` blocks to inject sensitive API keys or credentials into browser applications. Client-exposed variables must use `import.meta.env.VITE_*` explicitly when intended for client exposure, while secret API keys should remain strictly backend/server-side.
