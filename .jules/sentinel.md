# Sentinel Security Journal

This journal documents critical security learnings, vulnerability patterns, and architectural constraints discovered within this codebase.

## 2026-08-14 - [Client-Side Define Injection & Dependency Supply Chain Reduction]
**Vulnerability:** Client-side credential exposure via Vite's `define` block, which injected `process.env.GEMINI_API_KEY` directly into compiled frontend assets. Additionally, the presence of unused server-side dependencies (`express`, `@types/express`, `dotenv`, and `@google/genai`) and older package versions (`react-router-dom@7.14.2`, `vite@6.2.3`) introduced unnecessary supply chain attack surface and high-severity CSRF vulnerabilities.
**Learning:** Vite's `define` configuration performs static string replacement at build time, meaning any environment variable injected there gets permanently hardcoded into public production JS bundles. Furthermore, including unused backend/server dependencies in a pure static single-page application (SPA) unnecessarily inflates the package tree and introduces exposure to transitive vulnerabilities.
**Prevention:** Avoid injecting credentials or private API keys into client-side define blocks. Always prune unused dependencies to minimize the application's attack surface, and pin dev-dependencies like `vite` and runtime dependencies like `react-router-dom` to fully hardened, patched versions to prevent regression during branch merges.
