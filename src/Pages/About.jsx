import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'
import { Link } from 'react-router-dom'
import { FiHeart, FiPackage, FiUsers, FiShield } from 'react-icons/fi'

function About() {
  const stats = [
    { icon: FiUsers, value: "10,000+", label: "Happy Customers" },
    { icon: FiPackage, value: "50+", label: "Products" },
    { icon: FiShield, value: "100%", label: "Cruelty-Free" },
    { icon: FiHeart, value: "4.8★", label: "Average Rating" },
  ]

  const values = [
    { title: "Clean Ingredients", desc: "Every product is formulated with transparency — no hidden nasties, ever." },
    { title: "Cruelty-Free", desc: "We never test on animals, and we partner only with ethical suppliers." },
    { title: "Dermatologist Tested", desc: "Safe and gentle formulas, suitable for all skin types and concerns." },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className='bg-[#FAEDE9] min-h-screen relative flex flex-col '
    >
      <NavBar />

      <main className='flex-1'>

        {/* Hero */}
        <section className="text-center py-10 md:py-20 px-5 max-w-2xl m-auto">
          <p className="text-sm uppercase tracking-[3px] text-[#C97A7A] mb-3">Our Story</p>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#4A2E2E] mb-5 leading-tight">Skincare, Made With Intention</h1>
          <p className="text-[#6B6580] text-sm md:text-base">
            GlowCart was born from a simple belief — that healthy skin shouldn't be complicated.
            We curate clean, effective skincare so you can build a routine you actually trust.
          </p>
        </section>

        {/* our story*/}
        <section className="py-2 md:py-10 px-5 flex flex-col md:flex-row items-center gap-12 max-w-5xl m-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-[#4A2E2E] mb-4">Why we started</h2>
            <p className="text-[#6B6580] leading-relaxed mb-4 text-sm md:text-base">
              We were tired of confusing ingredient lists and products that promised everything but delivered little.
              So we built GlowCart — a place where every product is chosen with care, backed by real results.
            </p>
            <p className="text-[#6B6580] leading-relaxed text-sm md:text-base"> From serums to sunscreens, every item on our shelf passes our own standard: clean, effective, and kind to your skin. </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 w-full"
          >
            <div className="rounded-3xl overflow-hidden h-50 md:h-80 shadow-md">
              <img src="/images/model2.jpg" alt="Our story" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </section>

        {/* Stats strip */}
        <section className="py-10 md:py-16 px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl m-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/50 backdrop-blur-md border border-white/50 rounded-2xl p-4 md:p-6 text-center shadow-sm"
              >
                <stat.icon size={24} className="text-[#D98E8E] mx-auto mb-2" />
                <p className="font-serif text-xl md:text-2xl text-[#4A2E2E]">{stat.value}</p>
                <p className="text-[10px] md:text-xs text-[#6B6580] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-5">
          <h2 className="text-center font-serif text-2xl md:text-3xl text-[#4A2E2E] mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl m-auto">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/50 backdrop-blur-md border border-white/50 rounded-2xl p-6 md:p-7 shadow-sm"
              >
                <h3 className="font-serif text-sm sm:text-md md:text-lg text-[#4A2E2E] mb-2">{val.title}</h3>
                <p className="text-sm text-[#6B6580] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-5">
          <h2 className="font-serif text-2xl md:text-3xl text-[#4A2E2E] mb-6">Ready to find your glow?</h2>
          <Link to="/products" className="inline-block text-xs md:text-sm px-6 md:px-8 py-2.5 md:py-3.5 rounded-full bg-linear-to-r from-[#E8A99F] to-[#D98E8E] text-white font-medium shadow-md hover:scale-105 transition">
            Explore Products
          </Link>
        </section>
             
        <NewsLetter />
        <div className='mb-10'></div>
      </main>

      <Footer />
    </motion.div>
  )
}

export default About