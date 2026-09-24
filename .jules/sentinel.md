## 2026-04-18 - Prevent Secret Leakage via Client-Side Global Define

**Vulnerability:**
The `vite.config.ts` configuration used `loadEnv` and a global `define` block mapping `process.env.GEMINI_API_KEY` to `JSON.stringify(env.GEMINI_API_KEY)`. If `GEMINI_API_KEY` was present in the build environment, Vite replaced references to `process.env.GEMINI_API_KEY` with the actual string key during compilation, baking sensitive credentials into public frontend JavaScript bundles.

**Learning:**
Client-side bundlers like Vite statically replace defined global identifiers during build. In frontend-only React applications, defining server environment variables or API keys in client-side global `define` blocks exposes those secrets to anyone inspecting public assets.

**Prevention:**
Never expose raw secret environment variables in client-side bundler `define` blocks. Keep sensitive API keys server-side or behind proxy endpoints, and only expose explicitly public variables via standard `VITE_` prefixed environment variables (`import.meta.env.VITE_*`).
