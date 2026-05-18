import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const accentColors = ['#FF6B9D', '#4ECDC4', '#FFE135', '#FF6B9D']

const MemberCard = ({ member, index }) => {
  const accent = accentColors[index % accentColors.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      style={{
        background: '#fff',
        border: '3px solid #0D0D0D',
        boxShadow: `6px 6px 0 ${accent}`,
        padding: '32px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent stripe top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', background: accent, borderBottom: '3px solid #0D0D0D' }} />

      {/* Avatar */}
      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid #0D0D0D',
          boxShadow: `4px 4px 0 ${accent}`,
          margin: '0 auto',
          background: '#eee',
        }}>
          <img
            src={member.image}
            alt={member.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentNode.style.background = accent
            }}
          />
        </div>

        <h3 className="display-font" style={{ marginTop: '16px', fontSize: '20px', letterSpacing: '-0.01em', color: '#0D0D0D' }}>
          {member.name}
        </h3>

        <div style={{
          display: 'inline-block',
          marginTop: '8px',
          padding: '3px 12px',
          background: accent,
          border: '2px solid #0D0D0D',
          fontWeight: 700,
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#0D0D0D',
        }}>
          {member.role}
        </div>

        <p style={{ marginTop: '16px', color: '#555', fontSize: '14px', lineHeight: 1.7 }}>
          {member.description}
        </p>
      </div>

      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '20px' }}>
        {member.skills.map((skill, i) => (
          <span
            key={i}
            className="neo-tag"
            style={{ padding: '4px 10px', background: '#F5F0E8', color: '#0D0D0D' }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Socials */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
        {[
          { icon: <FaGithub size={16} />, href: member.social.github, label: 'GitHub' },
          { icon: <FaInstagram size={16} />, href: member.social.instagram, label: 'Instagram' },
          { icon: <FaLinkedin size={16} />, href: member.social.linkedin, label: 'LinkedIn' },
        ].filter((s) => s.href && s.href !== '#').map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="neo-btn"
            style={{
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0D0D0D',
              color: accent,
              padding: 0,
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default MemberCard