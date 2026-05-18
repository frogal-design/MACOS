## 2025-05-15 - [ShapeGrid Canvas Rendering Optimization]
**Learning:** Performance in Canvas-based animations in React is heavily influenced by the number of draw calls and the amount of garbage collection. Batching draw calls into a single path and using numeric keys for Maps can provide significant performance gains.
**Action:** Always look for opportunities to batch `stroke()` or `fill()` calls in Canvas loops and prefer numeric keys for high-frequency Map lookups to avoid string allocation overhead.
