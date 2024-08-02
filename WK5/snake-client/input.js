const handleUserInput = key => {
  if (key === "w" || key === "W") {
    console.log("Move: up");
  }

  if (key === "a" || key === "A") {
    console.log("Move: left");
  }

  if (key === "s" || key === "S") {
    console.log("Move: down");
  }

  if (key === "d" || key === "D") {
    console.log("Move: right");
  }

  if (key === "\u0003") {
    process.exit();
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };