const needle = require('needle');

const fetchMyIP = () => {
  return needle('get', 'https://api.ipify.org?format=json')
    .then((response) => {
      const body = response.body;
      const ip = body.ip;
      return ip;
    });

};

const fetchCoordsByIP = ip => {
  const url = `http://ipwho.is/${ip}`;

  return needle('get', url)
    .then((response) => {
      const body = response.body;
      const latitude = body.latitude;
      const longitude = body.longitude;
      return {latitude, longitude};
    });
};

const fetchISSFlyOverTimes = coords => {
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  return needle('get', url)
    .then((response) => {
      const body = response.body;
      const passtimes = body.response;
      return passtimes;
    });
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then((ip) => fetchCoordsByIP(ip))
    .then((coords) => fetchISSFlyOverTimes(coords))
    .then((passtimes) => {
      return passtimes;
    });
};


module.exports = { nextISSTimesForMyLocation };