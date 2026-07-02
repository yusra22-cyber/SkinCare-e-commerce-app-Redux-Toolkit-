import React from 'react'
import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'
import { Key } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{opacity: 1, scale: 1}}
                      viewport={{once: true, amount:0.3}}
                      transition={{ delay: 0.5 }}
                      className="relative overflow-hidden w-full bg-white/50 backdrop-blur-md border-t border-white/50"
                      >
                     <div className="py-16 px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div className='md:col-span-2'>
                     <h2 className='text-center font-serif text-4xl text-[#4A2E2E] mb-2 '><span className='text-[#df8a8a]'>Glow</span>Cart</h2>
                    <p className='text-[#6B6580] text-sm text-center leading-relaxed mt-3'>Skincare curated for healthy, radiant skin.</p>
                    
                    {/* Icons */}
                    <div className='flex justify-center gap-3'>
                        {
                            [FiInstagram, FiFacebook, FiTwitter, FiMail].map((Icon,i)=>(
                                <a
                                key={i}
                                href="#"
                                className="w-9 h-9 rounded-full bg-white/60 backdrop-blur-sm border mt-4 border-white/60 flex items-center justify-center text-[#4A2E2E] hover:bg-[#D98E8E] hover:text-white transition"
                                >
                                   <Icon size={15}/>
                                </a>
                            ))
                        }
                    </div>
                    </div>
               
                   
                   {/* for mobile */}
                   <div className='flex md:hidden justify-evenly gap-20 items-center'>
                     <div>
                        <h4 className='text-sm uppercase tracking-wider text-[#C97A7A] mb-2'>Shop</h4>
                        <ul className='space-y-2 text-sm text-[#6B6580]'>
                            <li><Link to="/products" className="hover:text-[#D98E8E] transition">All</Link></li>
                            <li><Link to="/products?category=Serums" className="hover:text-[#D98E8E] transition">Serums</Link></li>
                            <li><Link to="/products?category=Moisturizers" className="hover:text-[#D98E8E] transition">Moisturizers</Link></li>
                            <li><Link to="/wishList" className="hover:text-[#D98E8E] transition">WishList</Link></li>
                        </ul>
                      </div>

                      {/* Company links */}
                       <div>
                        <h4 className='text-sm uppercase tracking-wider text-[#C97A7A] mb-2'>Company</h4>
                        <ul className='space-y-2 text-sm text-[#6B6580]'>
                            <li><Link to="/about" className="hover:text-[#D98E8E] transition">About us</Link></li>
                            <li><a href="#" className="hover:text-[#D98E8E] transition">Contact us</a></li>
                            <li><a href="#" className="hover:text-[#D98E8E] transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#D98E8E] transition">Terms of Service</a></li>
                        </ul>
                      </div>

                      
                   </div>

                    {/* for desttok */}
                   {/* Shops items */}
                      <div className='hidden md:block'>
                        <h4 className='text-sm uppercase tracking-wider text-[#C97A7A] mb-2'>Shop</h4>
                        <ul className='space-y-2 text-sm text-[#6B6580]'>
                            <li><Link to="/products" className="hover:text-[#D98E8E] transition">All</Link></li>
                            <li><Link to="/products?category=Serums" className="hover:text-[#D98E8E] transition">Serums</Link></li>
                            <li><Link to="/products?category=Moisturizers" className="hover:text-[#D98E8E] transition">Moisturizers</Link></li>
                            <li><Link to="/wishList" className="hover:text-[#D98E8E] transition">WishList</Link></li>
                        </ul>
                      </div>

                      {/* Company links */}
                       <div className='hidden md:block'>
                        <h4 className='text-sm uppercase tracking-wider text-[#C97A7A] mb-2'>Company</h4>
                        <ul className='space-y-2 text-sm text-[#6B6580]'>
                            <li><Link to="/about" className="hover:text-[#D98E8E] transition">About us</Link></li>
                            <li><a href="#" className="hover:text-[#D98E8E] transition">Contact us</a></li>
                            <li><a href="#" className="hover:text-[#D98E8E] transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#D98E8E] transition">Terms of Service</a></li>
                        </ul>
                      </div>
              </div>

               <div className="border-t border-white/40 py-5 px-8 text-center ">
                    <p className="text-xs text-[#6B6580]">© {new Date().getFullYear()} GlowCart. All rights reserved.</p>
               </div>
               
                    </motion.div>
  )
}

export default Footer