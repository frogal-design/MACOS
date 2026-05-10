## 2025-05-15 - Canvas Performance & GC Optimization

**Learning:** In high-frequency Canvas animations (60fps), using string concatenation for Map keys (e.g., `${col},${row}`) creates significant garbage collection pressure. Additionally, calling `ctx.stroke()` or `ctx.fill()` inside nested loops for every cell is a major bottleneck due to state changes and draw call overhead. `ctx.beginPath()` inside a loop also clears any accumulated path, preventing batching.

**Action:** Use bitwise combined numeric keys for coordinate lookups (e.g., `(col << 16) | (row & 0xffff)`). Accumulate all grid paths into a single `beginPath()` and call `stroke()` once after the loop. Separate individual fill operations (like hover effects) into a secondary pass.
