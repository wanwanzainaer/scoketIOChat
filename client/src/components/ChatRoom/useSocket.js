import { useState, useEffect } from "react";
import io from "socket.io-client";

const useSocket = (url, opts) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socketio = io(url, opts);
    setSocket(socketio);
    const cleanConnect = () => {
      socketio.disconnect();
    };
    return cleanConnect();
  }, [url, opts]);
  return socket;
};

export default useSocket;
