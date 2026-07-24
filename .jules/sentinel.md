## 2026-07-06 - [Supply Chain Surface Reduction & Direct Dependency Hardening]
**Vulnerability:** Unused dependencies (`express`, `dotenv`, `@google/genai`) were declared in the manifest file, introducing unnecessary supply chain attack surface and potential sub-dependency vulnerabilities without any functional benefit to the client-only application. Additionally, direct dependencies like `react-router-dom` and `vite` had vulnerable nested versions.
**Learning:** Leftover boilerplate or legacy dependencies are often neglected, resulting in an inflated dependency tree that exposes the application to modern supply chain exploits. Specifying loose ranges can resolve to vulnerable nested packages.
**Prevention:** Perform regular pruning of unused packages using static scanning tools, and pin direct dependencies to secured/hardened target releases rather than letting them resolve implicitly.

## 2026-07-06 - [Secret Exposure Mitigation in Build System Configuration]
**Vulnerability:** Global define block in `vite.config.ts` was configured to inject the environment variable `GEMINI_API_KEY` into `process.env.GEMINI_API_KEY` globally, even though it was not referenced anywhere in the source files. This created a high risk of secret leakage to client-side bundles and build logs.
**Learning:** Build-time injection systems often load all configured secrets or wildcards without verifying active usage within compilation entry points, which can leak sensitive tokens into production-ready static assets.
**Prevention:** Never configure global build-time replacements or definitions for API keys or secrets unless they are actively required in the client bundle, and prefer secured system-level environment variables or serverless proxies for API calls.
