import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <p className="uppercase tracking-[10px] text-cyan-400 mb-4">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-7xl font-black neon-text">
            LET'S COLLABORATE
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-relaxed">
            Ada project atau ide? Mari kita wujudkan sesuatu yang extraordinary bersama.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-8 text-center neon-box"
          >
            <div className="text-4xl text-cyan-400 mb-4 flex justify-center">
              <FiMail />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-400">hello@retroteam.com</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-8 text-center neon-box"
          >
            <div className="text-4xl text-pink-400 mb-4 flex justify-center">
              <FiPhone />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-400">+62 821-4685-8037</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-8 text-center neon-box"
          >
            <div className="text-4xl text-purple-400 mb-4 flex justify-center">
              <FiMapPin />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-400">Surabaya, Indonesia</p>
          </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-[32px] p-8 md:p-12 neon-box"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-3 text-cyan-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition text-white placeholder-gray-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-pink-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-pink-400 focus:outline-none transition text-white placeholder-gray-500"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3 text-purple-400">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-400 focus:outline-none transition text-white placeholder-gray-500 resize-none"
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 transition font-semibold neon-box"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default Contact
