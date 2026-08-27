## 2026-03-30 - Client-Side API Key Exposure via Vite Define Block

**Vulnerability:** The `vite.config.ts` file configured a client-side global define block (`define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }`), which bakes backend environment secrets directly into static client JS bundles.

**Learning:** Vite replaces `define` tokens at compile-time with literal values. If secret environment variables are passed to `define` in a Vite configuration, build artifacts will expose those secrets in plain text to any web client inspecting compiled JS files.

**Prevention:** Never map sensitive API keys or private environment variables into `define` blocks in Vite configuration. Keep secret API keys exclusively in backend service environments or proxy requests through secure backend endpoints.
