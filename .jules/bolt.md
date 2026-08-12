## 2026-06-25 - [DOM Node Reduction in Visual Components]
**Learning:** Components that render character-by-character animations (like `DecryptedText`) can cause significant DOM churn and high node counts if they maintain a split-span structure even after the animation is complete. Collapsing these into a single text node/span for the idle state significantly reduces the memory footprint and simplifies the DOM tree for the majority of the page's lifecycle.
**Action:** Always implement a "collapsed" state for animated text components that replaces individual character wrappers with a single text element once the final state is reached.

## 2026-06-25 - [Static Data Hoisting & Memoization]
**Learning:** Defining large data arrays or objects inside functional components causes re-allocation on every render, even if the data never changes. Hoisting these to module scope and using `useMemo` for derived data (like filtered lists) ensures stable references and reduces GC pressure.
**Action:** Standardize on SCREAMING_SNAKE_CASE module-scope constants for static UI data and use `useMemo` for any transformation of that data based on component state.

## 2026-08-12 - [Route-based Code Splitting]
**Learning:** Statically importing all page components in the root router forces the main production bundle to include assets for secondary pages (like Gallery, About, Events, Students) that a user may not visit initially. Splitting routes with `React.lazy()` and `React.Suspense` isolates page-specific code into individual chunks, reducing the main entry bundle size by ~28.70 KB (~6.8%) and boosting early page load responsiveness.
**Action:** Keep landing pages statically imported to ensure instant initial rendering, and lazy load secondary routes to keep the main bundle clean and lightweight.
