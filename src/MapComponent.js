import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map = ({ onSourceSelect, onDestinationSelect }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    map.on('click', (e) => {
      const location = {
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        name: `Lat: ${e.latlng.lat.toFixed(5)}, Lng: ${e.latlng.lng.toFixed(5)}`,
      };

      if (!onSourceSelect.locationSelected) {
        onSourceSelect(location);
      } else {
        onDestinationSelect(location);
      }
    });

    return () => {
      map.off();
    };
  }, [onSourceSelect, onDestinationSelect]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
