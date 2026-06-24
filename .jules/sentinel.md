## 2026-06-18 - Build-time Secret Injection Removal
**Vulnerability:** Build-time secret injection via Vite's `define` property.
**Learning:** Even if a secret is not explicitly used in the `src/` directory, Vite's `define` property can perform a global search-and-replace during the build, potentially bundling sensitive environment variables into the client assets.
**Prevention:** Avoid using `define` for sensitive keys. Use Vite's `VITE_` prefix for client-exposed variables and only for non-sensitive configuration. Prefer backend proxies for sensitive API calls.

## 2026-06-18 - Dependency Manifest Synchronization
**Vulnerability:** Persistent high-severity vulnerabilities in core dependencies.
**Learning:** `npm audit fix` may update the lockfile but leave the `package.json` manifest unchanged if the fix requires a version outside the current range. This can lead to regressions if the environment is reset.
**Prevention:** Manually synchronize `package.json` with the secure versions identified by `npm audit` and verified in the NPM registry.
