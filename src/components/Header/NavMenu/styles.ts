import Link from 'next/link';
import { styled } from 'styled-components';

import { LinkItemProps } from './types';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: ${({ theme }) => theme.height.s}px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: none;
  }
`;

export const LinkItem = styled(Link)<LinkItemProps>`
  margin-right: ${({ theme }) => theme.margins.xs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
  transition: transform 250ms;

  text-decoration: ${({ isActive }) => (isActive ? 'underline' : '')};
  text-decoration-thickness: ${({ isActive }) => (isActive ? '4px' : '')};
  text-decoration-color: ${({ theme, isActive }) => (isActive ? theme.colors.PINK : '')};
  text-underline-offset: ${({ isActive }) => (isActive ? '10px' : '')};

  &:hover {
    color: ${({ theme }) => theme.colors.BRONZED};
    transform: translateY(-3px);
  }
`;

export const Burger = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
