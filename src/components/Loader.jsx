import React from 'react'
import { motion } from 'framer-motion'

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAEDE9] relative overflow-hidden">

      {/* Glow blobs - consistent with rest of site */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E8A99F] rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D98E8E] rounded-full blur-3xl opacity-20 -z-10" />

      {/* Spinner with glow ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-20 h-20 flex items-center justify-center"
      >
        <div className="absolute w-20 h-20 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-md" />
        <div className="w-10 h-10 border-[3px] border-[#F2DAD3] border-t-[#D98E8E] rounded-full animate-spin" />
      </motion.div>

      {/* Brand name */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-[#4A2E2E] font-serif text-3xl"
      >
        <span className="text-[#D98E8E]">Glow</span>Cart
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[#6B6580] text-sm mt-2 tracking-wide"
      >
        Loading your glow...
      </motion.p>

      {/* Animated dots - subtle extra touch */}
      <div className="flex gap-1.5 mt-4">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            className="w-1.5 h-1.5 rounded-full bg-[#D98E8E]"
          />
        ))}
      </div>

    </div>
  );
}

export default Loader