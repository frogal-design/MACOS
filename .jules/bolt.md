## 2026-06-25 - [Static Data Hoisting and Asset Loading]
**Learning:** Hoisting static data arrays to module scope prevents re-allocation on every render. Pre-sorting these arrays once at module scope avoids expensive $O(N \log N)$ operations during the render phase. `loading="lazy"` on below-the-fold assets measurably improves initial load performance.
**Action:** Always check for large static arrays inside components and hoist them. Use `useMemo` for derived data that depends on a subset of the hoisted data.
