import { type ComponentProps, type ReactNode } from "react";

export type ButtonVariant = "standard" | "outlined";

export interface ButtonStyles {
  color?: string;
  bgColor?: string;
  roundness?: 1 | 2 | 3 | undefined;
}

export interface ButtonProps extends ComponentProps<"button"> {
  sx?: ButtonStyles;
  variant?: ButtonVariant;
  icon?: ReactNode;
  isLoading?: boolean;
  iconPosition?: "left" | "right";
}
