import React, { useState } from 'react'
import {useGetProductQuery} from "../features/api/apiSlice"
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import Loader from './Loader'

function ProductData() {
    const {data, isLoading, isError, error} = useGetProductQuery()
    const[searchParams, setSearchParams] = useSearchParams()
    const searchDataFromUrl = searchParams.get("category") || "All"
    const [selcetCat, setSelectCat] = useState(searchDataFromUrl)
    const[visibleCount, setVisibleCount] = useState(12)

    useEffect(()=>{
      setSelectCat(searchDataFromUrl)
    },[searchDataFromUrl])
    
    if(isLoading) return<><Loader/></>
    if(isError) return<><p>{JSON.stringify(error)}</p></>

    const categories = ['All', ...new Set(data.map(item=>item.category))]
    const FilterItems = selcetCat === "All"? data : data.filter(item=>item.category === selcetCat)

  return (
    <>
       
       {/* Heading */}
      <div className='text-center py-10 md:py-14'>
          <p className='text-xs uppercase tracking-[3px] text-[#C97A7A] mb-2'>Curated For You</p>
          <h1 className='font-serif text-2xl md:text-4xl xl:text-5xl  text-[#4A2E2E]'>Our Products</h1>
          <p className='text-[#6B6580] mt-3 text-sm md:text-base'>Glow-worthy skincare, crafted with love</p>
      </div>

      {/* Promo Strip */}
      <div className='w-full m-auto mb-6 py-3 px-6 bg-white/40 backdrop-blur-md text-center text-sm text-[#4A2E2E]'>
                🌸 Free shipping on orders above Rs. 3000
      </div>

    {/* Pills for filter category */}
    <div className='flex gap-3 md:justify-center items-center md:flex-wrap overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden px-4 md:px-2 py-2 md:py-0 mt-8'>
       {
        categories.map((item)=>(
           <motion.button
              key={item}
              onClick={()=>setSelectCat(item)}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.05,}}
              className={`px-5 py-2 my-2 md:mt-2  rounded-full text-sm whitespace-nowrap transition ${selcetCat === item ? "bg-[#D98E8E] text-white shadow-md" : "bg-white/50 backdrop-blur-sm border border-white/60 text-[#4A2E2E] hover:bg-white/70"}`}
            >
              {item}

            </motion.button>
        ))
       }
    </div>

     <div className=' grid grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[90%] m-auto mt-8 md:mt-12'>
        {
            FilterItems.slice(0,visibleCount).map((product)=>(
                <ProductCard key={product.id}  product={product}/>
            ))
        }
     </div>

     {/* buttons */}
    <div className='flex justify-center items-center gap-4 mt-20'>
    {/* prev button */}
     {
      visibleCount > 8 && (
         <button 
          onClick={()=>{
            setVisibleCount(prev=>{
            const newCount = prev - 8
            return newCount <= 0? 8 : newCount
          })
            window.scrollTo({top:0, behavior: 'smooth'})
        }}
          className='px-6 py-2 bg-[#D98E8E] text-white backdrop-blur-sm border border-white/60 rounded-full hover:bg-[#D98E8E]/80 hover:hover:scale-105 transition-all'
         >Prev</button>
      )
     }

 

    {/* next button */}
     {
      visibleCount < FilterItems.length && (
        <button onClick={()=>{
          setVisibleCount(prev=>prev=prev+8)
          window.scrollTo({top:0, behavior: 'smooth'})
        }} className='px-6 py-2 bg-[#D98E8E] text-white backdrop-blur-sm border border-white/60 rounded-full hover:bg-[#D98E8E]/80 hover:hover:scale-105 transition-all'>Next</button>
      )
     }
     </div>
    </>
  )
}

export default ProductData
