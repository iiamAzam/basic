import React, {createContext} from 'react'


export const CartContext=createContext()

function CartContextprovider({children}) {
  return (
    <CartContext.Provider value={{}}>{
        children
    }</CartContext.Provider>
  )
}

export default CartContextprovider