import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Projects', bg: '#FF6B9D' },
  { value: '4', label: 'Members', bg: '#4ECDC4' },
  { value: '∞', label: 'Ideas', bg: '#FFE135' },
  { value: '24/7', label: 'Creative Mode', bg: '#FF6B9D' },
]

const Home = () => {
  return (
      <section id="home" className="stripe-bg" style={{ paddingTop: '100px' }}>
      {/* Hero block */}
      <div style={{ background: '#0D0D0D', borderBottom: '3px solid #0D0D0D', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label" style={{ marginBottom: '24px' }}>SMK RAJASA SURABAYA</span>

            <h1 className="display-font" style={{
              fontSize: 'clamp(52px, 10vw, 120px)',
              lineHeight: 1,
              color: '#F5F0E8',
              letterSpacing: '-0.03em',
              margin: '20px 0 0',
            }}>
              PROJECT
              <span style={{ color: '#FF6B9D', display: 'block' }}>PORTOFOLIO</span>
              <span style={{ color: '#FFE135', WebkitTextStroke: '2px #FFE135' }}>TIM FIS</span>
            </h1>

            <p style={{ marginTop: '32px', color: '#B0ACA6', fontSize: '18px', maxWidth: '540px', lineHeight: 1.6 }}>
                Selamat datang di portofolio digital kami! Kami adalah tim kreatif yang bersemangat dalam mengembangkan website dengan desain neobrutalism yang unik, modern, dan penuh karakter.
            </p>

            <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#team" className="neo-btn display-font" style={{ padding: '14px 32px', background: '#FFE135', color: '#0D0D0D', fontSize: '16px', letterSpacing: '0.05em' }}>
                MEET THE TEAM →
              </a>
              <a href="#projects" className="neo-btn display-font" style={{ padding: '14px 32px', background: 'transparent', color: '#F5F0E8', border: '3px solid #F5F0E8', fontSize: '16px', letterSpacing: '0.05em' }}>
                SEE PROJECTS
              </a>
            </div>
          </motion.div>
        </div>
      </div> 
      </section>
  );
};

export default Home;