import { Server } from "socket.io";
//create a handler which will take the req and res - a basic socket api
const SocketHandler = (req, res) => {
  console.log("called api");
  // Whenever this api call is made, a new socket server will be initiated everytime which is not desired
  //So, check if the socket server is already set up
  if (res.socket.server.io) {
    console.log("Socket already running");
  } else {
    //create a new socket server
    const io = new Server(res.socket.server);
    //set up the server in the response
    res.socket.server.io = io;
    //This gives the socket to which it is connected
    //Whenever any browser establishes a web socket connection, the callback function will be executed.
    // In the callback function, we get a socket connection to that client. This socket connection will be used to broadcast events to other clients or rooms,
    // listen for events, emit events etc on demand basis.
    io.on("connection", (socket) => {
      console.log("Server is connected");
    });
  }
  //To tell the client that the api has finished running
  res.end();
};

export default SocketHandler;
