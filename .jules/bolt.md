## 2026-05-24 - Hoisting and Memoization Strategy
**Learning:** Static data arrays defined inside React components cause unnecessary re-allocations on every render. Large datasets like Gallery media benefit from module-scope pre-sorting (O(n log n)) which removes sorting overhead from the render cycle.
**Action:** Always hoist static datasets to module scope. Use 'as const' for literal types in hoisted arrays to satisfy TypeScript.

## 2026-05-24 - DOM Node Reduction in Interactive Components
**Learning:** Components like DecryptedText that render strings as individual character spans for animation purposes should transition to a single text node once the animation is complete to reduce DOM density and improve browser performance for idle components.
**Action:** Implement conditional rendering to use a single <span> when interactive animations are in their final state.
