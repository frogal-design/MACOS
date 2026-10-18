## 2025-05-15 - [Sensitive API Key Exposure in Client Bundle]
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via the Vite `define` property in `vite.config.ts`. This made the secret accessible to anyone viewing the website's source code.
**Learning:** Even when environment variables are managed securely (e.g., via AI Studio Secrets), build tools like Vite can accidentally bundle them into the frontend if explicitly instructed through configuration like `define`.
**Prevention:** Never use the `define` property in `vite.config.ts` to inject secrets. Sensitive keys should only be accessed server-side or through secure API proxies.
