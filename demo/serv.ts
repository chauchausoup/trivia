const content = require("fs").readFileSync(__dirname + "/client.html", "utf8");

const httpServer = require("http").createServer((req, res) => {
  // serve the index.html file
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", Buffer.byteLength(content));
  res.end(content);
});

const io = require("socket.io")(httpServer);

io.on("connect", (socket) => {
  let counter = 0;
  setInterval(() => {
    //hello event sent
    socket.emit("hello", ++counter);
  }, 1000);

  //'hey' event from client

  socket.on("hey", (data) => {
    console.log("hey", data);
  });
});

httpServer.listen(3000, () => {
  console.log("go to http://localhost:3000");
});

