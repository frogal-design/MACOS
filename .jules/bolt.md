## 2026-06-10 - Static Data Hoisting & Pre-sorting
**Learning:** React components containing large static datasets (e.g., gallery items, stats) incur significant re-allocation and re-sorting overhead on every render if defined inside the component body. Moving these to module scope removes this O(n log n) cost from the runtime lifecycle.
**Action:** Always hoist static arrays to module scope and perform any necessary initial sorting/transformation once at the top level.

## 2026-06-10 - Derived State for Item Selection
**Learning:** Storing a full object in state to represent a "selected item" (e.g., for a modal) creates a redundant source of truth that must be manually synced with the source array. Storing just the `index` and deriving the item is more robust and performant.
**Action:** Use index-based or ID-based selection for UI components like modals to ensure single-source-of-truth consistency.
