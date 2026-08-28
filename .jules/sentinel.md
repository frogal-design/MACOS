## 2026-05-18 - Client-Side Define Block Credential Exposure

**Vulnerability:**
`vite.config.ts` used `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }`. When Vite builds client static bundles, global replacement `define` statements literally inline secret values directly into client JavaScript files served to users and browsers.

**Learning:**
Even if `.env` files are ignored by git, defining secrets via Vite's `define` config option bakes runtime or environment secrets directly into the static output bundle JS files.

**Prevention:**
Never use Vite `define` to expose secret keys or process environment variables to the frontend. Standard Vite environment variables exposed to client code should strictly use the `VITE_` prefix (`import.meta.env.VITE_...`) for non-sensitive public values, and confidential API keys must remain strictly on server-side proxies or backend APIs.
