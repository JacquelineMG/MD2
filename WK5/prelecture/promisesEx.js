// Promises Example

const boilWater = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    return reject("The power's out!");
  });
};

const putPastaInWater = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    return reject("There're no noodles!");
  });
};


boilWater()
  .then(() => putPastaInWater())
  .then(() => console.log("Success: The noodles are in the pot!"))
  .catch((error) => console.log("There's been an error:", error));