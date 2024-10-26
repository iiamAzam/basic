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
                
        }
}) 

export default productSlice.reducer

