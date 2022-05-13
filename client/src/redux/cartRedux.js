import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state, action) =>{
            state.quantity +=1 //this is the cart quantity
            state.products.push(action.payload)
            state.total +=action.payload.price*action.payload.quantity //this is the quantity of a single item 
            
        }, 
        // removeProduct: (state, action) => {

        //     state.products.map((product) => {
        //         if (product.id === action.payload.id) {
        //             const nextCartItems = state.products.filter(
        //                 (item) => item.id !== product.id
        //             );

        //             state.products = nextCartItems;
        //             state.total -= action.payload.price * action.payload.quantity
        //             toast.error("Product removed from cart", {
        //                 position: "bottom-left",
        //             });
        //         }
        //         localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        //         return state;
        //     });
        // },
     
        
          
          
        }
    })


export const {addProduct} = cartSlice.actions
export default cartSlice.reducer 