import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-black neon-text tracking-widest">
          RETRO TEAM
        </h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#team" className="hover:text-cyan-400 transition">Team</a>
          <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar