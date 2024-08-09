let connection;

const { SPECIAL_KEYS } = require("./constants");

const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }

  if (SPECIAL_KEYS[key]) {
    connection.write(SPECIAL_KEYS[key]);
  }
};


const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = { setupInput };