import { motion } from 'framer-motion';

function GlowRoutine() {
  const steps = [
    { emoji: "🧼", label: "Cleanse", desc: "Remove impurities & prep skin" },
    { emoji: "💧", label: "Treat", desc: "Target concerns with serums" },
    { emoji: "🧴", label: "Moisturize", desc: "Lock in hydration & nourish" },
    { emoji: "☀️", label: "Protect", desc: "Shield with daily SPF" },
  ]

  return (
    <section className="py-20 px-5 relative">
      <p className="text-center text-sm uppercase tracking-[3px] text-[#C97A7A] mb-2"> Step by Step</p>
      <h2 className="text-center font-serif text-2xl md:text-3xl xl:text-4xl text-[#4A2E2E] mb-16">Your Daily Glow Routine</h2>

      <div className="relative w-[90%] md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">

        {/* Connecting line for the circle background */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#D98E8E]/40 to-transparent z-0" />
        

        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 80 }}
            className="relative flex flex-col items-center text-center z-10 flex-1"
          >
            {/* Icon circle */}
            <div className="w-18 h-18 md:w-24 md:h-24 rounded-full bg-white/60 backdrop-blur-md border border-white/70 shadow-md flex items-center justify-center text-2xl md:text-4xl mb-2 md:mb-4">
              {step.emoji}
            </div>

            {/* Step number badge */}
            <span className="absolute top-0 right-2 md:right-6 w-6 h-6 rounded-full bg-[#D98E8E] text-white text-xs flex items-center justify-center font-medium">
              {i + 1}
            </span>

            <h3 className="font-serif text-xl text-[#4A2E2E] mb-1">{step.label}</h3>
            <p className="text-sm text-[#6B6580] max-w-40">{step.desc}</p>

            {/* Arrow - only on mobile, between steps */}
            {i < steps.length - 1 && (
              <div className="md:hidden text-[#D98E8E] text-2xl my-4">↓</div>
            )}
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default GlowRoutine;