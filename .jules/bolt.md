## 2026-06-18 - Optimized Static Data Handling
**Learning:** Static arrays (stats, clubs, media) defined within React components caused unnecessary re-allocations and re-sorting (O(n log n)) on every render. Hoisting these to module scope and pre-sorting them once at initialization reduces runtime complexity to O(n) for subsequent filtering.
**Action:** Always check for static data definitions inside component bodies and hoist them to module scope. Use `as const satisfies T[]` for type safety without widening literal types.
