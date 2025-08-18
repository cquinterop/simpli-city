import { type ComponentProps, type ReactNode } from "react";
import { LoaderCircle } from 'lucide-react';

import { styled } from "../../../styled-system/jsx";

export type ButtonVariant = "standard" | "outlined";

export interface ButtonStyles {
  color?: string;
  bgColor?: string;
  roundness?: 1 | 2 | 3 | undefined;
}

interface ButtonProps extends ComponentProps<"button"> {
  sx?: ButtonStyles;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
}

const Button = ({
  startIcon = null,
  endIcon = null,
  variant = "standard",
  sx,
  isLoading = false,
  children,
  ref,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      ref={ref}
      variant={variant}
      roundness={sx?.roundness}
      disabled={props.disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader aria-label="Loading" />
      ) : (
        <>
          {startIcon}
          {children}
          {endIcon}
        </>
      )}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;

const StyledButton = styled("button", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: "bold",
    fontSize: "1rem",
    borderWidth: "2px",
    padding: "8px 16px",
    transitionProperty: "background-color, border-color, color",
    transitionTimingFunction: "ease",
    transitionDuration: "200ms",
    cursor: "pointer",
    animation: "step-start",
    _disabled: {
      cursor: "not-allowed",
      opacity: "0.5",
    },
  },
  variants: {
    variant: {
      standard: {
        bg: "accent",
        color: "accentFg",
        borderColor: "accent",
        _hover: { opacity: 0.9 },
      },
      outlined: {
        bg: "transparent",
        color: "accent",
        borderColor: "accent",
        borderStyle: "solid",
        _hover: { bg: "surfaceAlt" },
      },
    },
    roundness: {
      1: { borderRadius: "4px" },
      2: { borderRadius: "8px" },
      3: { borderRadius: "12px" },
    },
  },
  defaultVariants: {
    variant: "standard",
    roundness: 2,
  },
});

export const Loader = styled(LoaderCircle, {
  base: {
    animation: "spin 1s linear infinite",
  },
});