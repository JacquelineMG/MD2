const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((err, passTimes) => {
  if (err) {
    return console.log("There's been an error!", err);
  }

  for (const pass of  passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);

    console.log(`Next pass at ${dateTime} for ${pass.duration} seconds!`);
  }
});