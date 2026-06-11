## 2026-06-07 - Static Data Hoisting and Pre-sorting
**Learning:** Hoisting static data (like large arrays) to module scope prevents unnecessary re-allocation during React render cycles. Pre-sorting these datasets at the module level (O(n log n) once) effectively removes sorting overhead from the component lifecycle, which is especially beneficial for collections like gallery items or news feeds that would otherwise be sorted on every render or filter change.
**Action:** Always identify static or "read-only" datasets within components and move them to module scope. Pre-sort them if they have a deterministic default order.

## 2026-06-07 - TypeScript Casting for Union Types in Hoisted Data
**Learning:** When hoisting static data that must satisfy complex union types (e.g., `type: 'image' | 'video'`), TypeScript might infer a more general type (like `string`) which causes assignment errors to typed interfaces.
**Action:** Use an explicit type assertion (e.g., `as MediaItem[]`) on the hoisted literal to ensure compatibility with component props and state.
