const express = require('express');
const http = require('http'); // Required to create the server for both Express and Socket.IO
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app); 
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"]
  }
});

app.use(bodyParser.json());
app.use(cors());

const emailToSocketMapping = new Map();
const sockettoemailmapping=new Map()


io.on('connection', (socket) => {
  console.log('New connection established:', socket.id);

  socket.on('join-room', (data) => {
    const { roomId, emailId } = data;
   
    // Save the mapping between email and socket ID
    emailToSocketMapping.set(emailId, socket.id);
    sockettoemailmapping.set(socket.id,emailId)
    console.log(emailToSocketMapping)
    // Join the user to the room
    socket.join(roomId);
    console.log('new user joined',emailId)
    socket.emit('joined-room',{roomId})
    // Notify other users in the room
    socket.broadcast.to(roomId).emit('joined-client', {emailId});
    // socket.emit('user-joined', { emailId });
    socket.on('call-user',data=>{
        const {emailId,offer}=data
        console.log(offer)
        const fromEmail = sockettoemailmapping.get(socket.id)
        const sct_id = emailToSocketMapping.get(emailId)
        socket.to(sct_id).emit('incomming-call',{from:fromEmail,offer})
    })
    socket.on('call-accepted',data=>{
       const  {emailId,ans}=data
       const socketID=emailToSocketMapping.get(emailId)
       socket.to(socketID).emit('call-accepted',{ans})
    })
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    // Handle user disconnect logic if needed (e.g., remove from the mapping)
  });
});

// Listen for both HTTP and WebSocket connections on port 8001
server.listen(8001, () => {
  console.log('Server is running on port 8001');
});

// If you still need an HTTP server for other routes, you can add them to the `app` object.
app.listen(8000, () => {
  console.log('HTTP server is also running on port 8000');
});
