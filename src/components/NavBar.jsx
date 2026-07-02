import React, { useState } from 'react'
import { FiHeart, FiSearch, FiShoppingBag } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import ToogleMenue from './ToogleMenue'

function NavBar() {

  const[searchBar, setSearchBar]=useState(false)
  const cartItems = useSelector(item=>item.cart.items)

  const totalQuantity = cartItems.reduce((total, item)=>total+item.quantity,0)
  const location = useLocation()

  return (
    <nav className='flex items-center justify-between px-2  md:px-5 bg-[#FAEDE9]/40 backdrop-blur-md border-b border-white/40 sticky top-0 z-80'>
        {/* Links */}
        <div className='hidden flex-1 md:flex  items-center gap-6 lg:gap-7'>
            <Link to="/" className={`text-xl transition ${location.pathname === "/" ? "text-[#D98E8E]" : "text-[#4A2E2E] hover:text-[#D98E8E]"}`}>Home</Link>
            <Link to="/products" className={`text-xl transition ${location.pathname === "/products" ? "text-[#D98E8E]" : "text-[#4A2E2E] hover:text-[#D98E8E]"}`}>Shop</Link>
            <Link to="/about" className={`text-xl transition ${location.pathname === "/about" ? "text-[#D98E8E]" : "text-[#4A2E2E] hover:text-[#D98E8E]"}`}>About</Link>
        </div>
        {/* Toogler */}
        <div className='flex md:hidden flex-1'>
           <ToogleMenue/>
        </div>
        {/* Website Name */}
        <div className='flex-1 flex justify-center items-center'>
            <div className='h-14 md:h-18 lg:h-22 w-auto m-auto'>
            <img src='/logo.png' alt="logo" className='w-full h-full object-contain'/>
            </div>
        </div>
        {/* right side links */}
        <div className='flex-1 flex justify-end items-center gap-3'>
            {/* Search */}
            <div>
           <FiSearch className='text-lg md:text-xl cursor-pointer text-[#4A2E2E] hover:text-[#D98E8E] transition'
             onClick={()=>setSearchBar(!searchBar)}
           />
            <SearchBar searchbar={searchBar} setsearchbar={setSearchBar}/>  
           </div>
           <div className='relative cursor-pointer'>
            <Link to="/wishList">
            <FiHeart className={`text-lg md:text-xl cursor-pointer transition ${location.pathname === "/wishList" ? "text-[#D98E8E]" : "text-[#4A2E2E] hover:text-[#D98E8E]"}`}/>
            </Link>
           </div>
             {/* Cart */}
             <div className='relative cursor-pointer'>
            <Link to="/cart">
            <FiShoppingBag className={`text-lg md:text-xl cursor-pointer transition ${location.pathname === "/cart" ? "text-[#D98E8E]" : "text-[#4A2E2E] hover:text-[#D98E8E]"}`}/>
            {
              totalQuantity > 0 && (<span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                {totalQuantity}
              </span>)
            }
            </Link>
           </div>
        </div>
    </nav>
  )
}

export default NavBar