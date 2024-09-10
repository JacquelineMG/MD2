const net = require("net");

const conn = net.createConnection({
  host: "localhost",
  port: 3333
});

conn.on("data", data => {
  console.log("Server says:", data);
});

let filePath = process.argv[2];

conn.on("connect", () => {
  conn.write(filePath);
});


const handleUserInput = data => {
  if (data === "\u0003") {
    process.exit();
  }

  // if (filePath) {
  //   if (data === "\u000D") {
  //     conn.write(filePath);
  //   }
  // }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();

conn.setEncoding("utf8");