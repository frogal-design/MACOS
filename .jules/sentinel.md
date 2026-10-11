## 2026-04-11 - Client-Side Environment Variable Global Defines

**Vulnerability:**
Configuring Vite's `define` block to replace string literals like `process.env.GEMINI_API_KEY` with `JSON.stringify(env.GEMINI_API_KEY)` causes secret API keys stored in server-side or build environment variables to be baked directly into public static JavaScript bundles, exposing sensitive credentials to all website visitors.

**Learning:**
Vite's `define` performs static global search-and-replace at compile time. Even if the variable is meant for server/backend usage or optional runtime features, compiling it directly via `define` hardcodes the active key into client assets.

**Prevention:**
Never expose sensitive API keys via Vite's `define` configuration block. Ensure sensitive API keys remain strictly on backend services/proxies or use official client-safe mechanisms (e.g. `import.meta.env.VITE_*` explicitly scoped for non-secret public keys).
