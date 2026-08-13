## 2026-08-24 - [Merge Regression: Exposed Credentials & High-Severity Dependencies]
**Vulnerability:** Merging of older/unhardened branches reintroduced an exposed client-side global definition block (`process.env.GEMINI_API_KEY` in `vite.config.ts`) and vulnerable, unused backend packages (`express`, `@types/express`, `dotenv`, and `@google/genai`) along with a vulnerable, outdated router dependency (`react-router-dom@^7.14.2`).
**Learning:** In collaborative repositories, manual merge processes or automated git branch updates can silently revert security hardenings if the branch history contains older states of `package.json` and build configurations. Security postures must be validated statically on every branch update.
**Prevention:**
1. Use automated static check scripts or CI pipelines to alert on any reintroduction of prohibited package names (like `express` or `dotenv` in a frontend-only SPA repository).
2. Never inject environment-scoped API keys into Vite's global definition block unless strictly necessary and verified; always prefer client-safe environment variables via `import.meta.env` with restricted scopes.
3. Keep dependency upgrade baselines pinned/standardized to prevent developers from pulling in legacy, vulnerable library states.
