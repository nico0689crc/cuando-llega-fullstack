const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const axios = require('axios');
require('dotenv').config({
  path: path.join(__dirname, '..', '..', '..', '.env'),
});

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        reject(err);
      }

      resolve(data);
    });
  });
};

const writeFile = (path, data, success, error) => {
  fs.writeFile(path, JSON.stringify({ data }, null, 2), 'utf8', (err) => {
    if (err) {
      error();
    }
    success();
  });
};

const parseToObject = (xml) => {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();

    parser.parseString(xml, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        reject(err);
      }

      resolve(result);
    });
  });
};

const parseToString = (object) => {
  const builder = new xml2js.Builder();
  return builder.buildObject(object);
};

const fetchData = async (xml, soapAction, callback) => {
  const config = {
    headers: {
      'Content-Type': 'application/soap+xml;charset=UTF-8',
      SOAPAction: process.env.WS_NAMESPACE + '/' + soapAction,
    },
  };

  const url = process.env.WS_URL;

  const headerXml = await readFile(
    path.join(__dirname, '..', './queries/header.xml'),
  );

  const headerXmlParsed = await parseToObject(headerXml);

  headerXmlParsed['soap12:Envelope']['soap12:Body'] = xml;

  const updatedXml = parseToString(headerXmlParsed);

  axios
    .post(url, updatedXml, config)
    .then(async (response) => {
      const responseParsed = await parseToObject(response.data);
      callback(responseParsed);
    })
    .catch((error) => {
      console.error('SOAP request error:', error);

      if (error.response) {
        console.error('Error body:', error.response.data);
      } else if (error.request) {
        console.error('Request not received by server:', error.request);
      } else {
        console.error('Request configuration error:', error.message);
      }
    });
};

const getLines = async () => {
  return new Promise(async (resolve, reject) => {
    const soapAction = 'RecuperarLineaPorEntidad';

    let linesXml = await readFile(
      path.join(__dirname, '..', './queries/lines.xml'),
    );

    linesXml = linesXml
      .replace('__user__', process.env.WS_USER)
      .replace('__password__', process.env.WS_USER_PASSWORD);

    const linesXmlParsed = await parseToObject(linesXml);

    fetchData(linesXmlParsed, soapAction, (response) => {
      const data = JSON.parse(
        response['soap:Envelope']['soap:Body'][0][
          'RecuperarLineaPorLocalidadResponse'
        ][0]['RecuperarLineaPorLocalidadResult'][0],
      );

      writeFile(
        path.join(__dirname, '..', './lines.json'),
        data.lineas,
        () => {
          resolve(data.lineas);
        },
        () => {
          reject('Error al escribir el archivo');
        },
      );
    });
  });
};

const getStopsByLines = async ({ CodigoLineaParada, Descripcion }) => {
  return new Promise(async (resolve, reject) => {
    const soapAction = 'RecuperarLineaPorEntidad';

    let linesXml = await readFile(
      path.join(__dirname, '..', './queries/stops.xml'),
    );

    linesXml = linesXml
      .replace('__user__', process.env.WS_USER)
      .replace('__password__', process.env.WS_USER_PASSWORD)
      .replace('__line__code__', CodigoLineaParada);

    const linesXmlParsed = await parseToObject(linesXml);

    fetchData(linesXmlParsed, soapAction, (response) => {
      const data = JSON.parse(
        response['soap:Envelope']['soap:Body'][0][
          'RecuperarParadasCompletoPorLineaResponse'
        ][0]['RecuperarParadasCompletoPorLineaResult'][0],
      );

      resolve({
        line_code: CodigoLineaParada,
        line_description: Descripcion,
        stops: data.paradas,
      });
    });
  });
};

const createStopsFile = async () => {
  const stopsByLines = await readFile(
    path.join(__dirname, '..', './stops-by-lines.json'),
  );
  const stopsByLinesParsed = JSON.parse(stopsByLines);

  const stopMap = {};

  stopsByLinesParsed.data.forEach((line) => {
    if (line.stops) {
      Object.keys(line.stops).forEach((stopKey) => {
        line.stops[stopKey].forEach((stop) => {
          if (!stopMap[stop.Codigo]) {
            stopMap[stop.Codigo] = {
              identificator: stop.Identificador,
              description: stop.Descripcion,
              lat: stop.LatitudParada,
              lng: stop.LongitudParada,
              lines: [],
            };
          }
          stopMap[stop.Codigo].lines.push({
            line_code: line.line_code,
            line_description: line.line_description,
            abbreviation_flag: stop.AbreviaturaBandera,
            expanded_abbreviation_flag: stop.AbreviaturaAmpliadaBandera,
            abbreviation_flag_git: stop.AbreviaturaBanderaGIT,
          });
        });
      });
    }
  });

  writeFile(
    './stops.json',
    stopMap,
    () => {
      console.log('Archivo stops.json creado correctamente');
    },
    () => {
      console.error('Error al escribir el archivo');
    },
  );
};

module.exports = {
  getLines,
  getStopsByLines,
  createStopsFile,
  writeFile,
};
