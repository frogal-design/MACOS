## 2026-03-31 - Client-Side Define Credential Exposure

**Vulnerability:**
Configuring Vite's `define` block to map global identifiers (e.g. `process.env.GEMINI_API_KEY`) to `loadEnv(...)` environment variables directly bakes sensitive secret API keys into static production JavaScript bundles during `vite build`.

**Learning:**
Developers sometimes use Vite's `define` option as a workaround for Node-style `process.env` access in frontend React code. However, string-replacing secret environment variables at build time embeds the secret credentials in plain text inside public client assets accessible to any web visitor.

**Prevention:**
Never inject private API keys or server-side secrets into Vite's `define` configuration block. Client-exposed variables must be explicitly prefixed with `VITE_` and treated as public, while private API integrations should be performed server-side or via secure API proxies.
