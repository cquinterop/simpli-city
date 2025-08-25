---
to: src/components/<%= name.toLowerCase() %>/<%= name %>.types.tsx
---
import { type ComponentProps } from "react";

export interface <%= name %>Props extends ComponentProps<"div"> {}
