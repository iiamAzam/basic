import React,{ useState }  from 'react'
import StoreContext from './context'
import axios from 'axios'

function ProviderContext({children}) {
   const [isauthenticated,setisauthenticated]=useState(false)
   const [ authorization , setauthorization]= useState(false)
   const userregister=async(data)=>{
            try {
                  const res=await axios.post(import.meta.env.VITE_API_URL+"/register",{...data})
                  return  res
                  
            }
            catch(err){
                console.log(err)
            }
   }
   
  return (
    <StoreContext.Provider value={{userregister,isauthenticated,setisauthenticated,authorization,setauthorization}} >
            {  children }
    </StoreContext.Provider>
  )
}

export default ProviderContext