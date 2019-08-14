import React from "react";

const ChatRoomList = ({ chatList }) => {
  const ListItems = chatList.map((msg, index) => {
    return (
      <li key={index}>
        {msg.username}:{msg.text}
      </li>
    );
  });
  const Items = <ul>{ListItems}</ul>;

  return <>{Items}</>;
};
export default ChatRoomList;
