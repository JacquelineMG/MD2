const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((err, ip) => {
  if (err) {
    console.log("ERROR:", err);
    return;
  }

  fetchCoordsByIP(ip, (err, coords) => {
    if (err) {
      console.log("ERROR:", err);
      return;
    }

    fetchISSFlyOverTimes(coords, (err, data) => {
      if (err) {
        console.log("ERROR:", err);
        return;
      }

      console.log(data);
    });
  
  });
});