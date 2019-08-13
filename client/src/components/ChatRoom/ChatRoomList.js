import React, { useState } from "react";

const ChatRoomList = ({ socket }) => {
  const [state, setState] = useState({ chatRecode: [] });
  socket.on("receiveFromServer", ({ text }) => {
    let chatRecode = state.chatRecode;
    chatRecode = [...chatRecode, text];
    setState({ chatRecode });
  });

  return (
    <div>
      <ul>
        {state.chatRecode.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </div>
  );
};
export default ChatRoomList;
