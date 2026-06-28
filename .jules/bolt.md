## 2026-06-25 - [Gallery Performance Optimization]
**Learning:** Hoisting static data arrays to module scope and pre-sorting them (O(n log n) once) significantly reduces render complexity. Combined with `useMemo` for filtering (O(n)) and derived state for modals, it ensures efficient UI updates even with complex interactions.
**Action:** Always check for static arrays defined inside component bodies and move them to module scope. Use derived state for modals to maintain a single source of truth.

## 2026-06-25 - [TypeScript and Static Hoisting]
**Learning:** When hoisting static arrays defined with `as const` to module scope for use with typed interfaces, use `.slice()` or explicit casting to satisfy read-only constraints in components without losing performance benefits.
**Action:** Apply `as const` to static datasets and cast as needed in component consumption.
