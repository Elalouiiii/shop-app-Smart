import { createSlice } from '@reduxjs/toolkit'
import {  toast } from 'react-toastify';


export const shopSlice = createSlice({
  name: 'cart',
  initialState: {
    shopCart: []
  },
  
  reducers: {
    addProduct: (state, action) => {
      const prodIndex = state.shopCart.findIndex((item) => item.id == action.payload.id);
      const data = action.payload;
      if (prodIndex == -1) {
        state.shopCart.push({ ...data, quantity: 1 })
        toast.success("Product Add!");

      } else {
        let quantity = Number(state.shopCart[prodIndex].quantity)
        state.shopCart[prodIndex] = { ...data, quantity: quantity + 1 }
        toast.info("Product Increment");
  

      }
    },
    
    decrement: (state, action) => {
      const prodIndex = state.shopCart.findIndex((item) => item.id == action.payload.id);
      const data = action.payload;
      if (data.quantity > 1) {
        let quantity = Number(state.shopCart[prodIndex].quantity)
        state.shopCart[prodIndex] = { ...data, quantity: quantity - 1 }
        toast.info("Product decrement");
      } else {
        state.shopCart = state.shopCart.filter((item) => item.id !== action.payload.id)
       

      }


    },



    removeFromCart: (state, action) => {
      state.shopCart = state.shopCart.filter((item) => item.id !== action.payload.id)
      toast.warning("Product deleted")


    },
    clairAllCart: (state, action) => {
      state.shopCart = [];
      toast.error("All Product Deleted ! ! !")

    },
    
  }
}

)

export const { addProduct, decrement, removeFromCart, clairAllCart } = shopSlice.actions
export default shopSlice.reducer; 