import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
        quantity: 0,
        total:0
    },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1 // cart quantity
      localStorage.setItem('cart', state.quantity)

      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity // quantity of a single item 
      
      toast.success(`${action.payload.quantity} ${action.payload.title} added to cart!`, {
        position: "bottom-left",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.products));

    },
    cartEnd: (state, action) => {

      state.products = []
      state.quantity = 0 // cart quantity
      localStorage.removeItem('cart')


      state.total = 0
      //window.location.assign('/');

    },
    removeProduct(state, action) {

      const id = (action.payload.product._id)
      const toDelete = []
      toDelete.push(id)
      // console.log(toDelete)

      const newList = (JSON.parse(localStorage.getItem("cartItems")))
      //console.log(newList)

      for (var i = 0; i < newList.length; i++) {
        var obj = newList[i];
        // console.log(obj)
        if (toDelete.indexOf(obj._id) !== -1) {
          //console.log('yes')
          newList.splice(i, 1);
          i--;
          localStorage.setItem("cartItems", JSON.stringify(newList));
          console.log(localStorage.getItem("cartItems"))
        }
        //else{console.log('no')}
      }
      state.products = newList
      state.quantity -= 1 // cart quantity
      state.total -= (action.payload.product.price * action.payload.product.quantity)// quantity of a single item 

      localStorage.setItem('cart', state.quantity)
      toast.error("Product removed from cart", {
        position: "bottom-left",
      });
    },
    clearCart(state, action) {
      state.products = [];
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      state.quantity = 0;
      state.total =0
      localStorage.setItem('cart', state.quantity)
      toast.error("Cart cleared!", { position: "bottom-left" });
    },
    getTotals(state, action) {
      let { total, quantity } = state.products.reduce(
        //cb function
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        //initial value
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.quantity = quantity;
      state.total = total;
    }
  }
    })


export const {addProduct, cartEnd,removeProduct, clearCart, getTotals} = cartSlice.actions
export default cartSlice.reducer 