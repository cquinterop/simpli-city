import { Loader, StyledButton, StyledContent } from "./Button.styled";
import type { ButtonProps } from "./Button.types";

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
