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



// const handleUserInput = key => {
//   if (key === "\u0003") {
//     process.exit();
//   } else {
//     conn.write(key);
//   }
// };

// const setupInput = () => {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();

//   stdin.on("data", handleUserInput);

//   return stdin;
// };

// setupInput();

conn.setEncoding("utf8");