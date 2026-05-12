# Bolt's Performance Journal

## 2025-05-14 - Canvas Grid Rendering Anti-patterns
**Learning:** Calling `beginPath()` and `stroke()` inside a loop for grid-like structures is extremely inefficient as it creates O(N) draw calls. Additionally, using string concatenation for Map keys (e.g., `"${col},${row}"`) in high-frequency animation loops (60fps) causes significant GC pressure.
**Action:** Always batch canvas paths by calling `stroke()` once after the loop. For coordinate-based Maps, use bitwise numeric keys `(col << 16) | row` to avoid string allocations.
