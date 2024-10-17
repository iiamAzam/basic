import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Peer from './peer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     
     <Peer>
       <App />
       </Peer>
   
   
  </StrictMode>,
)
