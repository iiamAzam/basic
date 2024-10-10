import React, { useEffect,useCallback ,useState } from 'react'
import ReactPlayer from 'react-player'
import { useSocket }  from '../providers/Socket'
import { UsePeer } from '../providers/Peer' 






function Room() { 
     const { socket }=useSocket()
     const [mystream, setmystream]=useState(null)
     const [remotemail,setremoteemail]=useState(null)
    
    const {peer,creatOffer,creatanswer,setremoteanswer,sendstream,remotestream}=UsePeer();
      console.log(remotestream)
     const hadleNewuserjoined=useCallback(async(data)=>{
            const  {emailId}=data
            const offer= await creatOffer();
            socket.emit('call-user',{emailId,offer})  
            setremoteemail(emailId)  
             },[creatOffer,socket])

      const Handleincommingcall=useCallback(async (data)=>{
              const {from,offer}=data
              setremoteemail(from)
              const ans =await creatanswer(offer)
              socket.emit('call-accepted', {emailId:from,ans})
              console.log(from)
              
      },[socket,creatanswer])

      const hadleCallAccepted=useCallback(async(data)=>{
          const {ans}=data
          await setremoteanswer(ans)
          console.log('call got accepted',ans)
          
      },[setremoteanswer])
      
      const getUserMediaStream=useCallback(async()=>{
                const stream = await  navigator.mediaDevices.getUserMedia({audio:true,video:true})
               
                setmystream(stream)
      },[])

      const hadlenegotiate=useCallback(async()=>{
        const localoffer= await peer.createOffer() ;
        socket.emit('peer-nego',{ emailID: remotemail , offer:localoffer })

    },[ remotemail, socket,peer])
    const handlenego=useCallback(async(data)=>{
      const {from,offer}=data
      setremoteemail(from)
      const ans = await creatanswer(offer)
      socket.emit('peer-accepted', {emailId:from,ans})
      console.log(from)

},[creatanswer, socket])

const handlenagoans=useCallback( async(data)=>{
      const {ans}=data
      await setremoteanswer(ans)
},[setremoteanswer])

      useEffect (()=>{
      
        peer.addEventListener('negotiationneeded',hadlenegotiate)
        console.log('nag,solving')
        socket.on('peer-nego',handlenego)
        socket.on('peer-accepted',handlenagoans)

        return ()=>{
          socket.off('peer-nego',handlenego)
          socket.off('peer-accepted',handlenagoans)
          peer.removeEventListener('negotiationneeded',hadlenegotiate)
        }
      },[hadlenegotiate, handlenagoans, handlenego, peer, socket])

      


     useEffect(()=>{
          socket.on('joined-client', hadleNewuserjoined)
          socket.on('incomming-call',Handleincommingcall)
          socket.on('call-accepted',hadleCallAccepted)
          return ()=>{
            socket.off("joined-client",hadleNewuserjoined)
            socket.off('incomming-call',Handleincommingcall)
            socket.off('call-accepted',hadleCallAccepted)
           

          }

        },[socket, hadleNewuserjoined, Handleincommingcall, hadleCallAccepted, handlenego, handlenagoans])


    useEffect(()=>{
      
      getUserMediaStream()

    },[getUserMediaStream])
  
    peer.add

  return (
    <div className='room-container'>

              <h1>{`you are connected to ${remotemail}`}</h1>

              <button onClick={()=>sendstream(mystream)}>
                Send my video
              </button>
            
            <ReactPlayer url={mystream} playing muted/>
            <ReactPlayer url={remotestream} playing muted/>

    </div>
  )
}

export default Room