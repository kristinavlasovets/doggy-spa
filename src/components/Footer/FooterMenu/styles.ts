import Link from 'next/link';
import { styled } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}) {
    display: none;
  }
`;

export const LinkItem = styled(Link)`
  margin-right: ${({ theme }) => theme.margins.xs}px;
  margin-bottom: ${({ theme }) => theme.margins.xxs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.CHARCOAL};
  transition: transform 250ms;

  &:hover {
    color: ${({ theme }) => theme.colors.BRONZED};
    transform: translateY(-3px);
  }
`;

export const Title = styled.h5`
  margin-bottom: ${({ theme }) => theme.margins.xxs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;
