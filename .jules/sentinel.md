## 2026-06-25 - [Secret Leakage via Vite Define]
**Vulnerability:** API keys (GEMINI_API_KEY) were being injected into the client bundle using Vite's `define` configuration.
**Learning:** Even if an API key is not explicitly used in the source code, Vite's `define` globally replaces occurrences, which can lead to accidental exposure if the key is present in the environment and the configuration is set to inject it.
**Prevention:** Never use `define` or `import.meta.env` to expose sensitive backend-only secrets to the frontend. Use a backend proxy for sensitive API calls.
