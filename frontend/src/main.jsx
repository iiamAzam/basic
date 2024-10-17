import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProviderContext from './context/providerContext.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartContextprovider from './context/cartContext.jsx'
import Productcontextprovider from './context/product.jsx'
import Rout from './Routes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <ProviderContext>
      <CartContextprovider>
        <Productcontextprovider>
        <Rout />
       </Productcontextprovider>
      </CartContextprovider>
    </ProviderContext>
    </BrowserRouter>
  </StrictMode>,
)
