import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import ProductData from '../components/ProductData'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'

function Products() {
  return (
     <motion.div 
      initial={{opacity:0, x:50}}
      animate={{opacity:1, x:0}}
      exit={{opacity:0, x:-50}}
      className='bg-[#FAEDE9] min-h-screen relative flex flex-col'
    >

      {/* navigationbar */}
      <NavBar/>

      <main className='flex-1 mb-5'>

      {/* Products */}
      <ProductData/>

      {/* Newsletter */}
      <NewsLetter/>
     </main>
  
      {/* footer */}
       <Footer/>

    </motion.div>
  )
}

export default Products