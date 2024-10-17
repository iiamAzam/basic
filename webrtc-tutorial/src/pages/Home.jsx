import React,{useState,useEffect,useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSocket }  from '../providers/Socket'

export default function Home() {
     const [email , setemail]=useState('')
     const [roomid,setroomid]=useState('')
     const Navigate=useNavigate()
     const { socket }=useSocket()

     const handlejoined=useCallback(({roomId})=>{
              Navigate(`/room/${roomId}`)
     },[Navigate])
     
     useEffect(()=>{
        socket.on("joined-room",handlejoined)
        return ()=>{
          socket.off("joined-room",handlejoined)
        }
     })
    
    const onsubmit=()=>{
      socket.emit('join-room',{roomId:roomid,emailId:email})
    }
    
   


  return (
    <div className='home-page'>
                <div className='input-container'>
                        <input type='email'
                                value={email}
                                onChange={(e)=>setemail(e.target.value)}
                        placeholder='enter your email heare..'/>
                        <input type='text'
                                value={roomid}
                                onChange={(e)=>setroomid(e.target.value)}
                        placeholder='enter your room code'/>
                        <button onClick={onsubmit}>Enter in room </button>
                </div>

    </div>
  )
}
