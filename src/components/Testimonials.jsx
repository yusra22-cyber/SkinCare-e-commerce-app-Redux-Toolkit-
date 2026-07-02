import React from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { reviews } from '../Pages/data/Reviews'
import { FaStar } from 'react-icons/fa'

function Testimonials() {
  return (
    <section className='overflow-hidden'>

      {/* headings */}
      <p className='text-center text-sm uppercase tracking-[3px] text-[#C97A7A] mb-2'>What our customers says</p>
      <h2 className='text-center font-serif text-2xl md:text-3xl xl:text-4xl text-[#4A2E2E] mb-14'>Loved by Real Skin</h2>

      <div className='flex justify-start items-start gap-14 overflow-hidden w-[90%] m-auto continous-animate'>
      {
        reviews.concat(reviews).map((review,i)=>(
        <motion.div
        key={`${review.id}-${i}`}
         initial={{opacity:0, y:40}}
         animate={{opacity:1, y:0}}
         transition={{type:"spring", stiffness:50, delay:i*0.1}}
          className='relative pt-20 '
        >
            
            <div className='absolute top-10 left-1/2 -translate-x-1/2  z-10 flex bg-white/70 backdrop-blur-md border border-white/60 w-16 h-16 rounded-full justify-center items-center shadow-md'>
            <User size={30} className='text-[#4A2E2E]'/>
          </div>

          
          <div className='bg-[#fcf3f1] max-w-xs lg:max-w-md h-52 lg:h-58 border border-white/50 p-8 shadow-md rounded-2xl  flex flex-col items-center text-center'>
           {/* name section */}
           <p className='font-serif text-base text-[#4A2E2E]'>{review.name}</p>
           {/* ratings section */}
          <div className='flex items-center justify-center gap-1 mt-5'>
            
                        {
                            [1,2,3,4,5].map((star)=>(
                                <FaStar size={14} key={star} className={star >= review.rating?"text-[#E8A99F]" : "text-[#E5DAD5]"}/>
                            ))
                        }        
          </div>
            {/* comment */}

            <h4 className='text-[#6B6580] text-sm leading-relaxed mb-5 italic mt-4'>{review.review}</h4>
          </div>
          
        </motion.div>

            ))}
        </div>
        </section>
  )
}

export default Testimonials