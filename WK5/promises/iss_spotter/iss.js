const needle = require('needle');

const fetchMyIP = callback => {
  needle.get('https://api.ipify.org?format=json', (err, resp, body) => {
    if (err) return callback(err, null);

    if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
      
    const ip = body.ip;
    callback(null, ip);
  }
  );
};

const fetchCoordsByIP = (ip, callback) => {
  const url = `http://ipwho.is/${ip}`;

  needle.get(url, (err, resp, body) => {
    if (err) return callback(err, null);

    if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const latitude = body.latitude;
    const longitude = body.longitude;
    const data = { latitude: latitude, longitude: longitude };

    callback(null, data);

  });

};

module.exports = { fetchMyIP, fetchCoordsByIP };