import * as React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <ul>
        <li>Products</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-image: linear-gradient(to right, hsl(0deg 0% 100% / 30%) 0 100%),
    url('/background-footer.svg');
  background-size: cover;
  background-position: bottom center;
  min-height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px 60px;
`;

export default Footer;
