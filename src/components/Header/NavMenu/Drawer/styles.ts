import { styled } from 'styled-components';

import { OverlayProps } from './types';

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  width: ${({ theme }) => theme.width.s}%;
  height: 100%;
  opacity: ${({ theme, isOpen }) => (isOpen ? theme.opacities.l : theme.opacities.m)};
  left: 0%;
  bottom: 0%;
  background-color: ${({ theme }) => theme.colors.TRANSLUSENT};
  backdrop-filter: blur(4px);
  z-index: ${({ theme }) => theme.zIndexes.m};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.1s ease-in-out;
`;

export const DrawerWrapper = styled.div<OverlayProps>`
  position: absolute;
  height: 100%;
  width: ${({ theme }) => theme.width.ssmm}px;
  padding: ${({ theme }) => theme.paddings.xxs}px;
  top: 0%;
  right: 0%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  box-shadow: -10px 4px 24px ${({ theme }) => theme.colors.TRANSLUSENT};

  display: flex;
  flex-direction: column;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in-out;
`;

export const Button = styled.button`
  width: ${({ theme }) => theme.width.s}px;
  height: ${({ theme }) => theme.height.xs}px;
  background-color: ${({ theme }) => theme.colors.PINK};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.WHITE};
  border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.PINK};
  border-radius: ${({ theme }) => theme.borderRadiuses.m}px;
  cursor: pointer;
  transition: transform 250ms;

  &:hover {
    opacity: ${({ theme }) => theme.opacities.m};
    transform: translateX(10px);
  }
`;
