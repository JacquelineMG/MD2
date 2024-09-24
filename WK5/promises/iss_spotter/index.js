const { fetchMyIP } = require('./iss');

fetchMyIP((err, ip) => {
  if (err) {
    console.log("NOPE :(", err);
    return;
  }

  console.log("YEP :)", ip);
});