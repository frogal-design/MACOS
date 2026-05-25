
## 2025-05-15 - React Hook Import Verification
**Learning:** When refactoring components to use hooks like `useMemo` or `useCallback`, automated search-and-replace tools might miss updating the import statements, leading to build-time errors.
**Action:** Always verify that all used hooks are explicitly imported from 'react' after any logic refactor, and run `npm run lint` as an immediate verification step.
