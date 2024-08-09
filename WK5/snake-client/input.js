let connection;

const handleUserInput = key => {
  if (key === "w" || key === "W") {
    connection.write("Move: up");
  }

  if (key === "a" || key === "A") {
    connection.write("Move: left");
  }

  if (key === "s" || key === "S") {
    connection.write("Move: down");
  }

  if (key === "d" || key === "D") {
    connection.write("Move: right");
  }

  if (key === "\u0003") {
    process.exit();
  }

  if (key === "p" || key === "P") {
    connection.write("Say: It's sithering time!");
  }

  if (key === "o" || key === "O") {
    connection.write("Say: SSSSSsssss");
  }

  if (key === "i" || key === "I") {
    connection.write("Say: Hisssss");
  }

  if (key === "l" || key === "L") {
    connection.write("Say: Making hissstory!");
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