## 2026-06-25 - [Gallery Data Hoisting and Memoization]
**Learning:** Large static data arrays like `MEDIA` should be hoisted to the module scope to avoid re-allocation on every render. Additionally, expensive operations like filtering and sorting these arrays should be wrapped in `useMemo` to prevent redundant work when unrelated state (like modal visibility) changes.
**Action:** Always check for component-scoped static data and wrap derived state calculations in `useMemo` when the source data is large or the transformation is complex.
