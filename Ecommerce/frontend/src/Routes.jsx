import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Authlayout from './components/auth/layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import App from './App'
import Cart from './pages/cart/cart'
import Hero from './components/Hero/Hero'
import Category from './pages/cart/category'

function Rout() {

  return (
    <div>
         <Routes>
           <Route path='/' element= {<App/>}>
           <Route path='/' element = {<Hero/>}/>
           <Route path='/' element= {<Category/>}/>
           <Route path='/cart' element={<Cart/>}></Route>
           <Route path='/auth' element={<Authlayout/>}>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path ='/auth/register' element= {<Register/>}/>
          </Route>
          </Route>
         
        </Routes>
    </div>


  )
}

export default Rout