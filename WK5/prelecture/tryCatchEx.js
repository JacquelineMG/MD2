// Handling inputs
const logNameOfUserObject = userObj => {
  try {
    console.log(userObj.name);
  } catch (error) {
    console.log("There was an error:", error.message);
  }
};

logNameOfUserObject();




// const someName = "Mike";

// try {
//   someName = "Beth";
// }
// catch (error) {
//   console.log("There was an error", error.message);
// }

// console.log(someName);