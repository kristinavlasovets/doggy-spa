import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.s}px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  background-color: transparent;
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
  text-transform: uppercase;
`;

export const ImageFrame = styled.div`
  margin: ${({ theme }) => theme.margins.s}px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 780px;
  background-color: ${({ theme }) => theme.colors.BEIGE};
`;

export const Image = styled.img`
  aspect-ratio: 9/6;
`;

export const Breed = styled.h3`
  margin-top: ${({ theme }) => theme.margins.s}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const BreedInfo = styled.div`
  margin: ${({ theme }) => theme.margins.s}px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: fit-content;
  background-color: transparent;
`;

export const MainStatistics = styled.p`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.mmm}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const Statistics = styled.p`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.mmm}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;
