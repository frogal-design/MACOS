# Sentinel Security Journal

This file records critical security learnings and vulnerability patterns specific to this codebase.

## 2026-07-14 - Client-Side Environment Define Block Credential Exposure
**Vulnerability:** Global `define` in `vite.config.ts` replacing `process.env.GEMINI_API_KEY` with stringified `env.GEMINI_API_KEY`.
**Learning:** Defining server/build environment variable secrets in Vite's `define` config replaces references across client code and bakes raw environment values into public static JavaScript bundles.
**Prevention:** Never expose backend API keys or secrets in Vite `define` configuration. Keep frontend environment variables scoped to `VITE_` prefixed public variables if strictly required on the client side.
