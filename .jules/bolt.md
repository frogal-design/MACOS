## 2026-06-07 - Hoisting and Pre-sorting Static Data
**Learning:** Hoisting static data to the module scope and pre-sorting it (especially if it involves complex operations like `new Date()`) reduces the workload of the React render cycle from O(n log n) to O(1) or O(n) for subsequent filtering.
**Action:** Always identify static data arrays and move them outside the component. Pre-sort them once at the module level.
