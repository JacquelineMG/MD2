const net = require("net");

const conn = net.createConnection({
  host: "localhost",
  port: 3333
});

conn.on("data", data => {
  console.log("Server says:", data);
});

conn.on("connect", () => {
  conn.write("Hello from client");
});


const filePath = process.argv[2];


const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }
  if (filePath) {
    if (key === "\u000D") {
      conn.write(filePath);
    }
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

setupInput();

conn.setEncoding("utf8");