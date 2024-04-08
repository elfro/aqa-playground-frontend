import styled from 'styled-components';
import * as React from 'react';

interface ButtonAsLinkProps extends React.ComponentPropsWithRef<'button'> {
  $underline?: 'initial' | 'hover' | 'none';
}

export default styled.button<ButtonAsLinkProps>`
  padding: 0;
  background: none;
  border: none;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  width: max-content;
  text-decoration: ${(props) =>
    props.$underline === 'initial' ? 'underline' : 'none'};
  text-decoration-thickness: 1px;

  cursor: pointer;

  &:hover {
    text-decoration: ${(props) =>
      props.$underline === 'hover' ? 'underline' : 'none'};
  }
`;
