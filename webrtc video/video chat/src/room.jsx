
// // src/App.js
// import React, { useRef, useState } from 'react';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3001'); // Connect to the backend

// function Room() {
//   const [roomId, setRoomId] = useState('');
//   const [isJoined, setIsJoined] = useState(false);

//   const localVideoRef = useRef(null);
//   const remoteVideoRef = useRef(null);
//   const peerConnectionRef = useRef(null);

//   const servers = {
//     iceServers: [
//       { urls: 'stun:stun.l.google.com:19302' }, // STUN server
//     ],
//   };

//   // Capture video stream and join the room
//   const joinRoom = async () => {
//     setIsJoined(true);
//     const localStream = await navigator.mediaDevices.getUserMedia({
//       video: true,
//       audio: true,
//     });

//     // Display local video stream
//     localVideoRef.current.srcObject = localStream;

//     // Create a new RTCPeerConnection
//     const peerConnection = new RTCPeerConnection(servers);
//     peerConnectionRef.current = peerConnection;

//     // Add local stream tracks to the peer connection
//     localStream.getTracks().forEach((track) => {
//       peerConnection.addTrack(track, localStream);
//     });

//     // Handle remote stream
//     peerConnection.ontrack = (event) => {
//       const [remoteStream] = event.streams;
//       remoteVideoRef.current.srcObject = remoteStream;
//     };

//     // Exchange ICE candidates
//     peerConnection.onicecandidate = (event) => {
//       if (event.candidate) {
//         socket.emit('ice-candidate', { candidate: event.candidate, roomId });
//       }
//     };

//     socket.emit('join-room', roomId);

//     // Handle incoming offer
//     socket.on('offer', async (offer) => {
//       await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
//       const answer = await peerConnection.createAnswer();
//       await peerConnection.setLocalDescription(answer);
//       socket.emit('answer', { answer, roomId });
//     });

//     // Handle incoming answer
//     socket.on('answer', async (answer) => {
//       await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
//     });

//     // Handle incoming ICE candidates
//     socket.on('ice-candidate', async ({ candidate }) => {
//       try {
//         await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
//       } catch (e) {
//         console.error('Error adding received ICE candidate', e);
//       }
//     });
//   };

//   // Create an offer to start the connection
//   const createOffer = async () => {
//     const offer = await peerConnectionRef.current.createOffer();
//     await peerConnectionRef.current.setLocalDescription(offer);
//     socket.emit('offer', { offer, roomId });
//   };

//   return (
//     <div className="App">
//       {!isJoined ? (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter room ID"
//             value={roomId}
//             onChange={(e) => setRoomId(e.target.value)}
//           />
//           <button onClick={joinRoom}>Join Room</button>
//         </div>
//       ) : (
//         <div>
//           <video ref={localVideoRef} autoPlay playsInline muted />
//           <video ref={remoteVideoRef} autoPlay playsInline />
//           <button onClick={createOffer}>Start Call</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Room;





























// import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// import { useSocket } from './peer';

// const servers = {
//   iceServers: [
//     { urls: 'stun:stun.l.google.com:19302' }, // STUN server
//   ],
// };

// function Room() {
//   const localVideoRef = useRef(null);
//   const remoteVideoRef = useRef(null);
  
//   const peerconnection = useMemo(() => new RTCPeerConnection(servers), []);
//   const [roomid, setroomid] = useState(null);
//   const { socket } = useSocket();

//   const getmediastream = useCallback(async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({
//       video: true,
//       audio: true,
//     });

//     // Attach stream to the local video element
//     if (localVideoRef.current) {
//       localVideoRef.current.srcObject = stream;
//     }

//     // Add tracks to peer connection
//     stream.getTracks().forEach((track) => {
//       peerconnection.addTrack(track, stream);
//     });

//     // Handle remote stream
//     peerconnection.ontrack = (event) => {
//         console.log('Remote stream received');
//       const [remoteStream] = event.streams;
//       if (remoteVideoRef.current) {
//         remoteVideoRef.current.srcObject = remoteStream;
//       }
//     };
//   }, [peerconnection]);

//   useEffect(() => {
//     getmediastream();
//   }, [getmediastream]);

//   useEffect(() => {
//     peerconnection.onicecandidate = (event) => {
//       if (event.candidate) {
       
//         socket.emit('ice-candidate', { candidate: event.candidate, roomid });
//       }
//     };
//   }, [peerconnection, socket, roomid]);

//   const handleuserjoined = useCallback(async (data) => {
//     setroomid(data.roomId);
//     const offer = await peerconnection.createOffer();
//     await peerconnection.setLocalDescription(offer);
//     socket.emit('offer', { offer: offer, roomId: data.roomId });
//   }, [peerconnection, socket]);

