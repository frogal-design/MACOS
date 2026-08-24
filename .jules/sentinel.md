## 2026-08-24 - Client-Side Secret Injection via Vite Define Config

**Vulnerability:**
The `vite.config.ts` configuration included a global `define` property mapping `process.env.GEMINI_API_KEY` to `env.GEMINI_API_KEY`. When building production assets, Vite statically replaces all references with the stringified value, baking sensitive API keys directly into public client JavaScript bundles.

**Learning:**
Developers often add environment variable mappings in bundler config during initial prototyping or server-side setup without considering that frontend bundlers hardcode defined values into client-facing artifacts.

**Prevention:**
Never use Vite's `define` or Webpack's `DefinePlugin` to inject server-side secrets into client-side build configs. For frontend apps, only expose public variables explicitly prefixed with `VITE_` via `import.meta.env`, and perform authenticated secret operations on secure backend endpoints.
