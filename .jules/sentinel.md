## 2026-10-12 - Prevent Client-Side Credential Exposure in Vite Global Define

**Vulnerability:** The `vite.config.ts` contained a `define` configuration mapping `process.env.GEMINI_API_KEY` to `JSON.stringify(env.GEMINI_API_KEY)`. If a developer or CI pipeline provided a `GEMINI_API_KEY` environment variable during build, Vite would statically replace references or inject the value into public JavaScript client bundles.

**Learning:** Vite's `define` config replaces matching string expressions at compile time across client-side source files. In frontend-only single page applications, setting secret keys via `define` exposes sensitive API credentials to end-users and static bundle viewers.

**Prevention:** Never map sensitive backend API keys or secrets in `define` within Vite configuration. Keep secret API keys exclusively on backend servers or proxy services, and only expose public environment variables (`VITE_*`) if explicitly required for public client operations.
