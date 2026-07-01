## 2026-06-25 - Static Data Hoisting
**Learning:** Defining static data arrays inside component bodies causes unnecessary re-allocations on every render. Sorting these arrays inside the render cycle adds O(n log n) complexity to every render.
**Action:** Hoist static constants to module scope and pre-sort them if they are always displayed in the same order. Use `useMemo` for derived state like filtered lists.
