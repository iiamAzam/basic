import React,{  createContext } from 'react'

export const Productcontext=createContext()




function Productcontextprovider({children}) {
  return (
   <Productcontext.Provider value={{}} >
    {children}
   </Productcontext.Provider>
  )
}

export default Productcontextprovider