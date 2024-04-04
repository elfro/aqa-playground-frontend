'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import styled, { keyframes } from 'styled-components';

import IconButton from '@/components/ui/IconButton';
import ModalSidebar from '@/components/ui/ModalSidebar';
import MobileMenuItemButton from '@/components/mobile-menu/MobileMenuItemButton';
import MobileMenuItemLink from '@/components/mobile-menu/MobileMenuItemLink';
import MobileMenuFooter from '@/components/mobile-menu/MobileMenuFooter';
import { Session } from 'next-auth';

function MobileMenu({
  initialMenuItems,
  session,
}: {
  initialMenuItems: Item[];
  session: Session | null;
}) {
  const menuItemsInitialState = {
    currentItems: initialMenuItems,
    prevItems: null,
  };
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [menuItems, setMenuItems] = React.useState<{
    currentItems: Item[];
    prevItems: Item[] | null;
  }>(menuItemsInitialState);
  const id = React.useId();
  const currentPathname = usePathname();

  function handleOnOpenChange() {
    if (!showMobileMenu) {
      setShowMobileMenu(true);
    }
    if (showMobileMenu) {
      setShowMobileMenu(false);
      setMenuItems(menuItemsInitialState);
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
    <ModalSidebar
      isOpen={showMobileMenu}
      onOpenChange={handleOnOpenChange}
      triggerElement={<IconButton iconId='menu' title='Open Menu' />}
      ariaLabel='Menu'
      mode='right-side'
    >
      <InnerWrapper>
        <Side />
        <Menu>
          {menuItems.prevItems && (
            <IconButton
              iconId='arrow-left'
              title='Go Back'
              onClick={handleNavigateBack}
            />
          )}
          {menuItems.currentItems.map((item, index) => {
            const key = `${id}-${index}`;
            if (item.nextMenuItems) {
              return (
                <MobileMenuItemButton
                  key={key}
                  onClick={() => handleNavigateToSubMenu(item)}
                >
                  {item.title}
                </MobileMenuItemButton>
              );
            }

            return (
              <MobileMenuItemLink
                key={key}
                href={item.slug}
                $active={currentPathname.endsWith(item.slug)}
                onClick={handleOnOpenChange}
              >
                {item.title}
              </MobileMenuItemLink>
            );
          })}
        </Menu>

        <MobileMenuFooter session={session} />
      </InnerWrapper>
    </ModalSidebar>
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

const Side = styled.div`
  flex: 1;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;

interface Item {
  title: string;
  slug: string;
  nextMenuItems?: Item[];
}

export default MobileMenu;
