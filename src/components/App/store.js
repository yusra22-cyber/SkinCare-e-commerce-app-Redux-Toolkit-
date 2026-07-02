import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../../features/api/apiSlice";
import { cartReducer } from "../../features/cart/cartSlice";
import { wishListReducer } from "../../features/wishList/wishList";



export const store=configureStore({
    reducer:{
       [apiSlice.reducerPath] : apiSlice.reducer,
       cart : cartReducer,
       wishList : wishListReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
}) 