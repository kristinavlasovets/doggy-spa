'use client';

import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { Overlay } from './styles';
import { PortalProps } from './types';

const Portal: FC<PortalProps> = ({ children, isPortalOpen }) => {
  if (!isPortalOpen) {
    return null;
  }
  return createPortal(
    <>
      {children}
      <Overlay />
    </>,
    document.body
  );
};

export default Portal;
