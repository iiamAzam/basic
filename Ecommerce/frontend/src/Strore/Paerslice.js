import { createSlice } from "@reduxjs/toolkit";



var products;
 (function prdt(){
    products = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>json)
 })()
const productSlice = createSlice({
        name:"product",
        initialState:products,
        reducers: {
            increment:(state)=>state+1
        }
}) 

export default productSlice.reducer

