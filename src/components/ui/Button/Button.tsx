import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'fill' | 'outline' | 'ghost';
  size: 'small' | 'medium' | 'large';
  title: string | undefined;
  children: React.ReactNode;
}
function Button(props: ButtonProps) {
  const { variant, size, title, children, ...prop } = props;
  const ButtonComponent =
    variant === 'outline'
      ? OutlineButton
      : variant === 'ghost'
        ? GhostButton
        : FillButton;

  return (
    <ButtonComponent size={size} title={title} aria-label={title} {...prop}>
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
  background: var(--color-primary);

  &:hover {
    background: var(--color-primary-light);
  }

  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: -5px;
  }
`;

const OutlineButton = styled(ButtonBase)`
  color: var(--color-primary);
  background: var(--color-white);
  border: 2px solid var(--color-primary);

  &:hover {
    background: var(--color-offwhite);
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: -5px;
  }
`;

const GhostButton = styled(ButtonBase)`
  color: var(--color-gray-500);
  background: transparent;

  &:hover {
    color: var(--color-black);
    background: var(--color-gray-500-transparent15);
  }

  &:focus {
    outline: 2px solid var(--color-gray-500-transparent75);
    outline-offset: -5px;
  }
`;

export default Button;
