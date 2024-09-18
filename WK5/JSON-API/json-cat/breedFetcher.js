const needle = require("needle");

const input = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

needle.get(`${url}`, (error, response, body) => {
  if (error) {
    console.log("ERROR:", error);
  } else {
    if (body.length === 0) {
      console.log("Sorry, I have got anything to share about that kind of cat!");
    }
    if (body.length > 0) {
      console.log(`
      
${body[0].name}:
        
${body[0].description}
        `);
    }
  }

});