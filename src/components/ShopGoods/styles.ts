import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.s}px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: fit-content;
`;

export const Main = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: fit-content;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
    display: block;
    margin-left: 75px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  z-index: ${({ theme }) => theme.zIndexes.s};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: ${({ theme }) => theme.margins.s}px;
  }
`;

export const Button = styled(Link)`
  margin-top: ${({ theme }) => theme.margins.s}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.sm}px;
  height: ${({ theme }) => theme.height.xs}px;
  background-color: ${({ theme }) => theme.colors.PINK};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
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
