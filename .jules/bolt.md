## 2026-06-18 - Hoisting Static Data & Render-Cycle Sort Avoidance

**Learning:** Defining static data arrays inside React component bodies causes redundant re-allocations on every render. Furthermore, performing data sorting (O(n log n)) inside the render path or even inside `useMemo` is less efficient than pre-sorting once at the module level if the data is truly static.

**Action:** Hoist all static datasets to module scope. Pre-sort static collections once during module initialization. Use `useMemo` only for dynamic filtering or derivations based on state/props.
