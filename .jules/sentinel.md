## 2025-05-15 - [CRITICAL] Insecure API Key Exposure in Client-Side Bundle
**Vulnerability:** The `vite.config.ts` was configured to inject `GEMINI_API_KEY` from environment variables directly into the client-side bundle via Vite's `define` property.
**Learning:** Hardcoding or injecting secrets into client-side code makes them accessible to anyone who inspects the application's source code or network traffic.
**Prevention:** Always use a backend proxy or server-side functions to handle sensitive API calls that require secrets. Never expose secrets to the client-side bundle.
