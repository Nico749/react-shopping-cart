import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //get all products (no action because is only fetching)
        getProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false
            state.products = action.payload
        },
        getProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
          //delete products
          deleteProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          deleteProductSuccess: (state, action) => {
            state.isFetching = false
            //splice is only available with redux/toolkit, we remove the product whose id matches with our specific product
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload),1
            )
        },
          deleteProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
         //update products
         updateProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          updateProductSuccess: (state, action) => {
            state.isFetching = false
            state.products[
                state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product
            
        },
          updateProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
         //add product
         addProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          addProductSuccess: (state, action) => {
            state.isFetching = false
            state.products.push(action.payload)
            
        },
          addProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    },
});

export const { getProductStart,getProductFailure,getProductSuccess, deleteProductFailure,deleteProductStart,deleteProductSuccess,
    updateProductFailure,updateProductSuccess,updateProductStart, addProductFailure,addProductStart,addProductSuccess

} = productSlice.actions;

export default productSlice.reducer;