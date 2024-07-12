import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'

export const productSlice = createSlice({
  name: 'Product',
  initialState: {
    cartItem: localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) :[]  ,
  },
  reducers: {
    addtoCart: (state,action) => {
       let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id)

       if(findProduct !== -1){
        state.cartItem [findProduct].quan += 1
        localStorage.setItem("Cart", JSON.stringify(state.cartItem)) 
       }else{
        state.cartItem = [...state.cartItem , action.payload]
        localStorage.setItem("Cart", JSON.stringify(state.cartItem)) 
       }
        
    },

      productIncrement:(state,action)=>{
        state.cartItem[action.payload].quan += 1
        localStorage.setItem("Cart", JSON.stringify(state.cartItem)) 

      },

     productDecrement:(state,action)=>{
      if(state.cartItem[action.payload].quan  > 1){
        state.cartItem[action.payload].quan -= 1
        localStorage.setItem("Cart", JSON.stringify(state.cartItem)) 
      }
     },

     productSplice:(state,action)=>{
        state.cartItem.splice(action.payload, 1)
        localStorage.setItem("Cart", JSON.stringify(state.cartItem)) 
     }

   
  
  },
})

// Action creators are generated for each case reducer function
export const { addtoCart,productIncrement,productDecrement,productSplice } = productSlice.actions

export default productSlice.reducer