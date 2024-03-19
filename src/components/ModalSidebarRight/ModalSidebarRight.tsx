import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import * as Dialog from '@radix-ui/react-dialog';
import { X as Close } from 'react-feather';

import UnstyledButton from '@/components/UnstyledButton/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';
import { QUERIES } from '@/constants/styles.constants';

interface ModalSidebarRightProps {
  isOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  triggerElement: React.ReactNode;
  mode: 'full' | 'right-side';
  children: React.ReactNode;
  ariaLabel?: string;
}
function ModalSidebarRight({
  isOpen,
  onOpenChange,
  triggerElement,
  mode,
  ariaLabel,
  children,
}: ModalSidebarRightProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{triggerElement}</Dialog.Trigger>
      <Dialog.Portal>
        <Wrapper>
          <Overlay />
        </Wrapper>
        <Content
          aria-label={ariaLabel}
          style={{
            '--width': mode === 'full' ? '100%' : 'calc(60% + var(--overfill)',
          }}
        >
          <Dialog.Close asChild>
            <CloseButton title='Close'>
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
  --max-width: 800px;
  --overfill: 16px;
  position: fixed;
  right: var(--overfill);
  top: 0;
  width: var(--width);
  max-width: var(--max-width);
  height: 100%;
  padding: 32px;
  margin-right: calc(var(--overfill) * -1);
  background-color: var(--color-white);
  overflow: auto;

  ${QUERIES.tabletAndLess} {
    --max-width: 500px;
  }
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
