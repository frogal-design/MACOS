## 2025-05-24 - Hoisting static data in React components
**Learning:** Defining static data arrays (like media lists) inside functional components causes recreation on every render, which is an O(N) allocation overhead. Combined with inline sorting (O(N log N)), this can lead to jank in data-heavy views like galleries.
**Action:** Always hoist static data to module scope and pre-sort if possible. Use `useMemo` for derived data (filtering) and `useCallback` for event handlers to maintain stable references.
