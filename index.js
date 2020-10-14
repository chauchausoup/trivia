const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const PORT = process.env.PORT || 5000;
const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on("connection", (socket) => {
  console.log(`user is connected`);

  socket.on("questions", (arrayValue) => {
    console.log(arrayValue);
    io.sockets.emit("screenQs", arrayValue);
  });

  socket.on("answer", (input) => {
    console.log(input);
    io.sockets.emit("screenAns", input);
  });

  socket.on("disconnect", () => {
    console.log(`client disconnected`);
  });
});

server.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
