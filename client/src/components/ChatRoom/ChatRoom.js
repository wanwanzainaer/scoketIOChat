import React from "react";
import socketIO from "socket.io-client";
import "./ChatRoom.css";
import ChatRoomList from "./ChatRoomList";
import ChatRoomBottom from "./ChatRoomBottom";

const ChatRoom = props => {
  const socket = socketIO("http://localhost:5000", {
    reconnection: true
  });

  return (
    <div className="container">
      <h1>Welcome {props.username} to the Chat room </h1>
      <ChatRoomList socket={socket} />
      <ChatRoomBottom
        socket={socket}
        existChatRoom={props.existChatRoom}
      />
    </div>
  );
};

export default ChatRoom;
