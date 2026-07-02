## 2026-06-25 - React Render Optimization & Data Hoisting

**Learning:** Defining static data arrays inside React component bodies causes unnecessary re-allocations on every render, leading to increased GC pressure. Furthermore, performing expensive operations like sorting or mapping (e.g., `new Date()`) on this static data inside the render loop is O(n log n) per render, which can be reduced to O(1) or O(n) with hoisting and memoization.

**Action:** Always hoist static data arrays to module scope. For datasets that require sorting, perform the sort once at the module level. Use `useMemo` for any derived data that depends on component state to ensure O(n) complexity only when state changes.
