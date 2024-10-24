import { configureStore } from '@reduxjs/toolkit'
import counterslice from './Slice'
import productSlice from './Paerslice.js'
import univarsalsearch from './uni.js'
const Store = configureStore({
        reducer:{
            counter:counterslice,
            product:productSlice,
            search:univarsalsearch
        }
})

export default Store