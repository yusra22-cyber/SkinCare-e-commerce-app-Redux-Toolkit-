import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Stripe from '../components/Stripe'
import ShopCatogry from '../components/ShopCatogry'
import PromoBannar from '../components/PromoBannar'
import GlowRoutine from '../components/GlowRoutine'
import Testimonials from '../components/Testimonials'
import { reviews } from './data/Reviews'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function Home() {
  return (
    <motion.div 
      initial={{opacity:0, x:50}}
      animate={{opacity:1, x:0}}
      exit={{opacity:0, x:-50}}
      transition={{type:'spring', stiffness: 50}}
      className='bg-[#FAEDE9] min-h-screen relative '
    >
      
      {/* Navigation */}
      <NavBar/>

      {/* Hero Section */}
      <Hero/>

        <div className='my-5 py-5 md:my-7 md:py-7'></div>
       {/* Stripe section */}
       <Stripe/>

          <div className='my-5 py-5 md:my-7 md:py-7'></div>
       {/* shop category section */}
       <ShopCatogry/>

            <div className='my-5 py-5 md:my-7 md:py-7'></div>
       {/* promo banner */}
       <PromoBannar/>

             <div className='my-5 py-5 md:my-7 md:py-7'></div>
        {/* Glow routine teps */}
       <GlowRoutine/>
       
             <div className='my-5 py-5 md:my-7 md:py-7'></div>
       {/* testimonial */}
        <Testimonials/>

              <div className='my-5 py-5 md:my-7 md:py-7'></div>
        {/* news letter section */}
        <NewsLetter/>

              <div className='my-7 py-7'></div>
        {/* Footer part */}
        <Footer/>
       
    
    </motion.div>
  )
}

export default Home