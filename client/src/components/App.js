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
      <div>
        <h1>Welcome</h1>
        <input
          value={state.handleInput}
          onChange={e => handleUserInput(e)}
        />
        <button onClick={() => onClickButton()}>
          Connection for chat
        </button>
      </div>
    );
  }

  return <div className="container">{content}</div>;
};

export default App;
