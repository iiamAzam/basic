import React from 'react'
import {io} from 'socket.io-client'

const socketcontext=React.createContext()
export const useSocket=()=>React.useContext(socketcontext)

function Peer({children}) {
        const socket=React.useMemo( ()=> { return io('http://localhost:3001')},[])
  return (
        <socketcontext.Provider  value={{socket}}>

             {children}   

        </socketcontext.Provider>
  )
}

export default Peer