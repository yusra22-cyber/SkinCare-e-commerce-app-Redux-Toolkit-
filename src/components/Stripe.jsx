import React from 'react'
import { motion } from 'framer-motion'
import { FiRefreshCw, FiShield, FiTruck } from 'react-icons/fi'
import { FaPaw } from 'react-icons/fa'
import { MdHealthAndSafety } from 'react-icons/md'

function Stripe() {
  return (
   <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ delay: 0.5 }}
  className='w-[90%] m-auto px-3 py-6 grid grid-cols-2 gap-y-6 gap-x-3 lg:flex lg:flex-nowrap lg:justify-evenly lg:gap-0 items-center bg-white/40 shadow-xl backdrop-blur-md rounded-md overflow-hidden'
>

  <div className='flex justify-center items-center gap-3 lg:border-r border-[#4A2E2E]/15 lg:pe-10'>
    <FiTruck size={30} className='text-[#4A2E2E] shrink-0'/>
    <div className='flex flex-col justify-center items-start'>
      <h1 className='text-sm md:text-md text-[#4A2E2E] font-bold'>Free Shipping</h1>
      <p className='text-xs text-gray-600'>On all orders</p>
    </div>
  </div>

  <div className='flex justify-center items-center gap-3 lg:border-r border-[#4A2E2E]/15 lg:pe-10'>
    <FaPaw size={30} className='text-[#4A2E2E] shrink-0'/>
    <div className='flex flex-col justify-center items-start'>
      <h1 className='text-sm md:text-md text-[#4A2E2E] font-bold'>Cruelty-Free</h1>
      <p className='text-xs text-gray-600'>We never test <br/> on animals</p>
    </div>
  </div>

  <div className='flex justify-center items-center gap-3 lg:border-r border-[#4A2E2E]/15 lg:pe-10'>
    <MdHealthAndSafety size={30} className='text-[#4A2E2E] shrink-0'/>
    <div className='flex flex-col justify-center items-start'>
      <h1 className='text-sm md:text-md text-[#4A2E2E] font-bold'>Dermatologist Tested</h1>
      <p className='text-xs text-gray-600'>Safe and gentle <br/> for your skin</p>
    </div>
  </div>

  <div className='flex justify-center items-center gap-3 lg:border-r border-[#4A2E2E]/15 lg:pe-10'>
    <FiRefreshCw size={30} className='text-[#4A2E2E] shrink-0'/>
    <div className='flex flex-col justify-center items-start'>
      <h1 className='text-sm md:text-md text-[#4A2E2E] font-bold'>Easy Returns</h1>
      <p className='text-xs text-gray-600'>7-day hassle <br/> free returns</p>
    </div>
  </div>

  <div className='flex justify-center items-center gap-3 col-span-2 lg:col-span-1 lg:pe-10'>
    <FiShield size={30} className='text-[#4A2E2E] shrink-0'/>
    <div className='flex flex-col justify-center items-start'>
      <h1 className='text-sm md:text-md text-[#4A2E2E] font-bold'>Secure Checkout</h1>
      <p className='text-xs text-gray-600'>100% safe & <br/> secure payments</p>
    </div>
  </div>

</motion.div>
  )
}

export default Stripe