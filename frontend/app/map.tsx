'use client';
import { Circle, GoogleMap, InfoWindow, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { useState } from 'react';
import {stops} from "./stops"

interface PathType {
  lat: number;
  lng: number;
  description: string;
}

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState<PathType | null>(null);

  

  const greenMarker = {
    url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
  };

  const redMarker = {
    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API || ''}>
      <GoogleMap
      mapContainerStyle={{ height: '500px', width: '100%' }}
      center={{lat: +stops[0].lat, lng: +stops[0].lng}}
      zoom={13}
      >
      {/* <Polyline path={path} options={{ strokeColor: '#0000FF', strokeWeight: 4 }} />
      <Polyline path={pathVuelta} options={{ strokeColor: '#ff000025', strokeWeight: 4 }} /> */}

        <Marker
        position={{lat: -27.461597, lng: -58.839474}}
        icon={greenMarker} // Abre el popup al hacer clic
        />

      {stops.map(({lat, lng, description}, index) => (
        <Marker
        key={index} position={{ lat: +lat, lng: +lng }} 
        title={description} icon={redMarker} 
        onClick={() => setSelectedLocation({description, lat: +lat, lng: +lng})} // Abre el popup al hacer clic

        />
      ))}

        <Circle
        center={{lat: -27.461597, lng: -58.839474}}
        radius={500} // Radio en metros
        options={{
          fillColor: 'blue',
          fillOpacity: 0.2,
          strokeColor: 'blue',
          strokeOpacity: 0.5,
          strokeWeight: 1,
        }}
        />

      {/* InfoWindow (Popup) */}
      {/* {selectedLocation && (
        <InfoWindow position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} onCloseClick={() => setSelectedLocation(null)}>
        <div>
          <h3>{selectedLocation.description}</h3>
          <p>{selectedLocation.description}</p>
        </div>
        </InfoWindow>
      )} */}
      </GoogleMap>
    </LoadScript>
  );
}
