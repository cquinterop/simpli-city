---
to: src/components/<%= name.toLowerCase() %>/index.ts
---
export { default as <%= name %> } from "./<%= name %>";
export type { <%= name %>Props } from './<%= name %>'
