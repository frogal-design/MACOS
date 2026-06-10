## 2026-06-07 - Static Data Hoisting & Pre-sorting
**Learning:** Re-sorting static datasets within the React render cycle (especially using `new Date()`) is a significant bottleneck that scales poorly with data size. Additionally, hoisting complex object literals that satisfy union types (like `'image' | 'video'`) requires the `as const` assertion combined with an explicit type cast to maintain type safety.
**Action:** Always pre-sort static datasets at module scope. Use `as const` and `as Type[]` for hoisted data that drives component props or state to avoid union type mismatch errors.
