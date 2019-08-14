import React from "react";

const ChatRoomList = ({ chatList }) => {
  const ListItems = chatList.map((msg, index) => {
    return (
      <li key={index}>
        <p>
          {msg.username}:<span>{msg.text}</span>
        </p>
      </li>
    );
  });
  const Items = <ul className="chatul">{ListItems}</ul>;

  return <>{Items}</>;
};
export default ChatRoomList;
