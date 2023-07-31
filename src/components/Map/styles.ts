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
