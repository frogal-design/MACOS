## 2026-06-25 - [TypeScript Type Widening in Static Arrays]
**Learning:** When hoisting a static array that contains string literals (like `type: 'image' | 'video'`) to module scope and applying a transformation like `.sort()`, TypeScript may widen the literal types to generic `string`.
**Action:** Use an explicit type assertion (e.g., `as MediaItem[]`) when transforming the hoisted array to preserve the specific literal union types and avoid type errors in components.
