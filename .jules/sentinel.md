## 2026-04-18 - Client-Side Secret Define Block Exposure in Vite

**Vulnerability:**
`vite.config.ts` configured global `define` for `process.env.GEMINI_API_KEY` using `loadEnv`, causing secret environment variables to be inlined into public client-side JavaScript bundles during compilation if present in the build environment.

**Learning:**
Vite's `define` option replaces references at compile time globally. In client-side single page apps, baking secrets via `define` exposes sensitive API keys to end users in built bundle assets.

**Prevention:**
Never use Vite's `define` block to pass server-side secrets or raw process.env maps to client bundles. Use `import.meta.env.VITE_*` exclusively for public client-side parameters and keep sensitive API keys server-side.