//   const handleoffer = useCallback(async (data) => {
//     const { offer, roomId } = data;
//     await peerconnection.setRemoteDescription(offer);
//     const ans = await peerconnection.createAnswer();
//     await peerconnection.setLocalDescription(ans);
//     socket.emit('answer', { ans, roomId });
//   }, [peerconnection, socket]);

//   const handleanswer = useCallback(async (data) => {
//     const { ans } = data;
//     await peerconnection.setRemoteDescription(ans);
//   }, [peerconnection]);

//   const handleicecandidate = useCallback(async ({ candidate }) => {
//     try {
//       await peerconnection.addIceCandidate(candidate);
//     } catch (error) {
//       console.error('Error adding received ICE candidate', error);
//     }
//   }, [peerconnection]);

//   useEffect(() => {
//     socket.on('user-connected', handleuserjoined);
//     socket.on('offer', handleoffer);
//     socket.on('answer', handleanswer);
//     socket.on('ice-candidate', handleicecandidate);

//     return () => {
//       socket.off('user-connected', handleuserjoined);
//       socket.off('offer', handleoffer);
//       socket.off('answer', handleanswer);
//       socket.off('ice-candidate', handleicecandidate);
//     };
//   }, [handleanswer, handleicecandidate, handleoffer, handleuserjoined, socket]);

//   return (
//     <div>
//       <video ref={localVideoRef} autoPlay muted />
//       <video ref={remoteVideoRef} autoPlay />
//     </div>
//   );
// }

// export default Room;

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
    // import Reactplayer from 'react-player'

    // import { useSocket } from './peer'


    // const servers = {
    //     iceServers: [
    //     { urls: 'stun:stun.l.google.com:19302' }, // STUN server
    //     ],
    // };



    // function Room() {
    //         const remoteVideoRef=useRef(null)
    //         const peerconnection = useMemo(()=> new RTCPeerConnection(servers),[])
    //         const videoref=useRef(null)
    //         const [roomid,setroomid]=useState(null)
    //         const {socket} = useSocket()
        

    //             console.log(remoteVideoRef.current)
    //         const getmediastream=useCallback(async()=>{
    //             const stream = await navigator.mediaDevices.getUserMedia({
    //                 video:true,
    //                 audio:true
    //             })
    //             videoref.current=stream
    //             stream.getTracks().forEach((e)=>{
    //                     peerconnection.addTrack(e,stream)
    //             })
    //             peerconnection.ontrack=(event)=>{
    //                 const [remoteStream]=event.streams
    //                 remoteVideoRef.current=remoteStream
    //             }
    //         },[peerconnection])
        
            
    //         useEffect(()=>{
    //             getmediastream()
    //         },[getmediastream])

        
            
    //         peerconnection.onicecandidate=(event)=>{
    //                 if (event.candidate){
    //                     socket.emit('ice-candidate', { candidate: event.candidate, roomid });
    //                 }
    //         }

    //         const handleuserjoined=useCallback(async(data)=>{
    //                 setroomid(data.roomId)
    //                 const offer= await peerconnection.createOffer()
    //                 await peerconnection.setLocalDescription(offer)
    //                 socket.emit('offer',{offer:offer,roomId:data.roomId})
    //         },[peerconnection, socket])
    //                 const handleoffer = useCallback(async(data)=>{
    //                         const { offer, roomId } = data
    //                         await peerconnection.setRemoteDescription(offer)
    //                         const ans = await peerconnection.createAnswer(offer)
    //                         await peerconnection.setLocalDescription(ans)
    //                         socket.emit('answer',{ans,roomId})
    //                 },[peerconnection, socket])

    //         const handleanswer=useCallback(async (data)=>{
    //                     const {ans}=data 
    //                     await peerconnection.setRemoteDescription(ans)
    //         },[peerconnection])
    //         const handleicecandidate=useCallback(async({candidate})=>{
    //             try{
    //                 await peerconnection.addIceCandidate(candidate)
    //             } catch(error){
    //                 console.error('Error adding received ICE candidate',error )
    //             }
                    
    //         },[peerconnection])


    //         useEffect(()=>{

    //                 socket.on('user-connected',handleuserjoined)
    //                 socket.on('offer',handleoffer)
    //                 socket.on('answer',handleanswer)
    //                 socket.on('ice-candidate',handleicecandidate)

    //                 return()=>{
    //                     socket.off('user-connected',handleuserjoined)
    //                     socket.off('offer',handleoffer)
    //                     socket.off('answer',handleanswer)
    //                 }
    //         },[handleanswer, handleicecandidate, handleoffer, handleuserjoined, socket])
        


    // return (
    //     <div>
    //         <Reactplayer  url={videoref.current} playing muted >
    //         </Reactplayer>
    //         <Reactplayer url={remoteVideoRef.current}  playing muted ></Reactplayer>
    //     </div>
    // )
    // }

    // export default Room