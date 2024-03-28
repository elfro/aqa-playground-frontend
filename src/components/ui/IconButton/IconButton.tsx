import * as React from 'react';
import UnstyledButton, {
  UnstyledButtonProps,
} from '@/components/ui/UnstyledButton/UnstyledButton';
import VisuallyHidden from '@/components/ui/VisuallyHidden';
import {
  Icon,
  ArrowLeft,
  ShoppingBag,
  X,
  LogIn,
  LogOut,
  Menu,
  MinusSquare,
  PlusSquare,
  Trash,
} from 'react-feather';

const icons: { [key: string]: Icon } = {
  login: LogIn,
  logout: LogOut,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'arrow-left': ArrowLeft,
  close: X,
  minus: MinusSquare,
  plus: PlusSquare,
  trash: Trash,
};
export interface IconButtonProps extends UnstyledButtonProps {
  iconId: string;
  title: string;
  size?: 'small' | 'medium' | 'large';
  thickness?: 'thin' | 'normal';
  children?: React.ReactElement;
}
function IconButton(
  props: IconButtonProps,
  forwardRef: React.Ref<HTMLButtonElement>
) {
  const { iconId, title, size, thickness, children, ...prop } = props;
  const iconSize = size === 'small' ? 16 : size === 'large' ? 48 : 24;
  const iconStrokeWidth = thickness === 'thin' ? 1 : 2;
  const IconComponent = icons[iconId];

  if (!IconComponent) {
    throw new Error(`No icon found for ID: ${iconId}`);
  }

  return (
    <UnstyledButton title={title} ref={forwardRef} {...prop}>
      <IconComponent size={iconSize} strokeWidth={iconStrokeWidth} />
      {children}
      <VisuallyHidden>{title}</VisuallyHidden>
    </UnstyledButton>
  );
}

export default React.forwardRef<HTMLButtonElement, IconButtonProps>(IconButton);
