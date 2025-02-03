import axios from 'axios';
import * as xml2js from 'xml2js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextArrivalsParams } from './interfaces/next-arrivals.inteface';
import { NextArrivalsResponse } from './dto/responses/next-arrivals-response.dto';
import { NextArrivalsData } from './types/next-arrivals-data.type';

@Injectable()
export class StopsService {
  constructor(private configService: ConfigService) {}

  async nextArrivals({
    stopIdentifier,
    lineCode,
  }: NextArrivalsParams): Promise<NextArrivalsResponse> {
    return await this.fetchNextArrivals({
      stopIdentifier,
      lineCode,
    });
  }

  private fetchNextArrivals({
    stopIdentifier,
    lineCode,
  }: NextArrivalsParams): Promise<NextArrivalsResponse> {
    return new Promise(async (resolve, reject) => {
      const url = this.configService.get<string>('WS_URL');

      const config = {
        headers: {
          'Content-Type': 'application/soap+xml;charset=UTF-8',
          SOAPAction:
            this.configService.get<string>('WS_NAMESPACE') +
            '/RecuperarProximosArribos',
        },
      };

      const soapRequest =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap12:Envelope xmlns:xsi="http://www.w3.org/XMLSchema-instance" xmlns:xsd="http://www.w3.org/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
        '  <soap12:Body>' +
        '    <RecuperarProximosArribos xmlns="http://clsw.smartmovepro.net/">' +
        '      <usuario>' +
        this.configService.get<string>('WS_USER') +
        '</usuario>' +
        '      <clave>' +
        this.configService.get<string>('WS_PASSWORD') +
        '</clave>' +
        '      <codigoLineaParada>' +
        lineCode +
        '</codigoLineaParada>' + // Modificar con el código de línea deseado
        '      <identificadorParada>' +
        stopIdentifier +
        '</identificadorParada>' +
        '      <codigoAplicacion>24</codigoAplicacion>' +
        '      <localidad>CORRIENTES</localidad>' +
        '      <isSublinea>false</isSublinea>' +
        '      <isSoloAdaptados>false</isSoloAdaptados>' +
        '    </RecuperarProximosArribos>' +
        '  </soap12:Body>' +
        '</soap12:Envelope>';

      await axios
        .post(url, soapRequest, config)
        .then(async (response) => {
          xml2js.parseString(response.data, (err, response) => {
            if (err) {
              reject('Error al parsear XML');
              return;
            }

            const arrivals = JSON.parse(
              response['soap:Envelope']['soap:Body'][0][
                'RecuperarProximosArribosResponse'
              ][0]['RecuperarProximosArribosResult'][0],
            );

            if(arrivals.CodigoEstado === -1){
              resolve({
                message: arrivals.MensajeEstado,
                statusCode: 400,
              });
            }

            resolve({
              message: 'Next arrivals fetched successfully',
              result: arrivals.arribos.map((arrival) => ({
                line_description: arrival.DescripcionLinea,
                flag_description: arrival.DescripcionBandera,
                arrival: arrival.Arribo,
                latitude: arrival.Latitud,
                longitude: arrival.Longitud,
                stop_latitude: arrival.LatitudParada,
                stop_longitude: arrival.LongitudParada,
                stop_line_code: arrival.CodigoLineaParada,
                short_flag_description: arrival.DescripcionCortaBandera,
                flag_sign_description: arrival.DescripcionCartelBandera,
                is_adapted: arrival.EsAdaptado,
                car_identifier: arrival.IdentificadorCoche,
                driver_identifier: arrival.IdentificadorChofer,
                schedule_deviation: arrival.DesvioHorario,
                last_gps_date: arrival.UltimaFechaHoraGPS,
                error_message: arrival.MensajeError,
                position: `https://www.google.com/maps/search/?api=1&query=${arrival['Latitud']},${arrival['Longitud']}`,
              })),
              statusCode: 200,
            });
          });
        })
        .catch((error) =>
          resolve({
            message: error.message ?? 'Error fetching next arrivals',
            statusCode: 500,
          })
        );
    });
  }
}
