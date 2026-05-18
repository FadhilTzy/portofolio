const base = import.meta.env.BASE_URL || '/'

export const members = [
  {
    id: 1,
    name: 'Muhammad Sulaiman',
    role: 'TKJ',
    image: `${base}members/Sulaiman.jpeg`,
    description: 'Membangun UI retro modern dengan pengalaman visual futuristik.',
    skills: ['React', 'Tailwind', 'Framer Motion'],
    social: {
      github: 'https://github.com/SangLegendaDuniaBawah',
      instagram: 'https://www.instagram.com/sikawa81?igsh=MXRtYjVhcjVhbGE5Mg==',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'MOCH FADHIL',
    role: 'TKJ',
    image: `${base}members/Fadhil.jpeg`,
    description: 'Merancang interface neon synthwave yang immersive.',
    skills: ['Figma', 'UI Design', 'Branding'],
    social: {
      github: 'https://github.com/FadhilTzy',
      instagram: 'https://www.instagram.com/extionsen?igsh=MTZxdGY0MjJmNnk0Zg==',
      linkedin: 'https://www.linkedin.com/in/moch-fadhil-6b2b5b375?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
  },
  {
    id: 3,
    name: 'MUHAMMAD IRFAN',
    role: 'TKJ',
    image: `${base}members/Irfan.jpeg`,
    description: 'Membangun sistem backend scalable dan modern.',
    skills: ['NodeJS', 'Express', 'MongoDB'],
    social: {
      github: 'https://github.com/kimak223',
      instagram: 'https://www.instagram.com/pan_eeq?igsh=Y2M5eGsyNDRtc3Ex',
      linkedin: '#',
    },
  },

]
