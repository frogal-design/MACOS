## 2025-05-15 - Hoisting Static Data in React
**Learning:** Defining large static data arrays (like gallery items, stats, or club lists) inside React functional components causes them to be re-allocated on every render. This increases garbage collection pressure and can trigger unnecessary re-renders of child components that receive these arrays as props, even if the data hasn't changed.
**Action:** Always move static data that does not depend on component state or props to the module scope. Use `as const` for TypeScript to ensure literal types are preserved.
