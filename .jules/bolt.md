## 2026-06-25 - [Gallery Component Optimization]
**Learning:** In the `Gallery.tsx` component, defining large static arrays (like `MEDIA` and `CATEGORIES`) inside the component caused them to be recreated on every render. This, combined with inline filtering logic and unstable event handlers, led to unnecessary re-renders and redundant `useEffect` executions for keyboard listeners.
**Action:** Hoist static data to module scope, use `useMemo` for derived data (filtering/sorting), and wrap event handlers in `useCallback` to ensure stable references for side effects and child components.
