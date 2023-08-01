import { MapContainer } from 'react-leaflet';
import { styled } from 'styled-components';

export const MapContainerWrapper = styled(MapContainer)`
  width: 455px;
  height: 455px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.sm}px;
    height: ${({ theme }) => theme.height.m}px;
  }
`;

export const Label = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;
