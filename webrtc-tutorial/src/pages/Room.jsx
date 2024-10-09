import React, { useEffect,useCallback } from 'react'

import { useSocket }  from '../providers/Socket'
import { UsePeer } from '../providers/Peer' 

function Room() { 
     const { socket }=useSocket()
     
    const {peer,creatoffer}=UsePeer();
    (
      async ()=>{
        const offer = await creatoffer(peer)
        console.log(offer)
      }
    )()

    
     const hadleNewuserjoined=useCallback(async(data)=>{
            const  {emailId}=data
            console.log('new user joined ')
           const offer= await  creatoffer();
           console.log(offer)
            socket.emit('call-user',{emailId,offer})
        },[creatoffer,socket])
      const Handleincommingcall=useCallback(async (data)=>{
              const {from,offer}=data
              console.log('incomming call from', from ,offer)
      },[])

     useEffect(()=>{
          socket.on('joined-client', hadleNewuserjoined)
          socket.on('incomming-call',Handleincommingcall)
         
        },[socket,hadleNewuserjoined,Handleincommingcall])


  return (
    <div className='room-container'>
            <h1>{'ds'} </h1>
    </div>
  )
}

export default Room