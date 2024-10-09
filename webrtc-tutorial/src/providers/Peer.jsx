import React,{createContext,useContext,useMemo} from 'react'



const PeerContext=createContext((null))

export const UsePeer=()=>useContext(PeerContext)

function Peer(prop) {
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

    const creatoffer = async ()=>{
        const offer=await peer.createOffer();
        await peer.setLocalDescription(offer)

}




  return (
    <PeerContext.Provider value={{peer,creatoffer}} >
        {prop.children}
    </PeerContext.Provider>
  )
}

export default Peer