## 2025-05-22 - Sorting and State Mutation in React Hooks
**Learning:** Calling `.sort()` on a module-scope constant inside a `useMemo` or any component logic causes in-place mutation of the global state. This violates React's principle of pure functions and can lead to non-deterministic behavior and bugs. Additionally, a sort comparator must return `0` for equal elements to be valid.
**Action:** Always create a shallow copy (e.g., `[...array]`) before calling mutating methods like `.sort()` or `.splice()` on shared data. Ensure sort comparators handle equality cases correctly.
