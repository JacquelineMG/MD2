const needle = require('needle');

needle.get(`http://www.example.edu`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
});
