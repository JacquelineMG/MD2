const { nextISSTimesForMyLocation } = require('./iss');


const printPassTimes = passTimes => {
  
  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);

    console.log(`Next pass at ${dateTime} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((err, passTimes) => {
  if (err) {
    return console.log("There's been an error!", err);
  }

  printPassTimes(passTimes);
  
});