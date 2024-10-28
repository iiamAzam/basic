import { createSlice } from "@reduxjs/toolkit";



const authslice=createSlice({
    name:'auth',
    initialState:{
       login:  { auth:false,
        email:'',
        password:''},
       register : {
        name:'',
        email:'',
        password:''
      }  
    },
    reducers:{
        authlogin : (state,action)=>{
                state.login.auth=action.payload.login.auth
                state.login.email=action.payload.login.email
                state.login.password=action.payload.login.password
        },
        authregister:(state,action)=>{
                state.login.auth=action.payload.register.auth
                state.register.name=action.payload.register.name
                state.register.email=action.payload.register.email
                state.register.password=action.payload.register.password
        },
      authlogout:(state)=>{
               state.login.auth=false
               state.login.email=''
               state.login.password=''
      }
    }
})

export const  {authlogin,authregister,authlogout} = authslice.actions

export default authslice.reducer