import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const contactItems = [
  { icon: <FiMail size={22} />, label: 'Email', value: 'hello@fis-team.com', color: '#FF6B9D' },
  { icon: <FiPhone size={22} />, label: 'Phone', value: '+62 666-666-6666', color: '#4ECDC4' },
  { icon: <FiMapPin size={22} />, label: 'Location', value: 'Surabaya, Indonesia', color: '#FFE135' },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" style={{ background: '#0D0D0D', borderTop: '3px solid #0D0D0D', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="display-font" style={{ fontSize: 'clamp(42px, 7vw, 80px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '16px 0 0', color: '#F5F0E8' }}>
            LET'S<br /><span style={{ color: '#FF6B9D' }}>COLLAB</span><br />ORATE
          </h2>
          <p style={{ color: '#888', fontSize: '16px', maxWidth: '400px', lineHeight: 1.7, marginTop: '16px' }}>
            Ada project atau ide? Mari kita wujudkan sesuatu yang extraordinary bersama.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {contactItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: item.color,
                  border: '3px solid #F5F0E8',
                  boxShadow: '5px 5px 0 #F5F0E8',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: '#0D0D0D',
                }}
              >
                <div style={{ fontSize: '22px' }}>{item.icon}</div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>{item.label}</p>
                  <p style={{ fontWeight: 500, fontSize: '15px', marginTop: '2px', marginBottom: 0 }}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* Big quote */}
            <div style={{ marginTop: '24px', border: '3px solid #FF6B9D', padding: '24px', boxShadow: '5px 5px 0 #FF6B9D' }}>
              <p className="display-font" style={{ color: '#FF6B9D', fontSize: '32px', lineHeight: 1.2, margin: 0 }}>
                "BUILDING<br />THE FUTURE<br />TODAY"
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: '#F5F0E8',
                border: '3px solid #F5F0E8',
                boxShadow: '8px 8px 0 #FF6B9D',
                padding: '36px',
              }}
            >
              {sent && (
                <div style={{ background: '#4ECDC4', border: '3px solid #0D0D0D', padding: '12px 20px', marginBottom: '24px', fontWeight: 700, color: '#0D0D0D' }}>
                  ✓ Pesan terkirim! Kami akan segera menghubungi kamu.
                </div>
              )}

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 800, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: '#0D0D0D' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="neo-input"
                  style={{ width: '100%', padding: '12px 16px', fontSize: '15px' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 800, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: '#0D0D0D' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="neo-input"
                  style={{ width: '100%', padding: '12px 16px', fontSize: '15px' }}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontWeight: 800, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: '#0D0D0D' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Ceritakan project kamu..."
                  className="neo-input"
                  style={{ width: '100%', padding: '12px 16px', fontSize: '15px', resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                className="neo-btn display-font"
                style={{ width: '100%', padding: '16px', background: '#0D0D0D', color: '#FFE135', fontSize: '16px', letterSpacing: '0.08em', border: '3px solid #0D0D0D', boxShadow: '5px 5px 0 #FF6B9D' }}
              >
                SEND MESSAGE →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact