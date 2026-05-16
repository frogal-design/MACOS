## 2025-05-15 - [Canvas Grid Optimization]
**Learning:** Batching grid stroke operations by creating a single path and calling `ctx.stroke()` once per frame reduces rendering complexity from O(N*M) to O(1). Additionally, using numeric keys (bitwise combination `(col << 16) | (row & 0xffff)`) for `Map` lookups is significantly more efficient than string concatenation in high-frequency animation loops.
**Action:** Always batch repeated canvas path operations and avoid string-based keys in Maps used within `requestAnimationFrame` loops.
