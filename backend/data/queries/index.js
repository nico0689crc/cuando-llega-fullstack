const xml2js = require('xml2js');
const { readFile } = require('./utils');

(async () => {
  const xml = await readFile('./header.xml');

  const parser = new xml2js.Parser();

  parser.parseString(xml, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    console.log(result);
  });
})();
