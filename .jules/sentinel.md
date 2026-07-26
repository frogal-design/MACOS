# Sentinel Security Journal

This journal documents critical security learnings, vulnerability patterns, and prevention strategies for this repository.

## 2026-07-26 - Supply Chain Surface Reduction & Direct Dependency Hardening
**Vulnerability:** Global environment variable injection in Vite (`vite.config.ts`) and unused third-party dependencies (`express`, `dotenv`, `@google/genai`) in a client-only frontend bundle.
**Learning:** Hardcoding or globally defining backend/private environment variables (like `GEMINI_API_KEY`) within `vite.config.ts` can leak sensitive credentials. Furthermore, maintaining unreferenced packages like `express` inside a pure frontend React app unnecessarily increases the supply chain attack surface and introduces third-party dependency vulnerabilities.
**Prevention:** Avoid global definitions of private API keys in client bundles, remove unused backend-specific dependencies, and enforce upgrading direct dependencies to resolved and secured versions (`react-router-dom@^7.18.1` and `vite@^6.4.3`).
