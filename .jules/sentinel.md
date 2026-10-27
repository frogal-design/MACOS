## 2026-10-27 - Client-Side Environment Variable Define Block Exposure

**Vulnerability:** Global define blocks in `vite.config.ts` like `'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)` bake secret API key environment variables directly into client-side JavaScript bundles during production builds.
**Learning:** Vite replaces defined string tokens during compilation, causing any loaded server environment variables matching the token to be publicly exposed in the client build output.
**Prevention:** Avoid defining secret environment variables in Vite's `define` config option. Rely on Vite's standard `import.meta.env.VITE_*` mechanism for public variables or handle secrets strictly server-side.
