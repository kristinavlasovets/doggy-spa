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
`;

export const Booking = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: transparent;
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
  width: 455px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  display: flex;
  justify-content: space-between;

  white-space: pre-wrap;
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
`;
