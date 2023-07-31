import Link from 'next/link';
import { styled } from 'styled-components';

export const ImageFrame = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: fit-content;
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.width.s}%;
`;

export const Title = styled.h2`
  position: absolute;
  top: ${({ theme }) => theme.top.s}px;
  left: 80px;
  text-align: center;
  width: ${({ theme }) => theme.width.sss}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  z-index: ${({ theme }) => theme.zIndexes.s};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    left: 20px;
    width: ${({ theme }) => theme.width.ss}px;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
  }
`;

export const Button = styled(Link)`
  position: absolute;
  top: 600px;
  left: 150px;
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
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    top: 195px;
    width: ${({ theme }) => theme.width.ss}px;
    height: ${({ theme }) => theme.height.xss}px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
  }
`;
