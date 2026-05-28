## 2026-05-28 - [TypeScript Type Inference for Hoisted Union Literals]
**Learning:** Hoisting static data containing literal values meant for union types (e.g., 'image' | 'video') can cause TypeScript to infer them as generic 'string' types, leading to assignment errors in component props.
**Action:** Use 'as const' assertions on the literal values or the entire object when hoisting to ensure the compiler maintains the specific union member type.
