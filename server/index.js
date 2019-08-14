const express = require("express");
const app = express();
const socketio = require("socket.io");

const expressServer = app.listen(5000, () => {
  console.log("success");
});

const io = new socketio(expressServer);
io.on("connection", socket => {
  //   console.log("some on connect");
  socket.emit("msgFromServer", {
    data: "successful connection"
  });
  socket.on("senNewMessageToServer", msg => {
    const username = socket.handshake.query.username;

    io.emit("receiveFromServer", { username, text: msg.text });
  });
});
