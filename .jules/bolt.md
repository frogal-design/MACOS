## 2026-06-18 - [Static Data Hoisting]
**Learning:** Static data arrays (categories, media, etc.) defined inside component bodies cause re-allocation on every render. Sorting these arrays inside the render cycle adds O(n log n) overhead to every render.
**Action:** Hoist static datasets to module scope and pre-sort them once. Use `useMemo` for filtering to ensure O(n) complexity during renders when filters change.
