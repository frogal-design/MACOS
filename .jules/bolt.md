## 2026-06-25 - [Render-Cycle Optimization]
**Learning:** Pre-sorting static datasets (like gallery media) at module scope rather than within the component or useMemo reduces runtime complexity from O(n log n) to O(n) for every subsequent filter operation.
**Action:** Always hoist and pre-sort static data that requires ordering before it reaches the React render cycle.

## 2026-06-25 - [Component Memoization]
**Learning:** Wrapping highly animated components like DecryptedText in React.memo prevents massive re-render cascades when parent components update unrelated state (like route changes or layout shifts).
**Action:** Use React.memo for components with internal timers or high-frequency state updates.
