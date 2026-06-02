## 2026-05-24 - DOM Density Optimization in DecryptedText
**Learning:** Rendering individual character `<span>` elements for animated text is great for animation control but leads to high DOM density once the animation is complete. This increases memory usage and can slow down subsequent style recalculations or DOM traversals.
**Action:** Transition from per-character `<span>` rendering to a single text node once the animation state reaches 'decrypted'. This maintains animation quality while optimizing the final DOM structure.

## 2026-05-24 - Efficient Static Data Handling in React
**Learning:** Hoisting static data (like constants, arrays of objects used for gallery or stats) to the module scope prevents unnecessary re-allocations and stabilizes references during component re-renders. When combined with `useMemo` for non-mutating operations like sorting or filtering, it ensures minimal overhead during the render phase.
**Action:** Always identify static datasets and move them outside the component definition. Use `as const` for TypeScript literal types to ensure correct inference.
