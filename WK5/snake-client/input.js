let connection;

const { MESSAGES, MOVE_KEYS } = require("./constants");

const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }

  for (const mk in MOVE_KEYS) {
    if (key === mk) {
      connection.write(MOVE_KEYS[mk]);
    }
  }

  for (const m in MESSAGES) {
    if (key === m) {
      connection.write(MESSAGES[m]);
    }
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