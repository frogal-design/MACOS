## 2025-05-15 - [ShapeGrid Animation Optimization]
**Learning:** Canvas rendering performance is heavily bottlenecked by the number of `stroke()` and `fill()` calls. Batching path operations can reduce complexity from O(N*M) to O(1). Additionally, using numeric keys for `Map` lookups avoids string concatenation overhead and garbage collection pressure in high-frequency animation loops.
**Action:** Always batch Canvas path operations and prefer numeric keys for coordinate-based Maps in animation loops.

## 2025-05-15 - [Lazy Loading for LCP]
**Learning:** Adding `loading="lazy"` to images below the fold improves initial page load and LCP, but care must be taken not to apply it to hero images that are within the initial viewport.
**Action:** Audit page layout before applying lazy loading to ensure critical path images remain eager.
