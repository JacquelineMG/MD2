const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are connected!");
    conn.write("Name: JMG");
    conn.write("Move: up");
    setTimeout(() => {
      conn.write("Move: up");
    }, 3000);
    setTimeout(() => {
      conn.write("Move: right");
    }, 5000);
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = connect;