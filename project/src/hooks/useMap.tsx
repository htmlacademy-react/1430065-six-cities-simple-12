import { MutableRefObject, useEffect, useState, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Offer } from '../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, offer: Offer): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current && mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        },
        zoom: offer.city.location.zoom,
      });

      isFirstRender.current = false;

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, offer]);

  return map;
}

export default useMap;
