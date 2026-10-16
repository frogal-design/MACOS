## 2026-04-16 - Prevent Exposure of Secrets via Vite Client-Side Define Block

**Vulnerability:**
`vite.config.ts` was configured with a `define` block mapping `process.env.GEMINI_API_KEY` to `loadEnv(...)`. In Vite applications, global `define` replacements physically inject environment variable values into client-side JS bundles during production builds.

**Learning:**
Developers sometimes assume `process.env.SECRET` inside `vite.config.ts` is only evaluated server-side. However, using Vite's `define` option replaces references across the entire client source code and bakes secret values directly into static asset output files, making them publicly readable by anyone inspecting JavaScript bundles.

**Prevention:**
Never map server-side secret credentials in Vite's `define` configuration. Keep secret keys in server-side/backend environments or API proxies, and only expose non-sensitive public variables using `VITE_` prefix via Vite's `import.meta.env`.
