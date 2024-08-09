const net = require("net");
const { IP, PORT } = require("./constants");

let initials = "JMG";

if (process.argv[2]) {
  initials = process.argv[2];
}

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are connected!");
    conn.write(`Name: ${initials}`);
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = { connect };