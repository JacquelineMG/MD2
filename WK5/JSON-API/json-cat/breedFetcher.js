const needle = require("needle");


const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  needle.get(`${url}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      if (body.length === 0) {
        callback(null, "Sorry, I haven't got anything to share about that kind of cat!");
      }
      if (body.length > 0) {
        callback(null, `${body[0].name}: ${body[0].description}`);
      }
    }
  
  });
};


module.exports = { fetchBreedDescription };

