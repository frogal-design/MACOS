## 2026-04-17 - Prevent Client-Side Secret Exposure via Vite Define

**Vulnerability:**
Client-side `define` block in `vite.config.ts` was replacing `process.env.GEMINI_API_KEY` globally during Vite build, risking secret API keys being baked into public JS bundles.

**Learning:**
Configuring secrets in Vite's `define` configuration exposes those environment variables to the browser bundle during compilation. In frontend-only single page applications, any secret included in `define` becomes public artifact text visible to anyone inspecting JS files.

**Prevention:**
Never map sensitive environment variables/secrets using Vite's `define` option in frontend builds. Store secrets on secure backend/proxy services or use Vite's standard `import.meta.env.VITE_*` convention for strictly non-sensitive public variables only.
