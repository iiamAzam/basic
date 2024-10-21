import { configureStore } from '@reduxjs/toolkit'
import counterslice from './Slice'
import productSlice from './Paerslice.js'

const Store = configureStore({
        reducer:{
            counter:counterslice,
            product:productSlice
        }
})

export default Store