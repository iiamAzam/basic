import React, { useCallback, useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {useSocket} from './peer'

function Home() {
            const [formdata, setdata]=useState('')
            const [roomId ,setroomid]=useState('')
            const Navigate = useNavigate()
            const { socket }= useSocket()
            
            
            const handleUserjoined=useCallback(({roomId})=>{
                    Navigate(`room/${roomId}`)
            },[Navigate])

            useEffect(()=>{
                socket.on('1user-connected',handleUserjoined)
                return ()=>{
                     socket.off('1user-connected',handleUserjoined)
                }
            },[handleUserjoined, socket])

            const onsubmitroom=()=>{
                socket.emit('join-room',{roomId:roomId,email:formdata})
            }


  return (
    <div>


  
                
                <input  type='emai' name="emaiid"
                         onChange={(e)=>setdata(e.target.value)}
                >
                </input>
               
                <input
                  onChange={(e)=>setroomid(e.target.value)}
                  name ='roomid'>
                      
                </input>
                <button  onClick={onsubmitroom}   >
                    SUBMIT
                </button>

    </div>
  )
}

export default Home