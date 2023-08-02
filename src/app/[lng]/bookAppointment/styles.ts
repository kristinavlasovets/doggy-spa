import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  background-color: transparent;
`;

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

export const MapContainer = styled.div`
  margin-top: ${({ theme }) => theme.margins.s}px;
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.width.s}%;
`;

export const Title = styled.h2`
  position: absolute;
  top: ${({ theme }) => theme.top.s}px;
  left: 100px;
  width: ${({ theme }) => theme.width.sss}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.WHITE};

  z-index: ${({ theme }) => theme.zIndexes.s};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    left: 20px;
    width: ${({ theme }) => theme.width.ss}px;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
  }
`;

export const Main = styled.div`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: ${({ theme }) => theme.width.s}%;
  height: fit-content;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-top: ${({ theme }) => theme.margins.xs}px;
    padding: ${({ theme }) => theme.paddings.xxxs}px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Booking = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    padding: ${({ theme }) => theme.paddings.xxxs}px;
    align-items: center;
  }
`;

export const Subtitle = styled.h5`
  padding: 0 ${({ theme }) => theme.paddings.xs}px 0 ${({ theme }) => theme.paddings.xs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const InfoWrapper = styled.div`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  width: ${({ theme }) => theme.width.smmm}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  display: flex;
  justify-content: space-between;
  white-space: pre-wrap;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: ${({ theme }) => theme.width.smm}px;
    padding: ${({ theme }) => theme.paddings.xxs}px;
    justify-content: space-evenly;
  }
`;

export const AddressInfo = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  &::first-line {
    font-weight: ${({ theme }) => theme.fontWeights.xl};
  }
`;

export const OperationsInfo = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  &::first-line {
    font-weight: ${({ theme }) => theme.fontWeights.xl};
  }
`;

export const MapWrapper = styled.section`
  margin-top: ${({ theme }) => theme.margins.s}px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 465px;
  height: 465px;
  border: ${({ theme }) => theme.borders.s}px solid ${({ theme }) => theme.colors.BEIGE};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: 342px;
    height: 340px;
  }
`;
