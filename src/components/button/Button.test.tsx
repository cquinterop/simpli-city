import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

import "@testing-library/jest-dom";

describe("Button component", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders start and end icons", () => {
    render(
      <Button startIcon={<span>Start</span>} endIcon={<span>End</span>}>
        Click
      </Button>
    );
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("End")).toBeInTheDocument();
  });

  it("applies variants correctly", () => {
    const { rerender } = render(<Button variant="standard">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg_accent");

    rerender(<Button variant="outlined">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg_transparent");
  });

  it("applies roundness correctly", () => {
    const { rerender } = render(<Button sx={{ roundness: 1 }}>Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bdr_4px");

    rerender(<Button sx={{ roundness: 2 }}>Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bdr_8px");

    rerender(<Button sx={{ roundness: 3 }}>Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("bdr_12px");
  });

  it("shows loader when isLoading is true", () => {
    render(<Button isLoading>Click</Button>);
    expect(screen.getByLabelText("Loading")).toBeInTheDocument();
  });

  it("hides loader when isLoading is false", () => {
    render(<Button isLoading={false}>Click</Button>);
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    expect(screen.getByText("Click")).toHaveStyle({ visibility: "visible" });
  });

  it("disables the button when disabled prop is set", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click
      </Button>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    await fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("calls onClick when clicked and not disabled", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const btn = screen.getByRole("button");
    await fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
