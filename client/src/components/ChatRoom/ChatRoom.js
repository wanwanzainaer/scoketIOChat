import React, {
  useState,
  useEffect,
  useReducer,
  useCallback
} from "react";
import socketio from "socket.io-client";
import "./ChatRoom.css";
import reducer from "../../reducer/reducer";
import ChatRoomList from "./ChatRoomList";
import ChatRoomBottom from "./ChatRoomBottom";

const initialState = [];

const ChatRoom = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [io, setIO] = useState(null);

  const initialMessageReciver = useCallback(io => {
    io.on("receiveFromServer", msg => {
      const recordingChat = ({ username, text }) => {
        dispatch({ type: "msg", payload: { username, text } });
      };
      recordingChat(msg);
    });
  }, []);

  useEffect(() => {
    if (io) {
      console.log(io);
      initialMessageReciver(io);
      console.log("connect success");
    } else {
      setIO(
        socketio(`http://localhost:5000?username=${props.username}`, {
          reconnect: true
        })
      );
    }
  }, [io, props.username, initialMessageReciver]);

  return (
    <>
      {" "}
      <header className="container">
        <h1>Welcome {props.username} to the Chat room</h1>
      </header>
      <main className="container">
        <ChatRoomList chatList={state} />
      </main>
      <ChatRoomBottom
        socket={io}
        existChatRoom={props.existChatRoom}
      />
    </>
  );
};

export default ChatRoom;
