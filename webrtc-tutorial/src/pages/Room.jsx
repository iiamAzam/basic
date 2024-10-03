import React, { useEffect } from 'react'

import { useSocket }  from '../providers/Socket'

function Room() { 
     const { socket }=useSocket()

    
     const hadleNewuserjoined=(data)=>{
            const  {emailId}=data
            console.log(emailId)
        }
     useEffect(()=>{
          socket.on('joined-client', hadleNewuserjoined)
         
        },[socket])


  return (
    <div className='room-container'>
            <h1>{'ds'} </h1>
    </div>
  )
}

export default Room