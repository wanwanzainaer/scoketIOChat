import React, { useState, useEffect, useCallback } from "react";
import socketio from "socket.io-client";
import "./ChatRoom.css";

import ChatRoomList from "./ChatRoomList";
import ChatRoomBottom from "./ChatRoomBottom";

const ChatRoom = props => {
  const [io, setIO] = useState(null);
  const [state, setState] = useState({ chatRecord: [] });

  if (!io)
    setIO(
      socketio(`http://localhost:5000?username=${props.username}`),
      {
        reconnect: true
      }
    );

  const initReciveMessage = useCallback(() => {
    io.on("receiveFromServer", msg => {
      const recordingChat = ({ username, text }) => {
        let chat = state.chatRecord;
        chat.push({ username, text });
        setState({ chatRecord: chat });
      };
      recordingChat(msg);
    });
  }, [io]);

  useEffect(() => {
    if (io) {
      console.log("connect success");
      initReciveMessage();
    }
  }, [io, initReciveMessage]);

  return (
    <>
      {" "}
      <header className="container">
        <h1>Welcome {props.username} to the Chat room</h1>
      </header>
      <main className="container">
        <ChatRoomList chatList={state.chatRecord} />
      </main>
      <ChatRoomBottom
        socket={io}
        existChatRoom={props.existChatRoom}
      />
    </>
  );
};

export default ChatRoom;
