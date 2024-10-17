import React, { createContext, useContext, useMemo, useEffect, useState, useCallback } from 'react';
import { useSocket } from '../providers/Socket';

const PeerContext = createContext(null);

export const UsePeer = () => useContext(PeerContext);

function Peer({ children }) {
  const [remoteStream, setRemoteStream] = useState(null);
//   const { socket } = useSocket();

  // Initialize PeerConnection
  const peer = useMemo(() => new RTCPeerConnection({
    iceServers: [
      { urls: ['stun:stun.l.google.com:19302'] }
    ]
  }), []);

  // Create offer
  const createOffer = async () => {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    return offer;
  };

  // Create answer
  const createAnswer = async (offer) => {
    await peer.setRemoteDescription(offer);
    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);
    return answer;
  };

  // Set remote answer
  const setRemoteAnswer = async (answer) => {
    await peer.setRemoteDescription(answer);
  };

  // Send stream (local)
  const sendStream = (stream) => {
    stream.getTracks().forEach(track => {
      peer.addTrack(track, stream);
    });
  };

  // Handle incoming remote stream
  const handleTrackEvent = useCallback((event) => {
    const [stream] = event.streams;
    console.log(stream)
    setRemoteStream(stream);
  }, []);

  // Add track event listener
  useEffect(() => {
    peer.addEventListener('track', handleTrackEvent);

    return () => {
      peer.removeEventListener('track', handleTrackEvent);
    };
  }, [handleTrackEvent, peer]);

  return (
    <PeerContext.Provider value={{ peer, createOffer, createAnswer, setRemoteAnswer, sendStream, remoteStream }}>
      {children}
    </PeerContext.Provider>
  );
}

export default Peer;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // import React,{createContext,useContext,useMemo,useEffect,useState, useCallback} from 'react'




    // const PeerContext=createContext((null))

    // export const UsePeer=()=>useContext(PeerContext)

    // function Peer(prop) {
    //     const [remotestream , setremotestream ]=useState(null)
    //     const peer=useMemo(()=>new RTCPeerConnection(
    //         {
    //             iceServers:[
    //                 {
    //                     urls:["stun:stun.l.google.com:19302",
    //                         "stun:global.stun.twilio.com:3478"
    //                     ]  
    //                 }
    //                 ]
    //         }
    //     ),[])

    //     const creatOffer = async ()=>{
        
    //     const offer= await peer.createOffer();
    //         await peer.setLocalDescription(offer)
    //     return offer
    // }   

    // const creatanswer=async (offer)=>{
    //     // first creat a localdescription of incomming offer 
    //     await peer.setRemoteDescription(offer)
    //     //after creat answer
    //     const answer = await peer.createAnswer()
    //     //set that answer tp the local
    //     await peer.setLocalDescription(answer)
    //     return answer
        
    // }
    // const setremoteanswer=async(ans)=>{
    //     await peer.setRemoteDescription(ans)
    // }

    // const sendstream = async(stream)=>{
    //     const tracks =  await stream.getTracks();
        
    //     for(const track of  tracks){
    //     peer.addTrack(track,stream)
    //     }
    // }

    // const handleTrackevent=useCallback((ev)=>{
    //     const streams =ev.streams;
    //     setremotestream(streams[0])
        
    //     console.log(remotestream)
    // },[remotestream])

    // useEffect(()=>{
    //         peer.addEventListener('track',handleTrackevent)
        
    //         return ()=>{
    //             peer.removeEventListener('track',handleTrackevent)
                
    //         }
    // },[ handleTrackevent, peer])

    


    


    // return (
    //     <PeerContext.Provider value={{remotestream,peer,creatOffer,creatanswer,setremoteanswer,sendstream}} >
    //         {prop.children}
    //     </PeerContext.Provider>
    // )
    // }

    // export default Peer