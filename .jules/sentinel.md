## 2026-03-29 - Client-Side Environment Variable Define Block Credential Exposure

**Vulnerability:**
`vite.config.ts` configured a global `define` block mapping `process.env.GEMINI_API_KEY` to `loadEnv(mode, '.', '').GEMINI_API_KEY`. During Vite build, any references to `process.env.GEMINI_API_KEY` would be statically replaced with the stringified secret, embedding sensitive API keys directly into public distribution JS bundle files in `dist/assets/`.

**Learning:**
Vite's `define` option performs compile-time string replacements in client code. When backend environment variables (like API keys) are defined via `define`, they are baked into compiled static assets that are publicly accessible to anyone viewing the client site or inspecting bundle code.

**Prevention:**
Never inject private server secrets into Vite's `define` object. For Vite client-side applications, use standard `import.meta.env.VITE_*` variables for intended public values, and keep secret API keys strictly on backend servers or serverless functions.
