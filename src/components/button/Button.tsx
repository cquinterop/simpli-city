import { type ComponentProps, type ReactNode } from "react";
import { LoaderCircle } from "lucide-react";

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
  icon?: ReactNode;
  isLoading?: boolean;
  iconPosition?: "left" | "right";
}

const Button = ({
  variant = "standard",
  isLoading = false,
  icon = null,
  iconPosition = "left",
  sx,
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
      {isLoading && <Loader aria-label="Loading in progress" />}
      <StyledContent
        visibility={isLoading ? "hidden" : "visible"}
        iconPosition={iconPosition}
      >
        {icon}
        {children}
      </StyledContent>
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;

const StyledButton = styled("button", {
  base: {
    display: "grid",
    gridTemplateAreas: `"stack"`,
    placeItems: "center",
    fontWeight: "bold",
    fontSize: "1rem",
    borderWidth: "2px",
    padding: "8px 16px",
    cursor: "pointer",
    _disabled: {
      pointerEvents: "none",
      opacity: "0.6",
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
    animation: "spin 1.5s linear infinite",
    gridArea: "stack",
  },
});

const StyledContent = styled("span", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gridArea: "stack",
    gap: "0.5rem",
  },
  variants: {
    visibility: {
      visible: {
        visibility: "visible",
      },
      hidden: {
        visibility: "hidden",
      },
    },
    iconPosition: {
      left: {
        flexDirection: "row",
      },
      right: {
        flexDirection: "row-reverse",
      },
    },
  },
  defaultVariants: {
    visibility: "visible",
    iconPosition: "left",
  },
});
