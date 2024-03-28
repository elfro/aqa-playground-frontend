import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { WEIGHTS } from '@/constants/styles.constants';
import AuthButton from '@/components/AuthButton';

function MobileMenuFooter() {
  return (
    <Footer>
      <FooterItem href='/#'>Terms and Conditions</FooterItem>
      <FooterItem href='/#'>Privacy Policy</FooterItem>
      <FooterItem href='/#'>Contact Us</FooterItem>
      <FooterLastItemWrapper>
        <FooterAuthItem mode='mobile' />
      </FooterLastItemWrapper>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 11px;
`;

const FooterItem = styled(Link)`
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.normal};
  color: var(--color-gray-700);
  text-decoration: none;
  width: max-content;

  &:hover {
    text-decoration: revert;
  }
`;

const FooterLastItemWrapper = styled.div`
  border-top: 1px solid black;
  padding: 10px 0;
`;

const FooterAuthItem = styled(AuthButton)`
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.normal};
  color: var(--color-gray-700);
  width: max-content;

  &:hover {
    text-decoration: underline;
  }
`;
export default MobileMenuFooter;
