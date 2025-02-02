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
})();
