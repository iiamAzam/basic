import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



const authslice=createSlice({
    name:'auth',
    initialState:{
       login:  { auth:false,
        email:'',
        password:''},
       register : {
        auth:false,
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
                state.register.auth=action.payload.register.auth
                state.register.name=action.payload.register.name
                state.register.email=action.payload.register.email
                state.register.password=action.payload.register.password
        }
    }
})

export const  {authlogin,authregister} = authslice.actions

export default authslice.reducer