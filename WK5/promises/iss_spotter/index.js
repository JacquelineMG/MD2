const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log("ERROR:", err);
//     return;
//   }

//   fetchCoordsByIP(ip, (err, coords) => {
//     if (err) {
//       console.log("ERROR:", err);
//       return;
//     }

//     fetchISSFlyOverTimes(coords, (err, data) => {
//       if (err) {
//         console.log("ERROR:", err);
//         return;
//       }

//       console.log(data);
//     });
//   });
// });

nextISSTimesForMyLocation((err, passTimes) => {
  if (err) {
    return console.log("There's been an error!", err);
  }

  console.log(passTimes);
});