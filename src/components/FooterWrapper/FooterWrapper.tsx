'use client';

import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-image: linear-gradient(to right, hsl(0deg 0% 95.29% / 30%) 0 100%),
    url('/footer.svg');
  background-size: cover;
  background-position: bottom center;
  min-height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px 60px;
`;

export default FooterWrapper;
