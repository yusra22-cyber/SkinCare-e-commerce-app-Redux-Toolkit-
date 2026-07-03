import React,{ useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const [activeCard, setActiveCard] = useState(null)
    const products_for_grid=["serum", "cleanser", "ordinary", "spf", "toner", "mask"]

    const products_images={
      serum:"/images/serum.jpg",
      cleanser:"/images/cleansing2.jpg",
      ordinary:"/images/ordinary.jpg",
      spf:"/images/spf.jpg",
      toner:"/images/toner.jpg",
      mask:"/images/mask.jpg",
    }

    const navigate = useNavigate()
    
  return (
    <section className='flex flex-col md:flex-row relative px-5 items-center justify-between overflow-hidden gap-10 mt-12 md:mt-18 w-[95%] md:w-[90%] m-auto'>
    
       {/* left section with animation */}
       <motion.div
         initial={{opacity:0, x:-40}}
         animate={{opacity:1, x:0}}
         transition={{type:"spring", stiffness:50}}
         className="flex-1 max-w-lg"
       >

        {/* Small decorative accent chip above heading */}
        <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-white/60 rounded-full px-4 py-1.5 mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D98E8E] animate-pulse"></span>
          <span className="text-xs text-[#4A2E2E] font-medium">Loved by 10,000+ glowing customers</span>
        </div>

         {/* headings */}
        <p className='text-sm uppercase tracking-[3px] text-[#C97A7A] mb-3'>Beauty Begins Here</p>
        <h1 className='font-serif text-4xl  lg:text-5xl xl:text-6xl leading-tight text-[#4A2E2E] mb-5'>Your Best Skin, <br/>With GlowCart</h1>
        <p className='text-[#6B6580] text-sm lg:text-base mb-8'>Transform your skincare routine with products that hydrate, repair, and brighten your skin every day.</p>
        <button onClick={()=>navigate("/products")} className='px-7 py-3 rounded-full bg-linear-to-r from-[#E8A99F] to-[#D98E8E] text-white font-medium shadow-md hover:scale-105 transition '>Shop Collection</button>
       </motion.div>

       {/* for mobile right side  */}
       <div className="md:hidden flex justify-center items-center h-52 relative w-full">
         {products_for_grid.slice(0,5).map((p, i) => (
         <motion.div
          key={i}
          style={{ left: `${i * 17 + 4}%`, zIndex: activeCard === i ? 50 : i }}
          animate={{rotate: activeCard === i ? 0 : `${(i-2) * 6}deg`, y: activeCard === i ? -30 : 0,scale: activeCard === i ? 1.1 : 1,}}
          whileTap={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => setActiveCard(activeCard === i ? null : i)}
          className="absolute w-29 [@media(max-width:430px)]:w-26 h-44 rounded-2xl overflow-hidden border-2 border-white shadow-lg cursor-pointer"
        >
        <img src={products_images[p]} className="w-full h-full object-cover" loading="lazy"/>
    
        {/* shinjing effect for active card */}
        {activeCard === i && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-linear-to-t from-[#D98E8E]/40 to-transparent"
       />
       )}
      </motion.div>
       ))}
       </motion.div>

       
        {/* for desktop right side */}

       <div className="flex-1 hidden md:grid grid-cols-2 md:grid-cols-3 gap-3 max-w-md py-5">
        {products_for_grid.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1 }}
             className={`rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-2xl hover:shadow-[#D98E8E]/40 transition-shadow duration-300 ${i === 1 ? "row-span-2 col-span-2 h-50 lg:h-auto mt-10 lg:mt-0" : ""} ${i === 3 ? "row-span-2 h-30 lg:h-auto" : ""}
                          ${i === 0 ? "self-start mt-6" : ""} ${i === 4 ? "self-end -mt-4" : ""}`}
            >
             <img 
              src={products_images[p]} 
              alt={p} 
             className='w-full h-full object-cover hover:brightness-105 transition' 
            loading="lazy"
                 />
            </motion.div>
        ))}

       </div>



    </section>
  )
}

export default Hero
