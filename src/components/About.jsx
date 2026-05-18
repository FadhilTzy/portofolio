import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Projects', bg: '#FF6B9D' },
  { value: '3', label: 'Members', bg: '#4ECDC4' },
  { value: '∞', label: 'Ideas', bg: '#FFE135' },
  { value: '24/7', label: 'Creative Mode', bg: '#FF6B9D' },
]

const About = () => {
  return (
    <section id="about" className="stripe-bg" style={{ paddingTop: '100px' }}>
    
      {/* About info block */}
      <div style={{ background: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'start' }}>
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Who We Are</span>
              <h2 className="display-font" style={{ fontSize: '42px', lineHeight: 1.05, marginTop: '20px', letterSpacing: '-0.02em' }}>
                CREATIVE<br />DIGITAL<br />TEAM
              </h2>
              <p style={{ color: '#444', lineHeight: 1.8, marginTop: '20px', fontSize: '16px' }}>
                Kami adalah creative digital, kami dari SMK RAJASA dan kami ialah team yang berfokus pada pengembangan website modern dengan visual yang unik, immersive, dan penuh identitas.
              </p>
              <p style={{ color: '#666', lineHeight: 1.8, marginTop: '16px', fontSize: '15px' }}>
                Menggabungkan desain Neobrutalism dengan teknologi modern seperti React, motion animation, dan futuristic interface untuk menghasilkan pengalaman digital yang premium.
              </p>

              <div style={{ marginTop: '28px', padding: '20px', background: '#0D0D0D', border: '3px solid #0D0D0D', boxShadow: '6px 6px 0 #FF6B9D' }}>
                <p style={{ color: '#FFE135', fontWeight: 700, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                  Surabaya, Indonesia 🇮🇩
                </p>
                <p style={{ color: '#B0ACA6', fontSize: '13px', marginTop: '4px', marginBottom: 0 }}>
                  hello@fis-team.com · +62 666-666-6666 
                </p>
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  style={{
                    background: s.bg,
                    border: '3px solid #0D0D0D',
                    boxShadow: '5px 5px 0 #0D0D0D',
                    padding: '32px 24px',
                    textAlign: 'center',
                  }}
                >
                  <p className="display-font" style={{ fontSize: '48px', lineHeight: 1, margin: 0, color: '#0D0D0D' }}>{s.value}</p>
                  <p style={{ marginTop: '8px', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0D0D0D', marginBottom: 0 }}>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About