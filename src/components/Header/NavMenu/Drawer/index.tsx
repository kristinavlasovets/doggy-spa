import React, { FC, useRef } from 'react';

import { useOnClickOutside } from '@/hooks';

import { Button, DrawerWrapper, Overlay } from './styles';
import { DrawerProps } from './types';

const Drawer: FC<DrawerProps> = (props) => {
  const { onClose, isOpen, children } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside({ ref, handler: onClose });

  return (
    <Overlay isOpen={isOpen}>
      <DrawerWrapper ref={ref} isOpen={isOpen}>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
        {children}
      </DrawerWrapper>
    </Overlay>
  );
};

export default Drawer;
