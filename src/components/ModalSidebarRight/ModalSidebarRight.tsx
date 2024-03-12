import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import * as Dialog from '@radix-ui/react-dialog';
import { X as Close } from 'react-feather';

import UnstyledButton from '@/components/UnstyledButton/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';

interface ModalSidebarRightProps {
  isOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  triggerElement: React.ReactNode;
  children: React.ReactNode;
}
function ModalSidebarRight({
  isOpen,
  onOpenChange,
  triggerElement,
  children,
}: ModalSidebarRightProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{triggerElement}</Dialog.Trigger>
      <Dialog.Portal>
        <Wrapper>
          <Overlay />
        </Wrapper>
        <Content aria-label='Menu'>
          <Dialog.Close asChild>
            <CloseButton>
              <Close size={24} />
              <VisuallyHidden>Close Sidebar</VisuallyHidden>
            </CloseButton>
          </Dialog.Close>
          {children}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
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

const slideIn = keyframes`
  from {
      transform: translateX(100%);
  }
  to {
      transform: translateX(0);
  }  
`;

const Wrapper = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: transparent;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: var(--color-overlay-gray);
  animation: ${fadeIn} 350ms;
`;

const Content = styled(Dialog.Content)`
  --overfill: 16px;
  position: fixed;
  left: calc(40% - var(--overfill));
  top: 0;
  width: calc(60% + var(--overfill));
  height: 100%;
  padding: 32px;
  margin-right: calc(var(--overfill) * -1);
  background-color: var(--color-white);
  overflow: auto;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.99, 1.08) 200ms;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: fixed;
  top: 10px;
  right: calc(var(--overfill) / 2);
  padding: 12px;
`;

export default ModalSidebarRight;
