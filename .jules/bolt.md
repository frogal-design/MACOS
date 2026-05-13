## 2026-05-13 - [Canvas & Component Optimization]
**Learning:** Performance in high-frequency Canvas animation loops is significantly improved by avoiding object/string allocations. Using numeric keys for Maps (via bitwise shifts) and batching stroke operations (one `stroke()` call instead of many) reduces both CPU usage and Garbage Collection overhead. Hoisting static data in React prevents unnecessary re-creations during re-renders.
**Action:** Always prefer numeric keys for Maps in hot paths and batch Canvas draw calls.
