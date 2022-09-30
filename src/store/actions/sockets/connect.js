/**
 * @fileOverview src/actions/error.js
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import socketIOClient from "socket.io-client";

function connectToServer() {
  if (!process.env.REACT_APP_ENABLE_SOCKET_CLIENT) {
    return socketIOClient(process.env.REACT_APP_SOCKET_CLIENT_ENDPOINT);
  }
  return null;
}
export const connect = (prevState, action) => {
  const newState = prevState;
  const socketClient = connectToServer();
  console.log(socketClient);
  if (socketClient.connected) {
      newState.socketClient = socketClient;
  } else {
    socketClient.close();
    newState.socketClient = {};
  }
  return {...newState};
};
