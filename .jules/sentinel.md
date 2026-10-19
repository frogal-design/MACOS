## 2026-10-19 - Client-Side Environment Variable Define Block Exposure

**Vulnerability:**
The `vite.config.ts` contained a `define` block mapping `process.env.GEMINI_API_KEY` to `JSON.stringify(env.GEMINI_API_KEY)`. When building a Vite frontend application, global define replacements inject raw secret values directly into client JavaScript chunks accessible to any website visitor.

**Learning:**
Vite's `define` configuration performs string replacement at build time across the entire bundle. Any secret environment variable passed to `define` will be publicly visible in the generated bundle output if set during build execution.

**Prevention:**
Never map server-side or backend secrets (such as API keys) via Vite's `define` option in frontend build tools. Client applications should only access non-sensitive variables prefixed with `VITE_` or interact with sensitive APIs through a secure backend proxy.
