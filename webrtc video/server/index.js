// server.js (in video-chat-backend)
const express = require('express');
const cors = require('cors')
const bodyparser = require('body-parser')
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:true
});
app.use(cors())
app.use(bodyparser.json())
io.on('connection', (socket) => {
  console.log('a user connected');

  // Handle room join
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
    socket.to(roomId).emit('user-connected');
  });

  // Handle WebRTC offer
  socket.on('offer', (data) => {
    socket.to(data.roomId).emit('offer', data.offer);
  });

  // Handle WebRTC answer
  socket.on('answer', (data) => {
    socket.to(data.roomId).emit('answer', data.answer);
  });

  // Handle ICE candidate exchange
  socket.on('ice-candidate', (data) => {
    socket.to(data.roomId).emit('ice-candidate', data.candidate);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});
















// // server.js (in video-chat-backend)
// const  bodyparser = require('body-parser')
// const  cors =  require('cors')

// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server,{
//         cors:true
// });


// io.on('connection', (socket) => {
//   console.log('a user connected');

//   // Handle room join
//   socket.on('join-room', (data) => {
//     const {email,roomId}=data
//     socket.join(roomId);
//     console.log(`User joined room: ${roomId}${email}`);
//     socket.emit('1user-connected',{roomId})
//     socket.to(roomId).emit('user-connected',{roomId});
//   });

//   // Handle WebRTC offer
//   socket.on('offer', (data) => {
//     const {offer,roomId}=data
//     socket.to(data.roomId).emit('offer', {offer,roomId});
//   });

//   // Handle WebRTC answer
//   socket.on('answer', (data) => {
//     const {ans , roomId} = data
//     socket.to(data.roomId).emit('answer', {ans ,roomId});
//   });

//   // Handle ICE candidate exchange
//   socket.on('ice-candidate', (data) => {
//     socket.to(data.roomId).emit('ice-candidate', data.candidate);
//   });

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// app.use(bodyparser.json())
// app.use(cors())

// server.listen(3001, () => {
//   console.log('listening on *:3001');
// });

