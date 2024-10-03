import { useState,useContext } from 'react'

import Room from './pages/Room'
import {Routes, Route} from 'react-router-dom'
import { SocketProvider } from './providers/Socket'

import './App.css'
import Home from './pages/Home'


function App() {
  
  return (
    <>
     <SocketProvider>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/room/:roomId' element={<Room/>}/>
    </Routes>
    </SocketProvider>
    </>
  )
}

export default App
