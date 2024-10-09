import { useState,useContext } from 'react'

import Room from './pages/Room'
import {Routes, Route} from 'react-router-dom'
import { SocketProvider } from './providers/Socket'
import Peer from './providers/Peer'
import './App.css'
import Home from './pages/Home'


function App() {
  
  return (
    <>
     <SocketProvider>
      <Peer>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/room/:roomId' element={<Room/>}/>
    </Routes>
    </Peer>
    </SocketProvider>
    </>
  )
}

export default App
