## 2026-06-07 - Pre-sorting static datasets
**Learning:** Hoisting static data and pre-sorting at module scope (O(n log n)) removes redundant sorting overhead from the React component lifecycle, especially for collections like gallery items. Deriving "selected item" from an index instead of storing the object in state prevents synchronization bugs.
**Action:** Always check if a dataset used in a component is static and can be pre-processed outside the render loop.
