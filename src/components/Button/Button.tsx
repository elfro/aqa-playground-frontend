import * as React from 'react';
import styled from 'styled-components';

// ToDo: merge colors with GlobalStyles
const COLORS = {
  primary: 'hsl(240deg 100% 60%)',
  primaryLight: 'hsl(235deg 100% 66%)',
  white: 'hsl(0deg 0% 100%)',
  offwhite: 'hsl(235deg 85% 97%)',
  gray: 'hsl(240deg 10% 50%)',
  transparentGray15: 'hsl(240deg 10% 50% / 0.15)',
  transparentGray75: 'hsl(240deg 10% 50% / 0.75)',
  black: 'hsl(0deg 0% 0%)',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'outline' | 'ghost';
  size: 'small' | 'medium' | 'large';
  children: string | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean; // make the button disabled or not
}
function Button({ variant, size, disabled, children, onClick }: ButtonProps) {
  // ToDo: fix any type
  const ButtonComponent =
    variant === 'outline'
      ? OutlineButton
      : variant === 'ghost'
        ? GhostButton
        : FillButton;

  return (
    <ButtonComponent
      size={size}
      title={children}
      aria-label={children}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonComponent>
  );
}

const ButtonBase = styled.button<ButtonProps>`
  --large: 1.3rem;
  --medium: 1.125rem;
  --small: 1rem;

  --large-padding: 1.15rem 2rem;
  --medium-padding: 1rem 1.5rem;
  --small-padding: 0.4rem 1rem;

  --large-border-radius: 0.25rem;
  --medium-border-radius: 0.125rem;
  --small-border-radius: 0.125rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: var(--${(props) => props.size});

  padding: var(--${(props) => props.size}-padding);
  text-transform: uppercase;
  border-radius: var(--${(props) => props.size}-border-radius);
  border: none;
  cursor: pointer;
`;

const FillButton = styled(ButtonBase)`
  color: var(--color-white);
  background: var(--color-secondary);

  &:hover {
    background: var(--color-secondary-light);
  }

  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: -5px;
  }
`;

const OutlineButton = styled(ButtonBase)`
  color: ${COLORS.primary};
  background: var(--color-white);
  border: 2px solid ${COLORS.primary};

  &:hover {
    background: ${COLORS.offwhite};
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: -5px;
  }
`;

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background: transparent;

  &:hover {
    color: ${COLORS.black};
    background: ${COLORS.transparentGray15};
  }

  &:focus {
    outline: 2px solid ${COLORS.transparentGray75};
    outline-offset: -5px;
  }
`;

export default Button;
