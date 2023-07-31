import { ReactNode } from 'react';

export interface DrawerProps {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
}

export interface OverlayProps {
  isOpen: boolean;
}
