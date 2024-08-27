const net = require("net");

const server = net.createServer();

server.on("connection", (client) => {
  console.log("New client connected");

  client.write("Welcome!");

  client.setEncoding("utf8");

  client.on("data", (data) => {
    console.log("Request from client:", data);
  });

});

server.listen(3333, () => {
  console.log("Server listening on port 3333");
});