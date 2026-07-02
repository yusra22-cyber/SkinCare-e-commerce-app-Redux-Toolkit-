import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{

        // Add to cart reducer
        addToCart:(state,action)=>{
           const existing=state.items.find(item=>item.id === action.payload.id)
           if(existing){
            existing.quantity +=1
           }
           else{
            state.items.push({...action.payload, quantity:1})
           }
        },

        // remove from cart  reducer
        removeFromCart: (state,action)=>{
            state.items=state.items.filter(item=>item.id !== action.payload.id)
        },

        // increase the item quantity
        increaseQuantity: (state,action)=>{
            const item = state.items.find(item=>item.id === action.payload.id)
            if(item){
                item.quantity += 1
            }
        },

        // decrease Quantity
        decreaseQuantity: (state,action)=>{
            const item = state.items.find(item=>item.id === action.payload.id)
            if(item){
                item.quantity -= 1
            }
            if(item.quantity <= 0)
                state.items=state.items.filter(item=>item.id !== action.payload.id)
        },


        // empty the existing cart
        clearCart: (state)=>{
            state.items = []
        }
    }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions
export const cartReducer= cartSlice.reducer
