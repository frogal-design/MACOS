## 2026-06-25 - Recurring GEMINI_API_KEY Regression
**Vulnerability:** Build-time injection of `GEMINI_API_KEY` into the client-side bundle via Vite's `define` property and `loadEnv` in `vite.config.ts`.
**Learning:** This exposure has occurred multiple times. Even if not explicitly referenced in source code, Vite's `define` performs global search-and-replace, potentially leaking the key if it matches any pattern or is simply bundled as a constant. AI Studio injects secrets at runtime, so build-time bundling is unnecessary and dangerous.
**Prevention:** Hard-remove `loadEnv` and the `define` block in `vite.config.ts`. Explicitly document this in the journal and README to ensure future agents or developers do not re-introduce this logic for "convenience".
