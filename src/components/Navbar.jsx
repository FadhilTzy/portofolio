import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = ['About', 'Team', 'Projects', 'Contact']

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  // Track active section based on scroll position
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      const offsets = NAV_LINKS.map((name) => {
        const el = document.getElementById(name.toLowerCase())
        return el ? { name, top: el.getBoundingClientRect().top } : null
      }).filter(Boolean)

      const current = [...offsets].reverse().find((o) => o.top <= 80)
      setActive(current?.name ?? '')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleClick = (item, e) => {
    e?.preventDefault()
    setOpen(false)
    // Defer scroll until after drawer close animation starts
    setTimeout(() => {
      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      {/* Scoped responsive CSS — avoids Tailwind class conflicts */}
      <style>{`
        .nb-desktop { display: flex; }
        .nb-hamburger { display: none; }
        @media (max-width: 767px) {
          .nb-desktop { display: none !important; }
          .nb-hamburger { display: flex !important; }
        }
      `}</style>

      <motion.nav
        ref={navRef}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 100,
          background: '#FFE135',
          borderBottom: '3px solid #0D0D0D',
          boxShadow: scrolled ? '0 6px 0 #0D0D0D' : '0 4px 0 #0D0D0D',
          transition: 'box-shadow 0.2s ease',
        }}
      >
        {/* ── Top bar ── */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => handleClick('about', e)}
            className="display-font"
            style={{ fontSize: '22px', letterSpacing: '-0.02em', color: '#0D0D0D', textDecoration: 'none', flexShrink: 0 }}
          >
            FIST<span style={{ color: '#FF6B9D' }}>TEAM</span>
          </a>

          {/* Desktop links */}
          <div className="nb-desktop" style={{ gap: '6px', alignItems: 'center' }}>
            {NAV_LINKS.map((item) => {
              const isActive = active === item
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleClick(item, e)}
                  style={{
                    padding: '7px 20px',
                    background: isActive ? '#FF6B9D' : '#0D0D0D',
                    color: isActive ? '#0D0D0D' : '#FFE135',
                    fontSize: '13px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    boxShadow: isActive ? '3px 3px 0 #0D0D0D' : '4px 4px 0 #0D0D0D',
                    transition: 'background 0.15s, color 0.15s, box-shadow 0.15s',
                  }}
                >
                  {item}
                </a>
              )
            })}
          </div>

          {/* Hamburger (mobile only) */}
          <button
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="nb-hamburger neo-btn"
            style={{
              padding: '7px 10px',
              background: '#0D0D0D',
              color: '#FFE135',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'flex' }}
              >
                {open ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              style={{ overflow: 'hidden', borderTop: '3px solid #0D0D0D' }}
            >
              <nav
                aria-label="Mobile navigation"
                style={{ background: '#FFE135', padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}
              >
                {NAV_LINKS.map((item, i) => {
                  const isActive = active === item
                  return (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleClick(item, e)}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="neo-btn display-font"
                      style={{
                        padding: '13px 18px',
                        background: isActive ? '#FF6B9D' : '#0D0D0D',
                        color: isActive ? '#0D0D0D' : '#FFE135',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '15px',
                        boxShadow: `4px 4px 0 ${isActive ? '#0D0D0D' : '#FF6B9D'}`,
                        transition: 'background 0.15s, color 0.15s',
                      }}
                    >
                      {item}
                    </motion.a>
                  )
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar