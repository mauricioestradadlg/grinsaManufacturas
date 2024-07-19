import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 25.72059084395817, // Latitud de tu ubicación
  lng: -100.28494357570801, // Longitud de tu ubicación
};

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <div>Error al cargar el mapa</div>;
  }

  if (!isLoaded) {
    return <div>Cargando mapa...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
      onLoad={map => {
        new window.google.maps.Marker({
          position: center,
          map: map,
          title: "Ubicación",
        });
      }}
    />
  );
};

export default MapComponent;
