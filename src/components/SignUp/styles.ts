import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: 678px;
`;

export const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.margins.xxs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cinzelDecorative};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;

export const ImageFrame = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  height: 550px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.BEIGE};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: ${({ theme }) => theme.width.smm}px;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageBack = styled.img`
  position: absolute;
  top: 200px;
  left: 120px;
  width: 466px;
  height: 430px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.BEIGE};
  z-index: -${({ theme }) => theme.zIndexes.s};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.width.smm}px;
  height: ${({ theme }) => theme.height.m}px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: ${({ theme }) => theme.borders.xs}px solid ${({ theme }) => theme.colors.BEIGE};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    display: none;
  }
`;

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.margins.xxs}px;
  margin-left: ${({ theme }) => theme.margins.xxs}px;
  width: ${({ theme }) => theme.width.ss}px;
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
    transform: translateX(-10px);
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin: ${({ theme }) => theme.margins.xxxs} auto;
    width: ${({ theme }) => theme.width.ssm}px;
    max-width: ${({ theme }) => theme.width.ssss}px;
  }
`;
