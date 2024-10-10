import React,{createContext,useContext,useMemo,useEffect,useState, useCallback} from 'react'




const PeerContext=createContext((null))

export const UsePeer=()=>useContext(PeerContext)

function Peer(prop) {
    const [remotestream , setremotestream ]=useState(null)
    const peer=useMemo(()=>new RTCPeerConnection(
        {
            iceServers:[
                {
                    urls:["stun:stun.l.google.com:19302",
                        "stun:global.stun.twilio.com:3478"
                    ]  
                 }
                ]
        }
    ),[])

    const creatOffer = async ()=>{
    
     const offer= await peer.createOffer();
        await peer.setLocalDescription(offer)
      return offer
}   

const creatanswer=async (offer)=>{
    // first creat a localdescription of incomming offer 
    await peer.setRemoteDescription(offer)
    //after creat answer
    const answer = await peer.createAnswer()
    //set that answer tp the local
    await peer.setLocalDescription(answer)
    return answer
    
}
const setremoteanswer=async(ans)=>{
    await peer.setRemoteDescription(ans)
}

const sendstream = async(stream)=>{
    const tracks =  await stream.getTracks();
    
     for(const track of  tracks){
      peer.addTrack(track,stream)
    }
}

const handleTrackevent=useCallback((ev)=>{
    const streams =ev.streams;
    setremotestream(streams[0])
    
    console.log(remotestream)
},[remotestream])

   useEffect(()=>{
        peer.addEventListener('track',handleTrackevent)
       
        return ()=>{
            peer.removeEventListener('track',handleTrackevent)
            
        }
   },[ handleTrackevent, peer])

  


   


  return (
    <PeerContext.Provider value={{remotestream,peer,creatOffer,creatanswer,setremoteanswer,sendstream}} >
        {prop.children}
    </PeerContext.Provider>
  )
}

export default Peer