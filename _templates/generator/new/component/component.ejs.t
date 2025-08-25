---
to: src/components/<%= name.toLowerCase() %>/<%= name %>.tsx
---
import { Styled<%= name %> } from "./<%= name %>.styled";
import type { <%= name %>Props } from "./<%= name %>.types";

const <%= name %> = ({ children }: <%= name %>Props) => {
  return (
    <Styled<%= name %>>
      {children}
    </Styled<%= name %>>
  );
};

<%= name %>.displayName = "<%= name %>";

export default <%= name %>;
