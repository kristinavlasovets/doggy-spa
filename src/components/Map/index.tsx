'use client';

import React, { FC } from 'react';
import { Icon, LatLngExpression } from 'leaflet';
import { Marker, Popup, TileLayer } from 'react-leaflet';

import { coordinates, envVariables } from '@/constants';

import { MapContainerWrapper } from './styles';

import 'leaflet/dist/leaflet.css';

const icon = new Icon({
  iconUrl: '/assets/icons/icon_location.svg',
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const { openStreetMapUrl } = envVariables;

const Map: FC = () => (
  <MapContainerWrapper center={[49.2094523, -123.1481518]} zoom={15}>
    <TileLayer url={openStreetMapUrl} />
    {coordinates.map(({ gps, popUp }) => (
      <Marker position={gps as LatLngExpression} icon={icon} key={popUp}>
        <Popup>
          <p>{popUp}</p>
        </Popup>
      </Marker>
    ))}
  </MapContainerWrapper>
);

export default Map;
