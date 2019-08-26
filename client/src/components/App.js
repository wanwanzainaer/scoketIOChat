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
      <div className="entrance">
        <div className="entrance__container">
          <h1 className="heading-primary">
            <span className="heading-primary--main">random</span>
            <span className="heading-primary--sub">chat room</span>
          </h1>
          <div className="entrance__container-connectbox">
            <input
              value={state.handleInput}
              onChange={e => handleUserInput(e)}
              placeholder="Please enter your name"
              className="entrance__container-connectbox-input"
            />
            <button
              className="waves-effect waves-light btn "
              onClick={() => onClickButton()}
            >
              Connection for chat
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default App;
