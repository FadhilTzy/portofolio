import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#FFE135', borderTop: '3px solid #0D0D0D', padding: '48px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Brand */}
          <div>
            <h3 className="display-font" style={{ fontSize: '28px', color: '#0D0D0D', margin: 0, letterSpacing: '-0.02em' }}>
              FIS<span style={{ color: '#FF6B9D' }}>TEAM</span>
            </h3>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.7, marginTop: '12px' }}>
              Creative digital team yang menghadirkan visual Unik Dengan Menghadirkan Tema Neobrutalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px', color: '#0D0D0D' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About', 'Team', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{ color: '#0D0D0D', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px', color: '#0D0D0D' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Web Design', 'Development', 'UI/UX Design', 'Motion Graphics'].map((s) => (
                <li key={s} style={{ color: '#444', fontSize: '14px', fontWeight: 500 }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px', color: '#0D0D0D' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[FaGithub, FaInstagram, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="neo-btn"
                  style={{ width: '40px', height: '40px', background: '#0D0D0D', color: '#FFE135', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '3px solid #0D0D0D', paddingTop: '24px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ margin: 0, fontWeight: 600, fontSize: '14px', color: '#0D0D0D' }}>
            © {year} FISTEAM. Built with <span style={{ color: '#FF6B9D' }}>♥</span> and React.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" style={{ color: '#0D0D0D', fontWeight: 700, fontSize: '13px', textDecoration: 'underline' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer