const {
  getLines,
  getStopsByLines,
  writeFile,
  createStopsFile,
} = require('./utils');
const fs = require('fs');

(async () => {
  const lines = await getLines();

  const promises = lines.map((line) => getStopsByLines(line));
  const results = await Promise.all(promises);

  writeFile(
    './stops-by-lines.json',
    results,
    () => {
      console.log('Archivo stops-by-lines.json creado correctamente');
    },
    () => {
      console.error('Error al escribir el archivo');
    },
  );

  createStopsFile();

  // const fs = require('fs');

  // // Function to map stops to the lines that pass through them
  // const getLinesByStop = (busData) => {
  // 	const stopMap = {};

  // 	busData.forEach(line => {
  // 		if(line.stops){
  // 			Object.keys(line.stops).forEach(stopKey => {
  // 				line.stops[stopKey].forEach(stop => {
  // 					const stopCodigo = stop.Codigo;
  // 					if (!stopMap[stopCodigo]) {
  // 						stopMap[stopCodigo] = {
  // 							identificador: stop.Identificador,
  // 							descripcion: stop.Descripcion,
  // 							latitud: stop.LatitudParada,
  // 							longitud: stop.LongitudParada,
  // 							lines: []
  // 						};
  // 					}
  // 					stopMap[stopCodigo].lines.push({
  // 						line_code: line.line_code,
  // 						line_description: line.line_description,
  // 						AbreviaturaBandera: line.AbreviaturaBandera,
  // 						AbreviaturaAmpliadaBandera: line.AbreviaturaAmpliadaBandera,
  // 						AbreviaturaBanderaGIT: line.AbreviaturaBanderaGIT,
  // 					});
  // 				});
  // 			});
  // 		}
  // 	});

  // 	return stopMap;
  // };

  // // Example of reading the file and processing the data
  // fs.readFile('./stops.json', 'utf8', (err, data) => {
  // 	if (err) {
  // 		console.error('Error reading file:', err);
  // 		return;
  // 	}

  // 	const busData = JSON.parse(data); // Assuming the JSON data structure is correct

  // 	const stopLines = getLinesByStop(busData.data);
  // 	console.log(stopLines);
  // });
})();
