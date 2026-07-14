## 2026-07-14 - Redundant filtering and sorting in Gallery.tsx
**Learning:** Large static data arrays and expensive operations like sorting/filtering were happening on every render in the Gallery component, even during unrelated state updates like modal opening/closing. Hoisting data to module scope and using `useMemo` effectively eliminates this overhead.
**Action:** Always look for static data defined inside components and hoist it. Use `useMemo` for any derived data that involves filtering or sorting.

## 2026-07-14 - TypeScript literal widening in module-scope constants
**Learning:** When hoisting data that contains string literals intended for a union type (e.g., `type: 'image' | 'video'`), TypeScript may widen these to `string` if not explicitly typed or cast.
**Action:** Use `as const` or explicit interface typing for hoisted data arrays to maintain type safety.
