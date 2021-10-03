const port = process.env.PORT || 3000;
const app = require("./app");
const ws = require("ws");

const init = async () => {
  const server = app.listen(port, () =>
    console.log(`listening on port ${port}`)
  );
  const socketServer = new ws.Server({ server });
  let sockets = [];
  socketServer.on("connection", (socket) => {
    sockets.push(socket);
    socket.on("close", () => {
      sockets = sockets.filter((s) => s !== socket);
    });
    socket.on("message", (message) => {
      sockets
        .filter((s) => s !== socket)
        .forEach((socket) => socket.send(message.toString()));
    });
  });
};

init();
