import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-6 border-t border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/5"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black neon-text mb-4">RETRO TEAM</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creative digital team yang menghadirkan visual futuristik dengan sentuhan retro.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#team" className="hover:text-cyan-400 transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-pink-400">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Motion Graphics
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-400">Follow Us</h4>
            <div className="flex gap-4 text-xl">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-cyan-400 transition neon-box"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-pink-400 transition neon-box"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-cyan-400 transition neon-box"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-pink-400 transition neon-box"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-400">
          <p>
            © {currentYear} Retro Team. All rights reserved. Built with
            <span className="text-pink-400 mx-1">♥</span>
            and React.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
