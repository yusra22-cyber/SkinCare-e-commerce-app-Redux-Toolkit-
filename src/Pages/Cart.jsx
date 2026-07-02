import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart, clearCart } from '../features/cart/cartSlice'
import { FiTrash2, FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Cart() {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 150 : 0
  const total = subtotal + shipping

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className='bg-[#FAEDE9] min-h-screen relative flex flex-col'
    >
      <NavBar />

      <main className='flex-1 px-5 md:px-10 py-10 '>
        <h1 className="font-serif text-2xl md:text-3xl xl:text-4xl text-[#4A2E2E] mb-2">Your Bag</h1>
        <p className="text-[#6B6580] text-sm mb-8">{cart.length} item{cart.length !== 1 && 's'} in your cart</p>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <FiShoppingBag size={56} className="text-[#D98E8E]/50 mb-4" />
            <p className="text-[#4A2E2E] font-serif text-lg md:text-xl mb-2">Your bag is empty</p>
            <p className="text-[#6B6580] text-xs md:text-sm mb-6">Looks like you haven't added anything yet.</p>
            <Link to="/products" className="px-5 md:px-7 py-2 text-sm md:text-base md:py-3 rounded-full bg-linear-to-r from-[#E8A99F] to-[#D98E8E] text-white font-medium shadow-md hover:scale-105 transition">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl m-auto">

            {/* Left: Cart items */}
            <div className="flex-1 flex flex-col gap-4">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 bg-white/50 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-sm"
                >
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover bg-[#FAEDE9]" />

                  <div className="flex-1">
                    <h3 className="font-serif text-sm md:text-base text-[#4A2E2E]">{item.name}</h3>
                    <p className="text-sm text-[#C97A7A] mt-1">Rs. {item.price}</p>
                  </div>

                  {/* Quantity control buttons */}
                  <div className="flex items-center gap-3 bg-white/60 rounded-full px-3 py-1.5 border border-white/60">
                    <button onClick={() => dispatch(decreaseQuantity({ id: item.id }))} className="text-[#4A2E2E] font-bold hover:text-[#D98E8E] transition">−</button>
                    <span className="text-sm text-[#4A2E2E] w-4 text-center">{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity({ id: item.id }))} className="text-[#4A2E2E] font-bold hover:text-[#D98E8E] transition">+</button>
                  </div>

                    {/* quantity price shown */}
                  <p className="text-sm font-medium text-[#4A2E2E] w-20 text-right">Rs. {item.price * item.quantity}</p>

                     {/* Remove single items */}
                  <button onClick={() => dispatch(removeFromCart({ id: item.id }))} className="text-[#6B6580] hover:text-[#D98E8E] transition">
                    <FiTrash2 size={18} />
                  </button>
                </motion.div>
              ))}

              <button onClick={() => dispatch(clearCart())} className="text-sm text-[#6B6580] hover:text-[#D98E8E] transition self-start mt-2">Clear cart</button>
            </div>

            {/* Right: Order summary */}
            <div className="lg:w-80">
              <div className="bg-white/50 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="font-serif text-lg text-[#4A2E2E] mb-5">Order Summary</h3>

                <div className="flex justify-between text-sm text-[#6B6580] mb-3">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-[#6B6580] mb-3">
                  <span>Shipping</span>
                  <span>Rs. {shipping}</span>
                </div>
                <div className="border-t border-white/50 my-3" />
                <div className="flex justify-between font-serif text-lg text-[#4A2E2E] mb-6">
                  <span>Total</span>
                  <span>Rs. {total}</span>
                </div>

                <button className="w-full py-3 rounded-full bg-linear-to-r from-[#E8A99F] to-[#D98E8E] text-white font-medium shadow-md hover:scale-105 transition"> Checkout</button>
              </div>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </motion.div>
  )
}

export default Cart