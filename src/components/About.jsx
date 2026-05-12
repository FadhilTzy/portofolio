import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto glass rounded-[40px] p-10 md:p-16 neon-box"
      >
        <div className="text-center">
          <p className="uppercase tracking-[10px] text-cyan-400 mb-4">
            About Our Team
          </p>

          <h2 className="text-5xl md:text-7xl font-black neon-text">
            WHO WE ARE
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 mt-16 items-center">
          <div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Kami adalah creative digital team yang berfokus pada
              pengembangan website modern dengan visual yang unik,
              immersive, dan penuh identitas.
            </p>

            <p className="text-gray-400 leading-relaxed mt-6">
              Menggabungkan desain retro nostalgic dengan teknologi modern
              seperti React, motion animation, dan futuristic interface
              untuk menghasilkan pengalaman digital yang premium.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="glass rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-black text-pink-400">15+</h3>
              <p className="mt-2 text-gray-400">Projects</p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-black text-cyan-400">4</h3>
              <p className="mt-2 text-gray-400">Members</p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-black text-purple-400">∞</h3>
              <p className="mt-2 text-gray-400">Ideas</p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-black text-cyan-400">24/7</h3>
              <p className="mt-2 text-gray-400">Creative Mode</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About