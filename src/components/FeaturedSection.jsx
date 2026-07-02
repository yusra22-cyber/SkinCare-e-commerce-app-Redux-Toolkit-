import React from 'react'

function FeaturedSection() {
  return (
    <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true, amount:0.3}}
          transition={{ delay: 0.5 }}
          className='py-16 px-5 relative'
        >
            
        </motion.div>
  )
}

export default FeaturedSection