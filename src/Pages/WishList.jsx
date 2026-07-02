import React from 'react'
import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

function WishList() {
   const wishItem = useSelector((state)=>state.wishList.items)

  return (
    <motion.div 
      initial={{opacity:0, x:50}}
      animate={{opacity:1, x:0}}
      exit={{opacity:0, x:-50}}
      className='bg-[#FAEDE9] min-h-screen relative flex flex-col'
    >
     
      {/* navigationbar */}
      <NavBar/>
    <main className='flex-1 py-10 md:py-20 mb-10'>
      <h1 className="font-serif text-2xl md:text-3xl xl:text-4xl text-[#4A2E2E] mb-6 text-center">Your WishList</h1>
      {/* wishList items */}
      
              {(wishItem.length)==0?(
                <div className="flex flex-col items-center justify-center py-24 text-center">
                            <Heart size={56} className="text-[#D98E8E]/50 mb-4" />
                            <p className="text-[#4A2E2E] font-serif text-lg md:text-xl mb-2">Your WishLIst is empty</p>
                            <p className="text-[#6B6580] text-xs md:text-sm mb-6">Looks like you haven't added anything yet.</p>
                            <Link to="/products" className="px-5 md:px-7 py-2 text-sm md:text-base md:py-3 rounded-full bg-linear-to-r from-[#E8A99F] to-[#D98E8E] text-white font-medium shadow-md hover:scale-105 transition">
                              Start Shopping
                            </Link>
                          </div>
              ):(
                <div className=' grid grid-cols-2 md:grid-cols-3 w-[95%] md:w-[90%] m-auto'>
               {wishItem.map((product)=>(
                      <ProductCard key={product.id}  product={product}/>
                  ))}
                  </div>
                  )}
           
    </main>
{/* footer */}
<Footer/>
    </motion.div>
  )
}

export default WishList