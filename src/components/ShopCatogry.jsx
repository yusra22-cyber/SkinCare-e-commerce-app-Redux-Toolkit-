import React from 'react'
import { motion } from 'framer-motion'
import { useGetProductQuery } from '../features/api/apiSlice'
import { useRef } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ShopCatogry() {

    const ScrollProduct=useRef(null)

    const category=[
        {name:"Serums", image:"/images/serum-product.jpg"},
        {name:"Cleansers", image:"/images/cleanser-product.jpg"},
        {name:"Moisturizers", image:"/images/moisturizer-product.jpg"},
        {name:"Sunscreen", image:"/images/sunscreen-product.jpg"},
        {name:"Toners", image:"/images/toner-product.jpg"},
        {name:"Masks", image:"/images/mask-product.jpg"}
    ]

    const scroll = (direction) =>{
          ScrollProduct.current.scrollBy({left: direction === "left" ? -350 : 350, behavior:"smooth"})
    }

  return (
    <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true, amount:0.3}}
          transition={{ delay: 0.5 }}
          className='py-16 px-5 relative'
        >
            <h2 className='text-center font-serif text-2xl md:text-3xl xl:text-4xl text-[#4A2E2E] mb-10'>
                <span className='italic font-light'>Shop </span> Categories
            </h2>

            {/* scrolls positions */}

             <button onClick={()=>scroll("left")} className='absolute left-3 p-2 md:p-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/60 backdrop-blur-md flex justify-center items-center shadow-md hover:bg-white/80 transition'>
                <FiArrowLeft size={20} className='text-[#4A2E2E] font-bold'/>
             </button>

             <button onClick={()=>scroll("right")} className='absolute right-3 top-1/2 z-50 -translate-y-1/2 rounded-full p-2 md:p-4 bg-white/60 backdrop-blur-md flex justify-center items-center shadow-md hover:bg-white/80 transition'>
                <FiArrowRight size={20} className='text-[#4A2E2E] font-bold'/>
             </button>

             {/* showing items with images */}
             <div ref={ScrollProduct} className='w-[90%] md:w-[95%] m-auto flex justify-start z-20 items-start gap-2 overflow-x-auto scroll-smooth snap-x [&::-webkit-scrollbar]:hidden'>
                 {
                    category.map((item)=>(
                        <Link
                         key={item.name}
                         to={`/products?category=${item.name}`}
                         className="relative flex justify-center items-center shrink-0 w-45 h-60 md:w-50 md:h-80 lg:w-80 lg:h-105 snap-start overflow-hidden "
                        >
                        <img src={item.image} alt={item.name} className='w-full h-full object-cover'/>
                        <span className='absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-md border border-white/60 px-6 py-2 md:px-8 md:py-2.5 rounded-full text-xs md:text-sm tracking-wide text-[#4A2E2E] shadow-md'>{item.name.toUpperCase()}</span>
                        </Link>
                    ))
                 }
             </div>
        </motion.div>
  )
}

export default ShopCatogry