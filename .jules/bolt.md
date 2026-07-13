## 2026-06-25 - [State Updater Anti-Pattern]
**Learning:** Functional updaters in `useState` (e.g., `setCount(prev => ... )`) should be pure. Triggering side effects or updating other state variables inside these updaters can lead to unpredictable behavior in React's concurrent rendering or strict mode.
**Action:** Always calculate necessary values outside the state setter and update multiple state variables sequentially if they are interdependent, rather than nesting them.
