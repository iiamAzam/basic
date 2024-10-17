import React, { useEffect, useCallback, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSocket } from '../providers/Socket';
import { UsePeer } from '../providers/Peer';

function Room() {
  const { socket } = useSocket();
  const [myStream, setMyStream] = useState(null);
  const [remoteStreamUrl, setRemoteStreamUrl] = useState(null);
  const [remoteEmail, setRemoteEmail] = useState(null);

  const { peer, createOffer, createAnswer, setRemoteAnswer, sendStream, remoteStream } = UsePeer();

  // Handle new user joine
  const handleNewUserJoined = useCallback(async (data) => {
    const { emailId } = data;
    const offer = await createOffer();
    socket.emit('call-user', { emailId, offer });
    setRemoteEmail(emailId);
  }, [createOffer, socket]);

  // Handle incoming call
  const handleIncomingCall = useCallback(async (data) => {
    const { from, offer } = data;
    setRemoteEmail(from);
    const answer = await createAnswer(offer);
    socket.emit('call-accepted', { emailId: from, answer });
  }, [createAnswer, socket]);

  // Handle call accepted
  const handleCallAccepted = useCallback(async (data) => {
    const { answer } = data;
    await setRemoteAnswer(answer);
  }, [setRemoteAnswer]);

  // Get user media stream (local video/audio)
  const getUserMediaStream = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      setMyStream(stream);
    } catch (error) {
      console.error('Error getting user media:', error);
    }
  }, []);

  // Handle peer negotiation needed event
  const handleNegotiationNeeded = useCallback(async () => {
    const localOffer = await peer.createOffer();
    socket.emit('peer-nego', { emailId: remoteEmail, offer: localOffer });
  }, [peer, remoteEmail, socket]);

  // Handle negotiation received
  const handleNego = useCallback(async (data) => {
    const { from, offer } = data;
    setRemoteEmail(from);
    const answer = await createAnswer(offer);
    socket.emit('peer-accepted', { emailId: from, answer });
  }, [createAnswer, socket]);

  // Handle negotiation answer
  const handleNegoAnswer = useCallback(async (data) => {
    const { answer } = data;
    await setRemoteAnswer(answer);
  }, [setRemoteAnswer]);

  // Manage WebRTC peer events
  useEffect(() => {
    peer.addEventListener('negotiationneeded', handleNegotiationNeeded);
    socket.on('peer-nego', handleNego);
    socket.on('peer-accepted', handleNegoAnswer);

    return () => {
      socket.off('peer-nego', handleNego);
      socket.off('peer-accepted', handleNegoAnswer);
      peer.removeEventListener('negotiationneeded', handleNegotiationNeeded);
    };
  }, [handleNegotiationNeeded, handleNegoAnswer, handleNego, peer, socket]);

  // Handle socket events
  useEffect(() => {
    socket.on('joined-client', handleNewUserJoined);
    socket.on('incoming-call', handleIncomingCall);
    socket.on('call-accepted', handleCallAccepted);

    return () => {
      socket.off('joined-client', handleNewUserJoined);
      socket.off('incoming-call', handleIncomingCall);
      socket.off('call-accepted', handleCallAccepted);
    };
  }, [socket, handleNewUserJoined, handleIncomingCall, handleCallAccepted]);

  // Initialize local media stream on component mount
  useEffect(() => {
    getUserMediaStream();
  }, [getUserMediaStream]);

  // Set remote stream URL when stream is available
  useEffect(() => {
    if (remoteStream) {
      const remoteUrl = URL.createObjectURL(remoteStream);
      setRemoteStreamUrl(remoteUrl);
    }
  }, [remoteStream]);

  return (
    <div className="room-container">
      <h1>{`You are connected to ${remoteEmail || 'nobody'}`}</h1>

      <button onClick={() =>{sendStream(myStream)
      }}>Send My Video</button>

      <ReactPlayer url={myStream} playing muted />
      <ReactPlayer url={remoteStream} playing />
    </div>
  );
}

export default Room;






////////////////////////////////////////////////////////////////////



// import React, { useEffect,useCallback ,useState } from 'react'
// import ReactPlayer from 'react-player'
// import { useSocket }  from '../providers/Socket'
// import { UsePeer } from '../providers/Peer' 






// function Room() { 
//      const { socket }=useSocket()
//      const [mystream, setmystream]=useState(null)
//      const [remotemail,setremoteemail]=useState(null)
    
//     const {peer,creatOffer,creatanswer,setremoteanswer,sendstream,remotestream}=UsePeer();
                             
//      const hadleNewuserjoined=useCallback(async(data)=>{
//             const  {emailId}=data
//             const offer= await creatOffer();
//             socket.emit('call-user',{emailId,offer})  
//             setremoteemail(emailId)  
//              },[creatOffer,socket])

//       const Handleincommingcall=useCallback(async (data)=>{
//               const {from,offer}=data
//               setremoteemail(from)
//               const ans =await creatanswer(offer)
//               socket.emit('call-accepted', {emailId:from,ans})
//               console.log(from)
              
//       },[socket,creatanswer])

//       const hadleCallAccepted=useCallback(async(data)=>{
//           const {ans}=data
//           await setremoteanswer(ans)
//           console.log('call got accepted',ans)
          
//       },[setremoteanswer])
      
//       const getUserMediaStream=useCallback(async()=>{
//                 const stream = await  navigator.mediaDevices.getUserMedia({audio:true,video:true})
               
//                 setmystream(stream)
//       },[])

//       const hadlenegotiate=useCallback(async()=>{
//         const localoffer= await creatOffer();
//         socket.emit('peer-nego',{ emailID: remotemail , offer:localoffer })

//     },[creatOffer, socket, remotemail])
//     const handlenego=useCallback(async(data)=>{
//       const {from,offer}=data
//       setremoteemail(from)
//       const ans = await creatanswer(offer)
//       socket.emit('peer-accepted', {emailId:from,ans})
//       console.log(from)

// },[creatanswer, socket])

// const handlenagoans=useCallback( async(data)=>{
//       const {ans}=data
//       await setremoteanswer(ans)
// },[setremoteanswer])

//       useEffect (()=>{
      
//         peer.addEventListener('negotiationneeded',hadlenegotiate)
      
//         socket.on('peer-nego',handlenego)
//         socket.on('peer-accepted',handlenagoans)

//         return ()=>{
//           socket.off('peer-nego',handlenego)
//           socket.off('peer-accepted',handlenagoans)
//           peer.removeEventListener('negotiationneeded',hadlenegotiate)
//         }
//       },[hadlenegotiate, handlenagoans, handlenego, peer, socket])

      


//      useEffect(()=>{
//           socket.on('joined-client', hadleNewuserjoined)
//           socket.on('incomming-call',Handleincommingcall)
//           socket.on('call-accepted',hadleCallAccepted)
//           return ()=>{
//             socket.off("joined-client",hadleNewuserjoined)
//             socket.off('incomming-call',Handleincommingcall)
//             socket.off('call-accepted',hadleCallAccepted)
           

//           }

//         },[socket, hadleNewuserjoined, Handleincommingcall, hadleCallAccepted, handlenego, handlenagoans])


//     useEffect(()=>{
      
//       getUserMediaStream()

//     },[getUserMediaStream])
  
//     peer.add

//   return (
//     <div className='room-container'>

//               <h1>{`you are connected to ${remotemail}`}</h1>

//               <button onClick={()=>sendstream(mystream)}>
//                 Send my video
//               </button>
            
//             <ReactPlayer url={mystream} playing muted/>
//             <ReactPlayer url={remotestream} playing muted/>

//     </div>
//   )
// }

// export default Room