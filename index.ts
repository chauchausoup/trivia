var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/static/home.html");
});

app.get("/setter", (req, res) => {
  res.sendFile(__dirname + "/static/questions.html");
});

app.get("/answerer", (req, res) => {
  res.sendFile(__dirname + "/static/answer.html");
});


io.on("connection", (socket) => {
  //user is connected
  console.log(`A user connected.`);

  //user is disconnected
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });


  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    console.log(`Message: ${msg}`);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
