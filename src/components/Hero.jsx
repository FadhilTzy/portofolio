import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <p className="uppercase tracking-[10px] text-cyan-400 mb-4">
          Creative Retro Studio
        </p>

        <h1 className="text-5xl md:text-8xl font-black neon-text leading-tight">
          SYNTHWAVE
          <br />
          COLLECTIVE
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg">
          Tim kreatif modern yang menggabungkan nostalgia retro dengan teknologi futuristik.
        </p>

        <a
          href="#team"
          className="inline-block mt-10 px-8 py-4 rounded-full bg-pink-500 hover:bg-cyan-500 transition-all duration-300 neon-box font-semibold"
        >
          Explore Team
        </a>
      </motion.div>
    </section>
  )
}

export default Hero