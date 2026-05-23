## 2026-05-23 - React performance anti-pattern in Gallery component
**Learning:** Defining static data arrays (like `media` and `categories`) inside functional components causes them to be recreated on every render. Additionally, expensive operations like filtering and sorting large arrays should be memoized using `useMemo` to avoid redundant computations, especially when unrelated state (like modal visibility) changes.
**Action:** Always hoist static data to module scope and use `useMemo` for derived data that involves filtering, sorting, or complex calculations.
