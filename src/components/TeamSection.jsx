import { members } from '../data/members'
import MemberCard from './MemberCard'
import { motion } from 'framer-motion'

const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-20">
          <p className="uppercase tracking-[10px] text-cyan-400 mb-4">
            Our Creative Squad
          </p>

          <h2 className="text-5xl md:text-7xl font-black neon-text">
            TEAM MEMBERS
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-relaxed">
            Tim kreatif dengan kombinasi skill development,
            design, motion, dan visual storytelling modern.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default TeamSection