const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const SOCKET_IO = require('socket.io')();

app.use(bodyParser.json());

app.use(cors());

app.options('*', cors());

SOCKET_IO.on('connection', socket => {
  socket.on('CREATE_CONNECTION', (data) => {
    SOCKET_IO.emit('CONNECTION_CREATED', {message:'Connection Created.'})
  });

  socket.on('SEND_MESSAGE', (data) => {
    SOCKET_IO.emit('RECEIVE_MESSAGE', data);
  });
});

SOCKET_IO.listen(2000);

app.listen(5000, () => {
  console.log(`Server Running On Port: 5000`)
})
