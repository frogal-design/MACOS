## 2025-01-24 - Optimization of Gallery Component
**Learning:** React performance anti-pattern: Defining static data arrays inside functional components causes recreation on every render. Additionally, expensive operations like filtering and sorting were executed on every render, even for state changes (like modal toggles) that didn't affect the data set.
**Action:** Hoist static data to module scope and use `useMemo` to wrap filtering/sorting logic. Use `as const` for better TypeScript inference of literal union types in static arrays.
