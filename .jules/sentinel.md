## 2026-03-31 - Client-side Define Block Credential Exposure
**Vulnerability:** `vite.config.ts` was using Vite's `define` configuration option to inject `process.env.GEMINI_API_KEY` into client-side code (`JSON.stringify(env.GEMINI_API_KEY)`).
**Learning:** In Vite/Webpack projects, the `define` configuration replaces matching variable references directly with literal strings during bundle compilation. Placing raw secret API keys in `define` bakes private environment variables directly into static public JS bundles delivered to browsers.
**Prevention:** Never map non-`VITE_` prefixed backend secrets or API keys into Vite's `define` config. Route API requests requiring sensitive keys through backend endpoints or dedicated serverless proxy functions.
