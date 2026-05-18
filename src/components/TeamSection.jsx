import { members } from '../data/members'
import MemberCard from './MemberCard'
import { motion } from 'framer-motion'

const TeamSection = () => {
  return (
    <section id="team" style={{ background: '#FFE135', borderTop: '3px solid #0D0D0D', borderBottom: '3px solid #0D0D0D', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px', display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
          <span className="section-label" style={{ background: '#0D0D0D', color: '#FFE135' }}>Our Creative Squad</span>
          <h2 className="display-font" style={{ fontSize: 'clamp(42px, 7vw, 80px)', lineHeight: 1, letterSpacing: '-0.03em', color: '#0D0D0D', margin: 0 }}>
            TEAM<br />MEMBERS
          </h2>
          <p style={{ color: '#444', fontSize: '16px', maxWidth: '500px', lineHeight: 1.7, fontWeight: 500 }}>
            Tim kreatif dengan kombinasi skill development, design, motion, dan visual storytelling modern.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection