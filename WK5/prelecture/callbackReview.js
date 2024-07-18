const forEach = (array, action) => {
  for (const element of array) {
    action(element);
  }
};

const logThatElement = element => console.log(element);

const logThatElementFancy = element => console.log("🔥🔥🔥", element, "🔥🔥🔥");

const someArray = [1,2,3,4,5];

forEach(someArray, logThatElement);
forEach(someArray, logThatElementFancy);