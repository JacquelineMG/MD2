// Callback Chaining

const boilWater = action => {
  console.log("Starting to boil water");

  setTimeout(() => {
    console.log("Water is boiling");
    action();
  }, 2000);
};


const putPastaInWater = action => {
  console.log("Pasta in the water");

  setTimeout(() => {
    console.log("Pasta is ready");
    action();
  }, 2000);
};

const fetchTomatoesAtGrocery = action => {
  console.log("Running to the grocery");

  setTimeout(() => {
    if (Math.random() > 0.5) {
      console.log("Tomatoes are here!");
      return action(false);
    }
    console.log("Oh no :(");
    return action(true);
  }, 2000);
};

boilWater(() => {
  putPastaInWater(() => {
    fetchTomatoesAtGrocery((error) => {
      if (error) {
        return console.log("Seems we'll have olive oil pasta");
      }
      return console.log("Meal is ready!");
    });
  });
});

