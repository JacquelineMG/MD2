const needle = require('needle');
const fs = require('node:fs');

const url = process.argv[2];
const filePath = process.argv[3];

needle.get(`${url}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
  }

  fs.writeFile(`${filePath}`, body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
  });
});