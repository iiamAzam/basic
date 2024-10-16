// src/App.js
import React, { useRef, useState } from 'react';
import { io } from 'socket.io-client';


const socket = io('http://localhost:3001'); // Connect to the backend

function Room1() {
  const [roomId, setRoomId] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);

  const servers = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' }, // STUN server
    ],
  };

  // Capture video stream and join the room
  const joinRoom = async () => {
    setIsJoined(true);
    const localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    // Display local video stream
    localVideoRef.current.srcObject = localStream;

    // Create a new RTCPeerConnection
    const peerConnection = new RTCPeerConnection(servers);
    peerConnectionRef.current = peerConnection;

    // Add local stream tracks to the peer connection
    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    // Handle remote stream
    peerConnection.ontrack = (event) => {
      const [remoteStream] = event.streams;
      remoteVideoRef.current.srcObject = remoteStream;
    };

    // Exchange ICE candidates
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('ice-candidate', { candidate: event.candidate, roomId });
      }
    };

    socket.emit('join-room', roomId);

    // Handle incoming offer
    socket.on('offer', async (offer) => {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.emit('answer', { answer, roomId });
    });

    // Handle incoming answer
    socket.on('answer', async (answer) => {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    });

    // Handle incoming ICE candidates
    socket.on('ice-candidate', async ({ candidate }) => {
      try {
        await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (e) {
        console.error('Error adding received ICE candidate', e);
      }
    });
  };

  // Create an offer to start the connection
  const createOffer = async () => {
    const offer = await peerConnectionRef.current.createOffer();
    await peerConnectionRef.current.setLocalDescription(offer);
    socket.emit('offer', { offer, roomId });
  };

  return (
    <div className="App">
      {!isJoined ? (
        <div>
          <input
            type="text"
            placeholder="Enter room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <div>
          <video ref={localVideoRef.current} autoPlay playsInline muted />
          <video ref={remoteVideoRef.current} autoPlay playsInline />
          <button onClick={createOffer}>Start Call</button>
        </div>
      )}
    </div>
  );
}

export default Room1;
