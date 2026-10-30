## 2026-04-12 - Client-side Define Block Credential Exposure

**Vulnerability:**
The `vite.config.ts` configuration used `loadEnv` to inject `process.env.GEMINI_API_KEY` into the global `define` block. This causes Vite to replace every reference to `process.env.GEMINI_API_KEY` in the source code with the literal string value during bundle compilation, permanently baking secrets into public client-side JavaScript bundles.

**Learning:**
In Vite projects, using `define` to inject sensitive server-side environment variables or secrets exposes those secrets to anyone inspecting the client production bundle in the browser. Client-side applications cannot securely store private API keys.

**Prevention:**
Never inject private secrets into client-side JS bundles via `define` or `import.meta.env.VITE_*` if they require secret protection. If external API calls require private keys, route them through a secure backend proxy or serverless function instead.
