'use client';
import { GoogleMap, InfoWindow, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { useState } from 'react';

interface PathType {
  lat: number;
  lng: number;
  description: string;
}

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState<PathType | null>(null);

  const path: PathType[] = [
    {
        lat: -27.505301,
        lng: -58.787586,
        description: 'PIRAYUI - PUERTO - CUBA - CABECERA'
      },
      {
        lat: -27.505543,
        lng: -58.785771,
        description: 'PIRAYUI - PUERTO - CUBA - TURIN IDA'
      },
      {
        lat: -27.505758,
        lng: -58.784185,
        description: 'PIRAYUI - PUERTO - CUBA - FRIAS'
      },
      {
        lat: -27.505981,
        lng: -58.782982,
        description: 'PIRAYUI - PUERTO - CUBA - BARRIOS RAFAEL IDA'
      },
      {
        lat: -27.506133,
        lng: -58.781383,
        description: 'PIRAYUI - PUERTO - CUBA - CARDOZO JUAN IDA'
      },
      {
        lat: -27.506324,
        lng: -58.780208,
        description: 'PIRAYUI - PUERTO - CUBA - GONZALEZ EVARISTO IDA'
      },
      {
        lat: -27.504767,
        lng: -58.779804,
        description: 'PIRAYUI - PUERTO - GONZALEZ EVARISTO Y SUECIA IDA'
      },
      {
        lat: -27.503545,
        lng: -58.779611,
        description: 'PIRAYUI - PUERTO - GONZALEZ EVARISTO - NICARAGUA IDA'
      },
      {
        lat: -27.502065,
        lng: -58.779601,
        description: 'PIRAYUI - PUERTO - TRENTO - TUPA AMARU IDA'
      },
      {
        lat: -27.50166,
        lng: -58.778522,
        description: 'PIRAYUI - PUERTO - TUPAC AMARU - GUILLERMO NUÑEZ IDA'
      },
      {
        lat: -27.50069,
        lng: -58.775768,
        description: 'PIRAYUI - PUERTO - RUTA 12 - TUPAC AMATU IDA'
      },
      {
        lat: -27.496303,
        lng: -58.777189,
        description: 'PIRAYUI - PUERTO - RUTA 12 - PJE. VERONA IDA'
      },
      {
        lat: -27.494298,
        lng: -58.778038,
        description: 'PIRAYUI - PUERTO - RUTA 12 - BOCA UNIDOS IDA'
      },
      {
        lat: -27.490669,
        lng: -58.779558,
        description: 'PIRAYUI - PUERTO - RUTA 12 - AV. JUAN DOMINGO PERÓN IDA'
      },
      {
        lat: -27.4905,
        lng: -58.781235,
        description: 'PIRAYUI - PUERTO - AV. CAZADORES - TRENTO IDA'
      },
      {
        lat: -27.490098,
        lng: -58.783693,
        description: 'PIRAYUI - PUERTO - AV. J. DOMINGO PERÓN - TURIN'
      },
      {
        lat: -27.489732,
        lng: -58.786177,
        description: 'PIRAYUI - PUERTO - AV. J. DOMINGO PERÓN - DUMAS'
      },
      {
        lat: -27.489465,
        lng: -58.787834,
        description: 'PIRAYUI - PUERTO - AV. J. DOMINGO PERÓN - PAUL GROUSSAC'
      },
      {
        lat: -27.489132,
        lng: -58.789412,
        description: 'PIRAYUI - PUERTO - AV. J. DOMINGO PERÓN - SÁNCHEZ DE BUSTAMANTE IDA'
      },
      {
        lat: -27.488616,
        lng: -58.7918,
        description: 'PIRAYUI - PUERTO - AV. JUAN DOMINGO PERÓN - THAMES'
      },
      {
        lat: -27.487963,
        lng: -58.795475,
        description: 'PIRAYUI - PUERTO - AV. JUAN DOMINGO PERÓN - AV. MONTECARLO'
      },
      {
        lat: -27.487668,
        lng: -58.797786,
        description: 'PIRAYUI - PUERTO - AV. JUAN DOMINGO PERÓN - JOSÉ DARRAGUEIRA'
      },
      {
        lat: -27.486367,
        lng: -58.799208,
        description: 'PIRAYUI - PUERTO - MEDRANO - LAMADRID'
      },
      {
        lat: -27.485233,
        lng: -58.798996,
        description: 'PIRAYUI - PUERTO - MEDRANO - LAS HERAS'
      },
      {
        lat: -27.483148,
        lng: -58.798617,
        description: 'PIRAYUI - PUERTO - MEDRANO - LLAVALLE'
      },
      {
        lat: -27.481335,
        lng: -58.798447,
        description: 'PIRAYUI - PUERTO - AV. INDEPENDENCIA - MEDRANO IDA'
      },
      {
        lat: -27.480701,
        lng: -58.800675,
        description: 'PIRAYUI - PUERTO - AV. INDEPENDENCIA - LAS PIEDRAS IDA'
      },
      {
        lat: -27.480225,
        lng: -58.802306,
        description: 'PIRAYUI - PUERTO - AV. INDEPENDENCIA - PASAJE BIRAN IDA'
      },
      {
        lat: -27.479686,
        lng: -58.804305,
        description: 'PIRAYUI - PUERTO - AV. INDEPENDENCIA - RESOAGLI - IDA'
      },
      {
        lat: -27.479296,
        lng: -58.806182,
        description: 'PIRAYUI - PUERTO - AV. INDEPENDENCIA - GUEMES IDA'
      },
      {
        lat: -27.479118,
        lng: -58.807731,
        description: 'PIRAYUI - PUERTO - AV. INDEPENDENCIA - GUEMES IDA'
      },
      {
        lat: -27.47891,
        lng: -58.809578,
        description: 'PIRAYUI - PUERTO - AV. INDEPENDENCIA - JUAN JOSÉ CASTELLI IDA'
      },
      {
        lat: -27.478659,
        lng: -58.812157,
        description: 'PIRAYUI - PUERTO - AV. INDEPENDENCIA-SAAVEDRA'
      },
      {
        lat: -27.478184,
        lng: -58.815057,
        description: 'PIRAYUI - PUERTO - AV. PEDRO FERRÉ - CARREFOUR IDA'
      },
      {
        lat: -27.477913,
        lng: -58.817481,
        description: 'PIRAYUI - PUERTO - AV. PEDRO FERRÉ - ESCUELA HOGAR IDA'
      },
      {
        lat: -27.477494,
        lng: -58.820646,
        description: 'PIRAYUI - PUERTO - AV. PEDRO FERRÉ PQUIA SANTA ROSA IDA'
      },
      {
        lat: -27.47728,
        lng: -58.822609,
        description: 'PIRAYUI - PUERTO - AV. PEDRO FERRÉ - PERÚ IDA'
      },
      {
        lat: -27.476965,
        lng: -58.825184,
        description: 'PIRAYUI - PUERTO - AV. PEDRO FERRÉ - BRASIL IDA'
      },
      {
        lat: -27.476651,
        lng: -58.827692,
        description: 'PIRAYUI - PUERTO - AV. PEDRO FERRÉ-PARAGUAY'
      },
      {
        lat: -27.47623,
        lng: -58.831108,
        description: 'PIRAYUI - PUERTO - AV. PEDRO FERRÉ - SANTA F{E'
      },
      {
        lat: -27.474767,
        lng: -58.833769,
        description: 'PIRAYUI - PUERTO - CATAMARCA Y RIVADAVIA IDA'
      },
      {
        lat: -27.472211,
        lng: -58.833506,
        description: 'PIRAYUI - PUERTO - CATAMARCA Y BELGRANO IDA'
      },
      {
        lat: -27.469951,
        lng: -58.833302,
        description: 'PIRAYUI - PUERTO - CATAMARCA - SAN MARTIN'
      },
      {
        lat: -27.468143,
        lng: -58.833098,
        description: 'PIRAYUI - PUERTO - CATAMARCA - JUNIN'
      },
      {
        lat: -27.464818,
        lng: -58.832684,
        description: 'PIRAYUI - PUERTO - CATAMARCA - 25 DE MAYO'
      },
      {
        lat: -27.4632,
        lng: -58.832459,
        description: 'PIRAYUI - PUERTO - CATAMARCA - QUINTANA'
      },
      {
        lat: -27.461544,
        lng: -58.832255,
        description: 'PIRAYUI - PUERTO - CATAMARCA - AVENIDA JUAN TORRES DE VERA Y ARAGON'
      },
      {
        lat: -27.4611,
        lng: -58.834545,
        description: 'PIRAYUI - PUERTO - AV. JUAN TORRES DE VERA Y ARAGON - MENDOZA IDA'
      }
  ];

  const pathVuelta: PathType[] = [
    {
        lat: -27.461584,
        lng: -58.838185,
        description: 'PUERTO - PIRAYUI - PUERTO IDA'
      },
      {
        lat: -27.462516,
        lng: -58.841313,
        description: 'PUERTO - PIRAYUI - TUCUMÁN - FRAY JOSÉ DE LA QUINTANA'
      },
      {
        lat: -27.465161,
        lng: -58.841518,
        description: 'PUERTO - PIRAYUI - TUCUMAN - PELLEGRINI'
      },
      {
        lat: -27.466281,
        lng: -58.83927,
        description: 'PUERTO - PIRAYUI - 9 DE JULIO - SALTA'
      },
      {
        lat: -27.46657,
        lng: -58.835642,
        description: 'PUERTO - PIRAYUI - 9 DE JULIO - MENDOZA'
      },
      {
        lat: -27.466898,
        lng: -58.832758,
        description: 'PUERTO - PIRAYUI - 9 DE JULIO - CATAMARCA'
      },
      {
        lat: -27.468659,
        lng: -58.830661,
        description: 'PUERTO - PIRAYUI - PLAZA CABRAL'
      },
      {
        lat: -27.472768,
        lng: -58.831085,
        description: 'PUERTO - PIRAYUI - SANTA FE-BELGRANO'
      },
      {
        lat: -27.47501,
        lng: -58.831332,
        description: 'PUERTO - PIRAYUI - SANTA FE - RIVADAVIA'
      },
      {
        lat: -27.47678,
        lng: -58.830034,
        description: 'PUERTO - PIRAYUI - AV. PEDRO FERRÉ - ESPAÑA'
      },
      {
        lat: -27.477142,
        lng: -58.827352,
        description: 'PUERTO - PIRAYUI - AV. PEDRO FERRÉ - PARAGUAY VTA'
      },
      {
        lat: -27.477427,
        lng: -58.824951,
        description: 'PUERTO - PIRAYUI - AV. PEDRO FERRÉ - BRASIL VTA'
      },
      {
        lat: -27.477767,
        lng: -58.822301,
        description: 'PUERTO - PIRAYUI - AV. PEDRO FERRÉ - PERÚ VTA'
      },
      {
        lat: -27.477988,
        lng: -58.819688,
        description: 'PUERTO - PIRAYUI - AV. PEDRO FERRÉ - SANTA ROSA'
      },
      {
        lat: -27.478697,
        lng: -58.814476,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - AV. CHACABUCO VTA'
      },
      {
        lat: -27.47899,
        lng: -58.812254,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - SAAVEDRA VTA'
      },
      {
        lat: -27.479319,
        lng: -58.809674,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - JUAN JOSÉ CASTELLI VTA'
      },
      {
        lat: -27.479614,
        lng: -58.807356,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - GUEMES'
      },
      {
        lat: -27.480076,
        lng: -58.80426,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - RESOAGLI VTA'
      },
      {
        lat: -27.480714,
        lng: -58.80197,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - NIÑO JESÚS'
      },
      {
        lat: -27.481846,
        lng: -58.798006,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - MEDRANO VTA'
      },
      {
        lat: -27.482722,
        lng: -58.795067,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - AV. MONTECARLO'
      },
      {
        lat: -27.483526,
        lng: -58.792366,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - PEDRO ARÁOZ'
      },
      {
        lat: -27.484012,
        lng: -58.789977,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - GODOY CRUZ VTA'
      },
      {
        lat: -27.484193,
        lng: -58.787033,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - PAUL GROUSSAC VTA'
      },
      {
        lat: -27.484354,
        lng: -58.785021,
        description: 'PUERTO - PIRAYUI - AV. INDEPENDENCIA - DUMAS VTA'
      },
      {
        lat: -27.486394,
        lng: -58.781476,
        description: 'PUERTO - PIRAYUI - RUTA 12 - LAVALLE BRIDGESTONE'
      },
      {
        lat: -27.494223,
        lng: -58.778173,
        description: 'PUERTO - PIRAYUI - RUTA 12 - BOCA UNIDOS VUELTA'
      },
      {
        lat: -27.495897,
        lng: -58.777483,
        description: 'PUERTO - PIRAYUI - RUTA 12 - PJE. VERONA VUELTA'
      },
      {
        lat: -27.500612,
        lng: -58.775597,
        description: 'PUERTO - PIRAYUI - RUTA 12 - TUPAC AMATU VUELTA'
      }
  ]

  const greenMarker = {
    url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB_2XrRYPlbTXrT2z0kC_InrwRzjpu6FmY">
      <GoogleMap
        mapContainerStyle={{ height: '500px', width: '100%' }}
        center={path[0]}
        zoom={13}
      >
        <Polyline path={path} options={{ strokeColor: '#0000FF', strokeWeight: 4 }} />
        <Polyline path={pathVuelta} options={{ strokeColor: '#ff000025', strokeWeight: 4 }} />

        {/* {path.map((parada, index) => (
          <Marker
            key={index} position={{ lat: parada.lat, lng: parada.lng }} 
            title={parada.description} icon={greenMarker} 
            onClick={() => setSelectedLocation(parada)} // Abre el popup al hacer clic

          />
        ))} */}

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
