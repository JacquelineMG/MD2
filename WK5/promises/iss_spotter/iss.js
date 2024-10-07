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

    if (!body.success) {
      const msg = `Success status was ${body.success}. Server message says: ${body.message} when fetching for IP ${body.ip}`;
      callback(Error(msg), null);
      return;
    }

    const latitude = body.latitude;
    const longitude = body.longitude;
    const data = { latitude, longitude };

    callback(null, data);

  });
};

const fetchISSFlyOverTimes = (coords, callback) => {
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  needle.get(url, (err, resp, body) => {
   
    if (err) return callback(err, null);

    if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode}. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    callback(null, body.response);
  });
};


const nextISSTimesForMyLocation = callback => {

};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };