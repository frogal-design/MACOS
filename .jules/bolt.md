## 2026-06-08 - Hoisting and Pre-sorting Static Data
**Learning:** React components often re-sort static data within the render body or `useMemo` hooks, leading to unnecessary O(n log n) overhead. If the data is truly static (e.g., constants), hoisting it to module scope and pre-sorting it once at module load time reduces the per-render complexity to O(1) for access and O(n) for filtering.
**Action:** Always check if `useMemo` or render-path calculations are operating on static constants. If so, move the sorting/processing to the module level.
