const needle = require('needle');

const fetchMyIP = callback => {
  needle.get('https://api.ipify.org?format=json', (err, resp, body) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, body);
    }
  });

};

module.exports = { fetchMyIP };