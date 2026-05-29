# Bolt's Performance Journal

## 2025-05-15 - Static Data Hoisting and Pre-sorting
**Learning:** Defining static data arrays inside functional components causes them to be re-allocated on every render. Furthermore, performing O(N log N) operations like sorting on these arrays within the render body (or even inside `useMemo` if the sort is not pre-computed) adds unnecessary overhead, especially if the sort involves expensive operations like `new Date()`.

**Action:** Hoist static data arrays to module scope. Pre-sort them once if possible. Use `useMemo` for any derived data that depends on component state (like filters).

## 2025-05-15 - Image Lazy Loading
**Learning:** Images below the fold should use `loading="lazy"` to improve Largest Contentful Paint (LCP) and reduce initial bandwidth usage.

**Action:** Identify images that are not in the initial viewport and add the `loading="lazy"` attribute.
