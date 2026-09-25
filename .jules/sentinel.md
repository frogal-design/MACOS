## 2026-03-30 - Client-side Global Define Credential Exposure Risk

**Vulnerability:**
`vite.config.ts` was configured with a `define` block mapping `process.env.GEMINI_API_KEY` to `JSON.stringify(env.GEMINI_API_KEY)`. In single-page Vite applications where code runs directly in public browsers, `define` blocks replace target expressions across all client JS bundles with literal string values from environment variables at build time.

**Learning:**
Configuring build tools to globally define backend or secret environment variables in client-side Vite builds can accidentally bake sensitive API credentials into public production JavaScript assets if those variables are set in the build environment.

**Prevention:**
Remove server-side environment variable `define` mappings from client Vite configurations. For variables intended for client-side consumption, rely strictly on Vite's native `import.meta.env.VITE_*` scoping, and keep sensitive API keys server-side or behind authenticated backend proxies.
