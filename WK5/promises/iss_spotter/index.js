const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((err, ip) => {
  if (err) {
    console.log("ERROR:", err);
    return;
  }
  
  fetchCoordsByIP(ip, (err, data) => {
    if (err) {
      console.log("ERROR:", err);
      return;
    }
  
    console.log(data);
  });
});