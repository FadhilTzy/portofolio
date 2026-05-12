import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const MemberCard = ({ member }) => {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.03}>
      <motion.div
        whileHover={{ y: -10 }}
        className="glass neon-box rounded-3xl p-6 relative overflow-hidden group"
      >
        <div className="absolute inset-0 border border-pink-500/20 rounded-3xl group-hover:border-cyan-400 transition-all duration-500"></div>

        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-cyan-400 shadow-lg"
        />

        <div className="text-center mt-6">
          <h3 className="text-2xl font-bold text-white">
            {member.name}
          </h3>

          <p className="text-cyan-400 mt-1">
            {member.role}
          </p>

          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            {member.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-5">
          {member.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-5 mt-6 text-xl">
          <a href={member.social.github}>
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>

          <a href={member.social.instagram}>
            <FaInstagram className="hover:text-pink-400 transition" />
          </a>

          <a href={member.social.linkedin}>
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default MemberCard