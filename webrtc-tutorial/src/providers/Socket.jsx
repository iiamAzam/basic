import React ,{useEffect, useMemo} from 'react'
import { io } from 'socket.io-client'

const Socketcontext=React.createContext(null)

export const useSocket = () =>{
    return React.useContext(Socketcontext)
}


export const SocketProvider=(props)=>{
   
    // const socket = useMemo(() => io('http://localhost:8001'), []);
    const socketRef = React.useRef(null);

    if (!socketRef.current) {
        socketRef.current = io('http://localhost:8001');
    }
    const socket=socketRef.current
   
    
       
   

    return(
        <>
        <Socketcontext.Provider value={{socket}}>
            {props.children}
        </Socketcontext.Provider>
        
        </>

    )

}