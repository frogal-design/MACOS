## 2026-05-22 - [Vite Config Exposure]
**Vulnerability:** Accidental exposure of sensitive environment variables to the client-side bundle via Vite's `define` property.
**Learning:** Using Vite's `define` to inject `process.env.VARIABLE` into the client makes that variable globally accessible in the browser, even if it doesn't have the `VITE_` prefix.
**Prevention:** Avoid using `define` for sensitive variables. Ensure all secrets remain server-side and only expose variables that are explicitly intended for client use (e.g., using the `VITE_` prefix and relying on Vite's default behavior).
