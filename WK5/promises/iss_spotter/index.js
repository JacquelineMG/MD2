const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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
  
    console.log(coords);
  });
});