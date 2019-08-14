import React, { useState } from "react";

const ChatRoomBottom = props => {
  const [state, setState] = useState({ text: "" });
  const inputHandler = e => {
    setState({ text: e.target.value });
  };
  const sendMessageToIO = () => {
    props.socket.emit("senNewMessageToServer", { text: state.text });
    setState({ text: "" });
  };
  return (
    <footer className="page-footer bottomBox">
      <div className="container">
        <input onChange={e => inputHandler(e)} value={state.text} />
        <button onClick={() => sendMessageToIO()}>Submit</button>
        <button onClick={() => props.existChatRoom()}>Exit</button>
      </div>
    </footer>
  );
};

export default ChatRoomBottom;
