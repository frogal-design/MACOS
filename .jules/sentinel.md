# Sentinel Journal - Security Learnings

## 2026-07-14 - Client-side Define Block Credential Exposure Risk

**Vulnerability:**
Configuring Vite's `define` block to map `process.env.GEMINI_API_KEY` to `loadEnv(mode, '.', '').GEMINI_API_KEY` statically injects the API key string literal into public client-side JavaScript bundle assets during production builds whenever environment variables are defined.

**Learning:**
In Vite applications, any key defined in `define` is globally replaced across build artifacts. If developers or build environments populate `GEMINI_API_KEY`, the secret is compiled directly into `dist/assets/index-*.js`, allowing anyone inspecting client assets to extract sensitive credentials.

**Prevention:**
Never map server-side or secret API keys into Vite `define` config blocks. For public client environment variables, strictly use the `VITE_` prefix and access them via `import.meta.env.VITE_*`. Keep secret API keys exclusively in backend environments or edge proxies.
