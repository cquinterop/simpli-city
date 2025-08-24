---
to: src/components/<%= name.toLowerCase() %>/<%= name %>.test.tsx
---
import { render, screen } from "@testing-library/react";
import <%= name %> from "./<%= name %>";

describe("<%= name %> component", () => {
  it("renders without crashing", () => {
    render(<<%= name %>>Test</<%= name %>>);
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
