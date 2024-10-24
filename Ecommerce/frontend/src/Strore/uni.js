import { createSlice } from '@reduxjs/toolkit'

const univarsalsearch=createSlice({
    name : 'search',
    initialState:{value:''},
    reducers:{
            unvarsalsearch:(state,action)=>{
                    state.value=action.payload
            }
    }

})

export const {unvarsalsearch} = univarsalsearch.actions
export default univarsalsearch.reducer