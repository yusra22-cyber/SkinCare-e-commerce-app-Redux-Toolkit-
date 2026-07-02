import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"https://6a3bc652e4a07f202e15d35b.mockapi.io/"}),
    endpoints:(builder)=>({
        getProduct:builder.query({ query : ()=> "Products",keepUnusedDataFor: 300,})
    })
})

export const {useGetProductQuery} =  apiSlice
