import React, { useState } from 'react'
import { motion } from 'framer-motion'

function NewsLetter() {
    const[news, setNews] = useState("")
    const[subscribed, setSubscribed] = useState(false)

    const handleSearch=()=>{
        if( news.trim() === "" || !news.includes("@")) return    // if their is empty and not inclufde @ return nothing
        setSubscribed(true)
        setNews("")
    }
  return (
    <motion.div
         initial={{opacity:0, y:40}}
         animate={{opacity:1, y:0}}
         transition={{type:"spring", stiffness:50, delay:0.1}}
          className='relative pt-20 overflow-hidden'
        >

             {/* Glow effects*/}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8A99F] rounded-full blur-3xl opacity-40 -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D98E8E] rounded-full blur-3xl opacity-30 -z-10" />

            {/* Headings */}
                 <h2 className='text-center font-serif text-2xl md:text-3xl xl:text-4xl text-[#4A2E2E] mb-2'>Join The Glow Club</h2>
                 <p className='text-center text-[10px] sm:text-xs lg:text-sm uppercase tracking-[3px] text-[#C97A7A] mb-10'>Skincare tips, straight to your inbox</p>
            
            <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{opacity: 1, scale: 1}}
                      viewport={{once: true, amount:0.3}}
                      transition={{ delay: 0.5 }}
                      className="py-16 px-8 relative overflow-hidden flex flex-col justify-center items-center w-[90%] max-w-2xl m-auto bg-white/50 shadow-md backdrop-blur-md border border-white/50 rounded-3xl"
                    >
                         
                        <p className='text-[#6B6580] text-md md:text-lg text-center leading-relaxed mb-1'>Get skincare tips, exclusive offers,</p>
                        <p className='text-[#6B6580] text-md md:text-lg text-center leading-relaxed mb-8'> and early access to new arrivals.</p>
                       {
                        subscribed?(
                            <motion.p
                             initial={{opacity:0, scale:0.9}}
                             animate={{opacity:1, scale:1}}
                             className='text-[#4A2E2E] font-serif text-lg'
                            >
                                🎉 You're in! Check your inbox soon.
                            </motion.p>
                        ):(
                            <div className='flex flex-col sm:flex-row gap-3 w-full max-w-md'>
                            <input
                             type='text'
                             value={news}
                             onChange={(e)=>setNews(e.target.value)}
                             placeholder='Enter your Email.....'
                             className='flex-1 px-5 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/60 text-[#4A2E2E] placeholder-[#6B6580] focus:outline-none focus:ring-2 focus:ring-[#D98E8E]/40 transition'
                            />
                            <button onClick={handleSearch} className='px-7 py-3 rounded-full bg-linear-to-r from-[#E8A99F] to-[#D98E8E] text-white font-medium shadow-md hover:scale-105 transition whitespace-nowrap'>Subscribe</button>
                        </div>
                        )
                       }

                       <p className="text-xs text-[#6B6580]/70 mt-5">No spam. Dummy subscription.</p>
                    </motion.div>
        </motion.div>
  )
}

export default NewsLetter