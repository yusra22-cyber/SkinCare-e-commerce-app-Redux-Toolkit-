import { createSlice } from "@reduxjs/toolkit";

const wishListSlice= createSlice({
    name: "wishlist",
    initialState:{
        items:[]
    },
    reducers:{

        // favoutrte items togglers for whishlist page
        toggleWishList:(state,action)=>{
            const itemExist = state.items.find(item=>item.id === action.payload.id)
            if(itemExist){
                  state.items=state.items.filter(item=>item.id !== action.payload.id)
            }
            else{
                 state.items.push(action.payload)
            }
        }

    }
})

export const {toggleWishList} = wishListSlice.actions
export const wishListReducer = wishListSlice.reducer