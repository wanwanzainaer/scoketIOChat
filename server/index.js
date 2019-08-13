const express = require("express");
const app = express();
const SocketIO = require("socket.io");

const expressServer = app.listen(5000, () => {
  console.log("success");
});

const io = new SocketIO(expressServer);

io.on("connect", socket => {
  socket.emit("msgFromServer", {
    data: "successful connection"
  });
  socket.on("senNewMessageToServer", msg => {
    console.log(msg);
    socket.emit("receiveFromServer", { text: msg.text });
  });
});
