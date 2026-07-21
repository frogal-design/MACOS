# Sentinel Security Journal

## 2026-06-25 - [GEMINI_API_KEY Leakage via vite.config.ts define block]
**Vulnerability:** The `vite.config.ts` has a `define` configuration that binds `process.env.GEMINI_API_KEY` to the value of `env.GEMINI_API_KEY`. Since `@google/genai`, `dotenv`, and `express` are completely unused in the frontend-only application, defining this key globally within Vite runs the risk of leakages and unnecessary exposure of secrets in the client-side JavaScript bundle if any code starts referencing it.
**Learning:** Vite's `define` configuration performs static string replacement. If we expose environment variables globally in `define`, they are directly embedded into the bundle. Removing unused backend-adjacent dependencies (`@google/genai`, `express`, `dotenv`) and removing the global `define` prevents any accidental leakages and minimizes the supply chain attack surface.
**Prevention:** Avoid defining unnecessary or unused secrets in `vite.config.ts`'s `define` object. Keep the package manifest clean of unused legacy or backend dependencies.
