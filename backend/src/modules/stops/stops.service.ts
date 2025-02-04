import axios from 'axios';
import * as xml2js from 'xml2js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextArrivalsParams } from './interfaces/next-arrivals.inteface';
import { NextArrivalsResponse } from './dto/responses/next-arrivals-response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stop } from './entities/stop.entity';
import { NearestStopsResponse } from './dto/responses/nearest-stops-response.dto';

@Injectable()
export class StopsService {
  constructor(
    private configService: ConfigService,
    @InjectRepository(Stop)
    private stopsRepository: Repository<Stop>,
  ) {}

  async nextArrivals({
    stopIdentifier,
    lineCode,
  }: NextArrivalsParams): Promise<NextArrivalsResponse> {
    return await this.fetchNextArrivals({
      stopIdentifier,
      lineCode,
    });
  }

  async findNearestStops(
    page: number,
    pageSize: number,
    latitude: number,
    longitude: number,
    radius: number,
  ): Promise<NearestStopsResponse> {
    try {
      const [stops, totalItems] = await this.stopsRepository
        .createQueryBuilder('stops')
        .addSelect(
          `
          (6371 * acos(
        cos(:latitude * pi() / 180) * cos(stops.lat::double precision * pi() / 180) * cos(stops.lng::double precision * pi() / 180 - :longitude * pi() / 180) + 
        sin(:latitude * pi() / 180) * sin(stops.lat::double precision * pi() / 180)
          ))`,
          'distance',
        )
        .leftJoinAndSelect('stops.lines', 'line')
        .where(
          `
          (6371 * acos(
        cos(:latitude * pi() / 180) * cos(stops.lat::double precision * pi() / 180) * cos(stops.lng::double precision * pi() / 180 - :longitude * pi() / 180) + 
        sin(:latitude * pi() / 180) * sin(stops.lat::double precision * pi() / 180)
          )) <= :radius
        `,
          { latitude, longitude, radius },
        )
        .orderBy('distance')
        .skip((page - 1) * pageSize)
        .take(pageSize)
        .getManyAndCount();

      return {
        message: 'Nearest stops fetched successfully',
        result: {
          data: stops,
          totalItems,
          totalPages: Math.ceil(stops.length / pageSize),
          currentPage: page,
          pageSize: pageSize,
        },
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: error.message ?? 'Error fetching nearest stops',
        statusCode: 500,
      };
    }
  }

  private async fetchNextArrivals({
    stopIdentifier,
    lineCode,
  }: NextArrivalsParams): Promise<NextArrivalsResponse> {
    const url = this.configService.get<string>('WS_URL');
    const config = this.getSoapConfig('RecuperarProximosArribos');
    const soapRequest = this.buildSoapRequest(stopIdentifier, lineCode);

    try {
      const response = await axios.post(url, soapRequest, config);
      return this.parseSoapResponse(response.data);
    } catch (error) {
      return {
        message: error.message ?? 'Error fetching next arrivals',
        statusCode: 500,
      };
    }
  }

  private getSoapConfig(action: string) {
    return {
      headers: {
        'Content-Type': 'application/soap+xml;charset=UTF-8',
        SOAPAction: `${this.configService.get<string>('WS_NAMESPACE')}/${action}`,
      },
    };
  }

  private buildSoapRequest(stopIdentifier: string, lineCode: string): string {
    return (
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
      '</codigoLineaParada>' +
      '      <identificadorParada>' +
      stopIdentifier +
      '</identificadorParada>' +
      '      <codigoAplicacion>24</codigoAplicacion>' +
      '      <localidad>CORRIENTES</localidad>' +
      '      <isSublinea>false</isSublinea>' +
      '      <isSoloAdaptados>false</isSoloAdaptados>' +
      '    </RecuperarProximosArribos>' +
      '  </soap12:Body>' +
      '</soap12:Envelope>'
    );
  }

  private parseSoapResponse(data: any): Promise<NextArrivalsResponse> {
    return new Promise((resolve, reject) => {
      xml2js.parseString(data, (err, result) => {
        if (err) {
          reject('Error parsing XML');
          return;
        }

        const arrivals = JSON.parse(
          result['soap:Envelope']['soap:Body'][0][
            'RecuperarProximosArribosResponse'
          ][0]['RecuperarProximosArribosResult'][0],
        );

        if (arrivals.CodigoEstado !== 0) {
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
    });
  }
}
