import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../features/api/apiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa6'
import ProductCard from './ProductCard'
import Loader from './Loader'
import Footer from './Footer'

function ProductDetail() {
  const { id } = useParams()
  const { data } = useGetProductQuery()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ScrollProduct = useRef(null)

  const product = data?.find(
    (p) => String(p.id) === id
  )

  if(!data) return <Loader/>
  if (!product) return <div>Product not found</div>

    const scroll = (direction) =>{
       ScrollProduct.current.scrollBy({left: direction === "left"? -350 : 350, behavior: "smooth"})
    }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-[#FAEDE9] min-h-screen relative pb-10 md:pb-0"
    >

      <NavBar />

      <div className="px-5 lg:px-16 pt-0 sm:pt-20 md:pt-24 pb-24 md:pb-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* Product Image */}
          <div className='pt-10 md:pt-0'>
             <p className="block md:hidden text-xs uppercase tracking-[2px] text-[#C97A7A] mb-3">{product.brand} • {product.category}</p>
             <div className="rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/50 h-80 md:h-100 lg:h-140">
             <img src={product.image} alt={product.name} className="w-full h-full object-contain md:object-fill" loading="lazy"/>
            </div>
          </div>


          {/* Product Info */}
          <div className="md:sticky md:top-24 md:self-start">
            {/* Brand + Category */}
            <p className="hidden md:block text-xs md:text-sm uppercase tracking-[2px] text-[#C97A7A]">
              {product.brand} • {product.category}
            </p>

            {/* Product Name */}
            <h1 className="font-serif text-2xl md:text-4xl text-[#4A2E2E] mt-2">
              {product.name}
            </h1>

            {/* Badges */}
            <div className="flex gap-2 mt-3">
              {product.newArrival && (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">New Arrival</span>
              )}

              {product.bestseller && (
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Bestseller</span>
              )}
            </div>

            {/* Rating */}
             <div className="flex items-center gap-1 mt-2 text-sm md:text-lg">
                      {
                        [1,2,3,4,5].map((star)=>(
                            <FaStar
                              key={star}
                              className={star <= product.rating?"text-[#E8A99F]" : "text-[#E5DAD5]"}
                            />
                            
                        ))
                      }
                      { 
                        <div className='ms-3 flex justify-center items-center gap-0.5'>
                        <span className="text-sm font-semibold text-[#4A2E2E]">({product.rating})</span>
                        <span className="text-[#C97A7A] text-md">•</span>
                        <span className="text-sm text-gray-500">{product.reviews} Reviews</span>
                        </div>
                      }
                      
                    </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-xl md:text-3xl font-bold text-[#4A2E2E]">
                Rs. {product.price}
              </span>

              <span className="line-through text-gray-400">
                Rs. {product.originalPrice}
              </span>

              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs md:text-sm">
                {product.discount}% OFF
              </span>
            </div>

            {/* Stock */}
            <p
              className={`mt-3 text-sm md:text-base font-medium ${
                product.inStock
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product.inStock
                ? `${product.stock} items available`
                : "Out of Stock"}
            </p>

            {/* Description */}
            <p className="text-[#6B6580] mt-4 md:mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Ingredients */}
            <div className="mt-5">
              <h3 className="font-semibold text-lg text-[#4A2E2E] mb-3">
                Ingredients
              </h3>

              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((item, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-xs md:text-sm shadow-sm hover:bg-[#E8A99F] hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-4 md:mt-5">
              <h3 className="font-semibold text-lg text-[#4A2E2E] mb-3">
                Benefits
              </h3>

              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#FDECEC] text-[#D98E8E] px-4 py-2 rounded-full text-sm hover:bg-[#E8A99F] hover:text-white transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Add To Cart */}
            <button
              onClick={() => {
                dispatch(addToCart(product))
                // navigate("/cart")
              }}

              className="hidden md:flex w-full justify-center items-center mt-8 bg-[#D98E8E] text-white py-4 rounded-full hover:scale-105 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Mobile Bottom Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t p-4 flex items-center justify-between z-50">
          <span className="text-xl font-semibold text-[#4A2E2E]">
            Rs. {product.price}
          </span>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-[#D98E8E] text-white px-6 py-3 rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </div>

       <div className='relative mb-10 mt-3 md:mt-16 py-16 border-t  border-white/80'>
        <h2 className="text-center font-serif text-2xl md:text-3xl xl:text-4xl text-[#4A2E2E] mb-10"> Explore More Products</h2>
        {/* scrolls positions */}
        
                     <button onClick={()=>scroll("left")} className='absolute left-3 p-2 md:p-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/60 backdrop-blur-md  justify-center items-center shadow-md hover:bg-white/80 transition'>
                        <FiArrowLeft size={20} className='text-[#4A2E2E] font-bold'/>
                     </button>
        
                     <button onClick={()=>scroll("right")} className='absolute right-3 top-1/2 z-50 -translate-y-1/2 rounded-full p-2 md:p-4 bg-white/60 backdrop-blur-md  justify-center items-center shadow-md hover:bg-white/80 transition'>
                        <FiArrowRight size={20} className='text-[#4A2E2E] font-bold'/>
                     </button>
        
      <div ref={ScrollProduct} className='flex shrink-0 ms-9 sm:ms-auto relative gap-4 w-[90%] m-auto overflow-x-auto scroll-smooth snap-x [&::-webkit-scrollbar]:hidden'>     
       {
           data.map((item,i)=>(
            <motion.div
                    key={item.id}
                     initial={{opacity:0, y:40}}
                     animate={{opacity:1, y:0}}
                     transition={{type:"spring", stiffness:50, delay:i*0.1}}
                      className='shrink-0 w-[85vw] sm:w-80 md:w-100 snap-start'
                    >
                      <ProductCard key={item.id} product={item}/>


                    </motion.div>
           ))
       }
      </div>
</div>


<Footer/>

    </motion.div>

    
  )
}

export default ProductDetail







