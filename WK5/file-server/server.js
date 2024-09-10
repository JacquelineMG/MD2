const net = require("net");

const server = net.createServer();

const fs = require('node:fs');

server.on("connection", (client) => {
  console.log("New client connected");

  client.write("Welcome!");

  client.setEncoding("utf8");

  client.on("data", (data) => {
    console.log("Request from client:", data);

    fs.readFile(data, "utf8", (err, text) => {
      if (err) {
        client.write("I can't find that file.");
      } else {
        client.write(`Here is the data you requested: 
        
          ${text}`);
      }

    });

  });

});

server.listen(3333, () => {
  console.log("Server listening on port 3333");
});