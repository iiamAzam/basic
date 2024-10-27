import { configureStore } from '@reduxjs/toolkit'
import counterslice from './Slice'
import productSlice from './Paerslice.js'
import univarsalsearch from './uni.js'
import authslice from './Authslice.js'
const Store = configureStore({
        reducer:{
            counter:counterslice,
            product:productSlice,
            search:univarsalsearch,
            auth:authslice
        }
})

export default Store