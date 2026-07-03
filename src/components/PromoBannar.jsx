import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function PromoBannar() {

    const navigate = useNavigate()
  return (
    <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ delay: 0.5 }}
  className='relative px-12 md:px-16 py-10 bg-white/60   backdrop-blur-md shadow-xl w-[90%] h-100 md:h-125 m-auto rounded-3xl overflow-hidden flex items-center justify-between'
>

  {/* Left side*/}
  <div className="flex-1 max-w-xl relative z-10 ">
    <p className="text-sm uppercase tracking-[3px] text-[#C97A7A] mb-3">Limited Time Offer</p>
    <h2 className="font-serif  text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#4A2E2E] leading-[1.05] mbe-2 md:mb-4">Beauty <br /> Skincare</h2>
    <p className="font-serif text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-[#D98E8E] mb-1">Special Discount</p>
    <p className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#4A2E2E] mb-3 md:mb-5">upto 30% OFF</p>
    <p className="italic text-[#6B6580] text-md xl:text-lg mb-5 md:mb-6">For all skin types, only this month</p>
    <button onClick={()=>navigate("/products")} className="px-7 py-3 rounded-full bg-linear-to-r from-[#E8A99F] to-[#D98E8E] text-white font-medium shadow-md hover:scale-105 transition">
      Shop Now
    </button>
  </div>

  {/* right side */}
   <div className="relative w-64 lg:w-84 xl:w-[24rem] h-100 lg:h-125 hidden md:block ml-auto shrink-0">
    <div className="absolute left-0 lg:left-0 top-1/2 -translate-y-1/2 w-48 h-64 lg:w-64 lg:h-80 overflow-hidden rounded-[45%_55%_35%_65%/55%_35%_65%_45%] shadow-lg">
      <img src='/images/model.jpg' className='w-full h-full object-cover' alt="banner1" loading="lazy" />
    </div>

    <div className="absolute left-40 lg:left-45 top-18 lg:top-10 w-34 h-34 lg:w-40 lg:h-40 overflow-hidden rounded-full shadow-lg border-4 border-white/60">
      <img src='/images/model2.jpg' className='w-full h-full object-cover'alt="banner2" loading="lazy"  />
    </div>

    <div className="absolute top-60 lg:top-65 left-30 lg:left-40 w-46 h-50 lg:w-56 lg:h-58 overflow-hidden rounded-[50%_50%_35%_65%/30%_70%_30%_70%] shadow-lg">
      <img src='/images/model3.jpg' className='w-full h-full object-cover'alt="banner3" loading="lazy"  />
    </div>
  </div>

</motion.div>
  )
}

export default PromoBannar
