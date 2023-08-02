import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.s}px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    padding: ${({ theme }) => `${theme.paddings.xxxs}px ${theme.paddings.xs}px`};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
  }
`;

export const ImageFrame = styled.div`
  margin: ${({ theme }) => theme.margins.s}px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  max-width: ${({ theme }) => theme.width.l}px;
  height: 780px;
  background-color: ${({ theme }) => theme.colors.BEIGE};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    height: ${({ theme }) => theme.height.l}px;
  }
`;

export const Image = styled.img`
  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: ${({ theme }) => theme.width.sm}px;
  }

  @media (max-width: 425px) {
    width: ${({ theme }) => theme.width.s}%;
    height: auto;
    padding: ${({ theme }) => `${theme.paddings.xxxs}px ${theme.paddings.xs}px`};
  }
`;

export const Breed = styled.h3`
  margin-top: ${({ theme }) => theme.margins.s}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.BLACK};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
  }
`;

export const BreedInfo = styled.div`
  margin: ${({ theme }) => theme.margins.s}px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${({ theme }) => theme.width.s}%;
  max-width: ${({ theme }) => theme.width.l}px;
  height: fit-content;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin: ${({ theme }) => theme.margins.xxs}px auto;
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
    align-items: center;
  }
`;

export const MainStatistics = styled.p`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.mmm}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-top: ${({ theme }) => theme.margins.xxxs}px;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
  }
`;

export const Statistics = styled.p`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.mmm}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-top: ${({ theme }) => theme.margins.xxxs}px;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
  }
`;
