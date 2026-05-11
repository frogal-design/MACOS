## 2025-05-14 - Canvas Batching and Map Key Optimization
**Learning:** Batching canvas path operations (stroke/fill) and using numeric keys for Map lookups instead of string concatenation significantly reduces CPU overhead and GC pressure in high-frequency animation loops.
**Action:** Always batch stroke calls for repetitive grid structures and use bitwise-combined integers for coordinate-based Map keys in performance-critical code.
