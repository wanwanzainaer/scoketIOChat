import React, { useState } from "react";
import ChatRoom from "./ChatRoom/ChatRoom";

const App = () => {
  const [state, setState] = useState({
    username: null,
    handleInput: ""
  });

  const handleUserInput = e => {
    const handleInput = e.target.value;
    setState({ ...state, handleInput });
  };
  const onClickButton = () => {
    setState({ username: state.handleInput, handleInput: "" });
  };
  const existChatRoom = () => {
    setState({ ...state, username: "" });
  };
  let content;
  if (state.username) {
    content = (
      <ChatRoom
        existChatRoom={existChatRoom}
        username={state.username}
      />
    );
  } else {
    content = (
      <div className="container" style={{ width: "60%" }}>
        <h4>Welcome</h4>
        <input
          value={state.handleInput}
          onChange={e => handleUserInput(e)}
          placeholder="Please enter your name"
        />
        <button onClick={() => onClickButton()}>
          Connection for chat
        </button>
      </div>
    );
  }

  return <>{content}</>;
};

export default App;
