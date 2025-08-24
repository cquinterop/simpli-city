---
to: src/components/<%= name.toLowerCase() %>/<%= name %>.tsx
---
import { type ComponentProps } from "react";

import { styled } from "../../../styled-system/jsx";

export interface <%= name %>Props extends ComponentProps<"div"> {}

const <%= name %> = ({ children }: <%= name %>Props) => {
  return (
    <Styled<%= name %>>
      {children}
    </Styled<%= name %>>
  );
};

<%= name %>.displayName = "<%= name %>";

export default <%= name %>;

const Styled<%= name %> = styled("div", {
  base: {},
  variants: {},
  defaultVariants: {},
});
