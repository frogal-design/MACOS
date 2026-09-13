## 2025-05-15 - Secret Credential Exposure via Client-Side Define Block

**Vulnerability:** The Vite configuration used `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }` to inject the `GEMINI_API_KEY` environment variable into global scope during build time.

**Learning:** `define` substitutions in Vite static bundlers replace expressions across all client-side code at compile time, embedding sensitive API keys directly into public production JavaScript assets.

**Prevention:** Never expose backend secret API keys via Vite `define` config or `VITE_` prefixed public environment variables unless intended for public consumption. API keys for LLMs/backends should be kept server-side or proxied through a secure backend route.
