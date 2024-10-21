import { createSlice } from "@reduxjs/toolkit";


const counterslice = createSlice({
        name:'counterr',
        initialState:{value: 0},
        reducers:{
            increment:(state)=>{
                    state.value+=1
            },
            decrement:(state)=>{
                    state.value-=1
            }   ,
            incrementbyamount:(state,action)=>{
                            state.value+=action.payload;
            }
        }

})

export const{increment,decrement,incrementbyamount}=counterslice.actions

export default counterslice.reducer