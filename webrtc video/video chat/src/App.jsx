import { useState } from 'react'

import './App.css'
import Room1 from './Room1'
function App() {
  const [roomid, setroomid] = useState(0)

  return (
    <>    
          
<Room1/>
    </>
  )
}

export default App
