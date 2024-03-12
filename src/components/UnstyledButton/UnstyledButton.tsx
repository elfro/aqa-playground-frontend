import styled from 'styled-components';
import * as React from 'react';

export interface UnstyledButtonProps
  extends React.ComponentPropsWithRef<'button'> {
  display?: string;
  // transient prop, ref: https://styled-components.com/docs/api#transient-props
  $active?: boolean;
}
export default styled.button<UnstyledButtonProps>`
  display: ${(props) => props.display || 'block'};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 5px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
