## 2026-06-25 - Vite 'define' Secret Exposure
**Vulnerability:** Hardcoded exposure of `GEMINI_API_KEY` via Vite's `define` property.
**Learning:** Even if a secret is not used in the source code, Vite's `define` will globally replace occurrences of the key, and it might be included in the bundle or simply exist as an unnecessary exposure point in the configuration.
**Prevention:** Only expose environment variables that are explicitly needed by the client, and use the `VITE_` prefix convention which Vite handles more securely by default.

## 2026-06-25 - Redundant Backend/AI Dependencies in Frontend
**Vulnerability:** Unused dependencies like `express` and `@google/genai` increased the attack surface and bundle risk.
**Learning:** Prototyping artifacts or misconfigured templates can leave server-side or heavy SDK dependencies in a purely frontend project.
**Prevention:** Regularly audit `package.json` against actual `import` statements in `src/` to prune the dependency tree.
