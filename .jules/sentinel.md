# Sentinel Security Journal

## 2026-08-15 - Client-Side Credential Exposure in Vite Define Config

**Vulnerability:**
`vite.config.ts` globally replaced `process.env.GEMINI_API_KEY` across all bundled client-side JavaScript files via Vite's `define` block, introducing credential leakage risk.

**Learning:**
Vite's `define` config option blindly performs search-and-replace during bundling. Even if no source file directly imports a secret, defining `process.env.GEMINI_API_KEY` in `vite.config.ts` causes environment variables to be baked into static assets whenever referenced or injected.

**Prevention:**
1. Never define client-side global replacements for environment secrets in `vite.config.ts`; use standard `import.meta.env.VITE_*` conventions for public variables only.
