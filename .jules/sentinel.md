## 2026-08-15 - Supply Chain Surface Reduction & Direct Dependency Hardening
**Vulnerability:** Unused server-side/backend dependencies (`express`, `@types/express`, `dotenv`, `@google/genai`) and outdated versions of core packages (`react-router-dom@^7.14.2`, `vite@^6.2.3`) introduced critical and high-severity security vulnerabilities (CSRF bypasses, open redirects, denial of service).
**Learning:** Merging older branch changes or retaining legacy packages that are not utilized by the frontend-only application creates an unnecessary attack surface. Even if the code does not actively import these dependencies, they remain in the package manifest and can be exploited downstream or in local dev/CI environments.
**Prevention:** Prune unnecessary backend dependencies from frontend-only bundles. Regularly audit package manifests and upgrade core packages (`react-router-dom` to `^7.18.2` and `vite` to `^6.4.3`) to resolve high-severity vulnerabilities.

## 2026-08-15 - Client-Side Define Block Credential Exposure
**Vulnerability:** Exposing `process.env.GEMINI_API_KEY` globally in `vite.config.ts` via the `define` configuration block.
**Learning:** Using global `define` injection binds environment keys into the final client bundles. If an API key is present in environment variables during the build process, it will be compiled directly into the client-side asset, causing immediate credential leakage.
**Prevention:** Avoid defining global credential variables in the `define` configuration of the bundler. Standardize on `import.meta.env` and proper runtime environment variable resolution. Ensure no unused API keys or global variables are injected if not explicitly consumed by the client code.
