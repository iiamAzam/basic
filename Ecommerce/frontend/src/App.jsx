import React,{useContext} from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/header-footer/header'
import Footer from './components/header-footer/Footer'
import Hero from './components/Hero/Hero'
import Card from './pages/cart/card'
function App() {
      
  return (
    <>
      <div className=''>
        <div className=' fixed z-50  top-0 w-full'>
        <Header />
        </div>
          </div>    
          <div className='-z-0'>
        <Outlet/>
          </div>
       
        <Footer/>
    </>
  )
}

export default App


