# Bolt's Performance Journal

## 2026-06-15 - Module-scope Pre-sorting and State Derivation
**Learning:** Re-sorting static datasets within the React render cycle or even within `useMemo` is a common anti-pattern that adds $O(n \log n)$ overhead to every update. Additionally, storing a full object in state as 'selected item' creates redundant data and potential synchronization bugs during filtering.
**Action:** Hoist static data and perform expensive pre-processing (like sorting) at the module level. Derive 'selected item' state from a primary index and the filtered data array to ensure a single source of truth and reduce memory overhead.
