const express = require("express");
const bodyParser = require('body-parser');
const socket = require('socket.io');
const port = 3000;

const app = express();

app.use(bodyParser.json());


const server = app.listen(port, () => {
  console.log('server listening to port 3000')
});

const io = socket.listen(server);

io.sockets.on('connection', (socket) => {
  socket.on('CREATE_CONNECTION', (data) => {
    console.log(data);
    io.emit('CONNECTION_CREATED', {message:'Connection Created.'})
  });

  socket.on('SEND_MESSAGE', (data) => {
    io.emit('RECEIVE_MESSAGE', data);
  });
});

