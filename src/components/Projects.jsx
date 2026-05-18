import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const cardColors = ['#FF6B9D', '#4ECDC4', '#FFE135']

const Projects = () => {
  return (
    <section id="projects" style={{ background: '#F5F0E8', borderBottom: '3px solid #0D0D0D', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span className="section-label">Our Creative Works</span>
          <h2 className="display-font" style={{ fontSize: 'clamp(42px, 7vw, 80px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '16px 0 0', color: '#0D0D0D' }}>
            FEATURED<br />PROJECTS
          </h2>
          <p style={{ color: '#666', fontSize: '16px', maxWidth: '480px', lineHeight: 1.7, marginTop: '16px', fontWeight: 500 }}>
            Beberapa project terbaik kami — visual modern, motion interaction, dan pengalaman pengguna yang immersive.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              style={{
                background: '#fff',
                border: '3px solid #0D0D0D',
                boxShadow: `8px 8px 0 ${cardColors[index % cardColors.length]}`,
                overflow: 'hidden',
              }}
            >
              {/* Image */}
              <div style={{ height: '220px', background: cardColors[index % cardColors.length], borderBottom: '3px solid #0D0D0D', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                {/* Featured badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: '#0D0D0D',
                  color: '#FFE135',
                  padding: '4px 12px',
                  border: '2px solid #0D0D0D',
                  fontWeight: 800,
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  FEATURED
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px' }}>
                <h3 className="display-font" style={{ fontSize: '24px', letterSpacing: '-0.01em', color: '#0D0D0D', margin: 0 }}>
                  {project.title}
                </h3>

                <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.7, marginTop: '12px' }}>
                  {project.description}
                </p>

                {/* Stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '18px' }}>
                  {project.stack.map((item, i) => (
                    <span
                      key={i}
                      className="neo-tag"
                      style={{ padding: '4px 10px', background: '#F5F0E8', color: '#0D0D0D' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                  <a
                    href={project.github}
                    className="neo-btn"
                    style={{ flex: 1, padding: '10px 0', background: '#0D0D0D', color: '#FFE135', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', fontWeight: 700 }}
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="neo-btn"
                    style={{ flex: 1, padding: '10px 0', background: cardColors[index % cardColors.length], color: '#0D0D0D', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', fontWeight: 700 }}
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects