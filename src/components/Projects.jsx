import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-20">
          <p className="uppercase tracking-[10px] text-pink-400 mb-4">
            Our Creative Works
          </p>

          <h2 className="text-5xl md:text-7xl font-black neon-text">
            FEATURED PROJECTS
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-relaxed">
            Beberapa project terbaik kami dengan kombinasi visual modern,
            motion interaction, dan pengalaman pengguna yang immersive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative glass rounded-[32px] overflow-hidden neon-box"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/40 to-transparent"></div>

                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs uppercase tracking-widest text-cyan-300">
                  Featured
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-white">
                    {project.title}
                  </h3>

                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs hover:border-cyan-400 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-pink-500 hover:bg-pink-600 transition font-medium"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition font-medium text-black"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects