## 2026-05-18 - Avoid Exposing Secret Environment Variables via Vite Define

**Vulnerability:**
The `vite.config.ts` configuration used `define` to globally replace `process.env.GEMINI_API_KEY` with `env.GEMINI_API_KEY`. In client-side Vite builds, `define` substitutes values at compile time, baking sensitive server-side API keys or secrets directly into publicly served JavaScript bundle assets.

**Learning:**
Vite projects should avoid using global `define` for secret environment variables. `define` performs static text replacement during bundle generation, making any secret defined in `vite.config.ts` visible in built static assets.

**Prevention:**
Only expose public variables (prefixed with `VITE_` if using standard Vite env conventions) to frontend client code. Secrets and private keys must remain strictly on server-side or proxy endpoints and never be defined in `vite.config.ts`'s `define` block.
