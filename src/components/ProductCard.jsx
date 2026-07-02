import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { FaStar } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishList } from '../features/wishList/wishList'

function ProductCard({product}) {
    const dispatch = useDispatch()
    const wishItem = useSelector((state)=>state.wishList.items)
    const iswishlist=wishItem.some((item)=>item.id === product.id)
    const navigate = useNavigate()


  return (
     <motion.div 
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true, amount: 0.2}}
      className='relative p-2 cursor-pointer'
      onClick={()=>navigate(`/product/${product.id}`)}
    >
    <div className='group relative h-full bg-[#fcf3f1] border border-white/50 rounded-b-sm p-2 md:p-4 shadow-md hover:shadow-xl hover:shadow-[#D98E8E]/20 transition-all duration-300 hover:-translate-y-1'>
         {/* WishList  */}
        <button
          onClick={(e)=>{e.stopPropagation();  dispatch(toggleWishList(product))  }}
          className='absolute top-4 md:top-6 right-3 md:right-6 z-10 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/60 backdrop-blur-sm flex justify-center items-center shadow-sm hover:scale-110 transition'
        >
            <Heart size={16} className={iswishlist?  "fill-[#D98E8E] text-[#D98E8E]" : "text-[#4A2E2E] "}/>
        </button>

       {/* bestseller badge */}
       {
        product.rating > 4.5 && (
            <span className="absolute top-4 md:top-6 left-3 md:left-6 z-10 bg-white/60 backdrop-blur-sm text-[10px] uppercase tracking-wide text-[#C97A7A] px-3 py-1 rounded-full font-medium">Bestseller</span>
        )
       }

       {/* images */}
       <div className='relative rounded-2xl overflow-hidden h-50 md:h-80 mb-4 bg-[#FAEDE9]'>
        <img
         src={product.image}
         alt={product.name}
         loading='lazy'
         className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500'
        />
       </div>

       {/* Category tag */}
      <p className="text-[10px] uppercase tracking-wider text-[#C97A7A] mb-1">
        {product.category}
      </p>

      {/* Name */}
      <h3 className="font-serif text-sm md:text-base text-[#4A2E2E] mb-1.5 leading-snug">
        {product.name}
      </h3>

      {/* Rating + Price row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center gap-1 text-sm md:text-base">
          {
            [1,2,3,4,5].map((star)=>(
                <FaStar
                  key={star}
                  className={star <= product.rating?"text-[#E8A99F]" : "text-[#E5DAD5]"}
                />
            ))
          }
          
        </div>
        <div className='flex flex-col justify-center items-start'>
          <div className='flex gap-3 md:gap-2 mt-1 md:mt-auto'>
        <span className="line-through text-gray-400 text-sm md:text-md">Rs.{product.originalPrice}</span>
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs md:text-sm">{product.discount}% OFF</span>
        </div>
        <span className="text-md md:text-lg font-bold text-[#4A2E2E]">Rs.{product.price}</span>
        </div>
      </div>

      {/* out of stock overlay */}
      {
        !product.inStock && (
             <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] rounded-[28px] flex items-center justify-center">
          <span className="bg-[#4A2E2E] text-white text-xs px-4 py-1.5 rounded-full">
            Out of stock
          </span>
        </div>
        )
      }

    </div>
    </motion.div>
  )
}

export default ProductCard