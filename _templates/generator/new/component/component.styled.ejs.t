---
to: src/components/<%= name.toLowerCase() %>/<%= name %>.styled.tsx
---
import { styled } from "../../../styled-system/jsx";

export const Styled<%= name %> = styled("div", {
  base: {},
  variants: {},
  defaultVariants: {},
});
