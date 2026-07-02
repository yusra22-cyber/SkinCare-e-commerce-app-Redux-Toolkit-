import {motion, AnimatePresence } from 'framer-motion'
import { create } from 'framer-motion/m'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { FaHome } from 'react-icons/fa'
import { FiFacebook, FiHeart, FiInfo, FiInstagram, FiShoppingBag, FiShoppingCart, FiTwitter } from 'react-icons/fi'
import { href, Link } from 'react-router-dom'

function ToogleMenue() {
    const[open,setOpen]=useState(false)

    const links=[
      {to:"/", label: "Home", icon: <FaHome size={20}/>},
      {to:"/products", label: "Shop", icon: <FiShoppingBag size={20}/>},
      {to:"/wishList", label:"WishList", icon: <FiHeart size={20}/>},
      {to:"/cart", label:"Cart", icon: <FiShoppingCart size={20}/>},
      {to:"/about", label:"About", icon: <FiInfo size={20}/>}
    ]
  return (
    <div className='relative flex md:hidden '>
        {/* icon button */}
        <button onClick={()=>setOpen(!open)} className='self-end text-2xl text-[#4A2E2E]'>{open ? "" : "☰"}</button>

        {/* dropdown menue */}
         
           {createPortal(
             open && (
            <motion.div
             initial={{ opacity: 0, x: -300 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -300 }}
             transition={{ duration: 0.25 }}
             className="fixed inset-0 z-999 backdrop-blur-sm md:hidden"
            >
           <div className='w-[80%] ms-0 h-full  m-auto bg-white/95  flex flex-col gap-6 [@media(max-width:400px)]:gap-4 px-5 py-10 [@media(max-width:400px)]:py-5 '>
           {/* Close button */}
           <button onClick={() => setOpen(false)} className="self-end text-2xl text-[#4A2E2E] mb-10">✕</button>
               
               {/* dropdown menue */}
           {
           links.map((link) => (
             <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="group text-xl [@media(max-width:400px)]:text-base font-serif text-[#4A2E2E] hover:text-[#D98E8E] transition-all duration-200 border-b border-[#E8A99F]/30 pb-2 hover:pl-3 flex gap-2 items-center"
            >
            <span className='w-9 h-9 rounded-full flex justify-center items-center bg-[#FDECEC] group-hover:bg-[#D98E8E] transition-all duration-200'>
            <span className='text-[#4A2E2E] group-hover:text-white transition-colors duration-200'>{link.icon}</span>
            </span>
             {link.label}
            </Link>
            ))}

            {/* social */}
            <div className='mt-auto pt-6 border-t border-[#E8A99F]/30'>
               <p className="text-sm text-[#6B6580] italic mb-4">Glow-worthy skincare, crafted with love</p>
               <div className='flex gap-3'>
                  {
                    [FiInstagram, FiFacebook, FiTwitter].map((Icon,i)=>(
                      <a
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-full bg-[#FDECEC] hover:bg-[#D98E8E] flex items-center justify-center text-[#D98E8E] hover:text-white transition-all duration-200"
                      >
                        <Icon size={20}/>
                      </a>
                    ))
                  }
               </div>
            </div>

            </div>
          </motion.div>
            ),
            document.body
           )
           }

      


    </div>
  )
}

export default ToogleMenue