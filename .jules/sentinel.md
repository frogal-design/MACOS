## 2026-04-07 - Client-side Secret Exposure via Vite Define Block

**Vulnerability:**
`vite.config.ts` used `loadEnv` and `define` to inject `process.env.GEMINI_API_KEY` into client build outputs.

**Learning:**
In Vite applications, using global `define` blocks with sensitive server keys causes build-time string substitution, baking raw secret API keys into public static JavaScript bundles in `dist/assets/`.

**Prevention:**
Remove server secret define blocks from `vite.config.ts`. In Vite applications, only client-safe variables prefixed with `VITE_` should be accessed via `import.meta.env`.
