import { useState, useEffect } from "react";
import io from "socket.io-client";

const useSocket = (url, opts) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socketio = io(url, opts);
    setSocket(socketio);
    console.log("set socket");
    const cleanConnect = () => {
      socketio.disconnect();
    };
    return cleanConnect();
  }, [url, opts]);
  console.log(socket);
  return socket;
};

export default useSocket;
