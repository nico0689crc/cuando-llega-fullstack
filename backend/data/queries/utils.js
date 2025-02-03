const fs = require('fs');

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

module.exports = {
  readFile,
};
