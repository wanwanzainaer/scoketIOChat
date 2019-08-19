import React, { useState } from "react";

const ChatRoomBottom = props => {
  const [state, setState] = useState({ text: "" });
  const inputHandler = e => {
    setState({ text: e.target.value });
  };
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      return sendMessageToIO();
    }
  };
  const sendMessageToIO = () => {
    props.socket.emit("senNewMessageToServer", { text: state.text });
    setState({ text: "" });
  };

  const disconnectAndExistRoom = () => {
    props.socket.close();
    props.existChatRoom();
  };
  return (
    <footer className="page-footer bottomBox">
      <div className="container">
        <div className="row">
          <div className="col s9">
            <input
              onChange={e => inputHandler(e)}
              value={state.text}
              type="text"
              placeholder="Enter a message"
              onKeyPress={e => handleKeyDown(e)}
            />
          </div>
          <div className="col s2">
            <button
              className="waves-effect waves-light btn"
              onClick={() => sendMessageToIO()}
            >
              Submit
            </button>
          </div>
          <div className="col s1">
            <button
              className="waves-effect waves-light btn red"
              onClick={disconnectAndExistRoom}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ChatRoomBottom;
