## 2026-06-07 - Prevention of Secret Exposure in Client Bundles

**Vulnerability:** The `vite.config.ts` file was using `loadEnv` and Vite's `define` property to inject the `GEMINI_API_KEY` into the client-side bundle at build time. This pattern, while common for non-sensitive configuration, is a critical vulnerability for API keys as it performs a global search-and-replace, making the secret accessible to anyone with access to the frontend assets.

**Learning:** This exposure is a recurring regression. AI Studio automatically injects sensitive secrets like `GEMINI_API_KEY` at runtime for server-side use or via authorized proxying, but build-time injection via Vite bypasses these protections and hardcodes the key into the static JS files.

**Prevention:** Never use Vite's `define` property or `loadEnv` to bundle sensitive credentials into the client. Rely on runtime environment variables or secure backend proxies for handling secrets. Documented this risk in the project's security guidelines.
