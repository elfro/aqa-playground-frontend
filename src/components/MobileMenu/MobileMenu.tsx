'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import styled, { keyframes } from 'styled-components';

import { ArrowLeft } from 'react-feather';

import ModalSidebarRight from '@/components/ModalSidebarRight';
import AuthButton from '@/components/AuthButton';
import ComponentOnMount from '@/components/ComponentOnMount';
import VisuallyHidden from '@/components/VisuallyHidden';
import UnstyledButton from '@/components/UnstyledButton';
import HamburgerMenuButton from '@/components/HamburgerMenuButton';

import { WEIGHTS } from '@/constants/styles.constants';

function MobileMenu({ initialMenuItems }: { initialMenuItems: Item[] }) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [menuItems, setMenuItems] = React.useState<{
    currentItems: Item[];
    prevItems: Item[] | null;
  }>({
    currentItems: initialMenuItems,
    prevItems: null,
  });
  const id = React.useId();
  const currentPathname = usePathname();

  function handleOnOpenChange() {
    if (!showMobileMenu) {
      console.log('Opening mobile menu');
      setShowMobileMenu(true);
    }
    if (showMobileMenu) {
      console.log('Closing mobile menu');
      setShowMobileMenu(false);
    }
  }
  function handleNavigateToSubMenu(parentItem: Item) {
    const actualItems = parentItem.nextMenuItems;
    if (actualItems && actualItems.length > 0) {
      setMenuItems((prevState) => {
        return {
          currentItems: actualItems,
          prevItems: prevState.currentItems,
        };
      });
    }
  }

  function handleNavigateBack() {
    setMenuItems((prevState) => {
      const nextCurrentItems = prevState.prevItems;

      if (!nextCurrentItems) {
        return { currentItems: prevState.currentItems, prevItems: null };
      }

      return { currentItems: nextCurrentItems, prevItems: null };
    });
  }

  return (
    <ModalSidebarRight
      isOpen={showMobileMenu}
      onOpenChange={handleOnOpenChange}
      triggerElement={<HamburgerMenuButton />}
      ariaLabel='Menu'
      mode='right-side'
    >
      <InnerWrapper>
        <Side />
        <Menu>
          {menuItems.prevItems && (
            <UnstyledButton onClick={handleNavigateBack} title='Go Back'>
              <ArrowLeft size={24} />
              <VisuallyHidden>Go Back</VisuallyHidden>
            </UnstyledButton>
          )}
          {menuItems.currentItems.map((item, index) => {
            const props = item.nextMenuItems
              ? {
                  onClick: () => handleNavigateToSubMenu(item),
                }
              : {
                  as: 'a',
                  href: item.slug,
                };

            return (
              <MenuItem
                key={`${id}-${index}`}
                $active={currentPathname.endsWith(item.slug)}
                {...props}
              >
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>

        <Footer>
          <FooterItem href='/#'>Terms and Conditions</FooterItem>
          <FooterItem href='/#'>Privacy Policy</FooterItem>
          <FooterItem href='/#'>Contact Us</FooterItem>
          <ComponentOnMount>
            <FooterLastItemWrapper>
              <FooterAuthItem mode='mobile' />
            </FooterLastItemWrapper>
          </ComponentOnMount>
        </Footer>
      </InnerWrapper>
    </ModalSidebarRight>
  );
}

const fadeIn = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 500ms both;
    animation-delay: 400ms;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 11px;
`;

const FooterItem = styled.a`
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
  text-decoration: none;
  width: max-content;

  &:hover {
    text-decoration: revert;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;

const MenuItem = styled(UnstyledButton)`
  font-size: 1.125rem;
  font-weight: ${WEIGHTS.medium};
  color: var(
    --${(props) => (props.$active ? 'color-primary' : 'color-gray-900')}
  );
  text-transform: uppercase;
  text-decoration: none;
  width: max-content;

  &:hover {
    color: var(--color-primary-light);
  }
`;

interface Item {
  title: string;
  slug: string;
  nextMenuItems?: Item[];
}

export default MobileMenu;
