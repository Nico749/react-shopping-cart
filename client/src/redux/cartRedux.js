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
            state.quantity +=1 // cart quantity
            localStorage.setItem('cart',state.quantity)
    
            state.products.push(action.payload)
            state.total +=action.payload.price*action.payload.quantity // quantity of a single item 
            
        }, 
        //TO DO remove a product(works but currently removing all the products)
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