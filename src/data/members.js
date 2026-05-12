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
      github: '#',
      instagram: '#',
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
      github: '#',
      instagram: '#',
      linkedin: '#',
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
      github: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'UNKNOWN',
    role: 'UNKNOWN',
    image: `${base}members/member4.jpeg`,
    description: 'Menggabungkan visual nostalgia dan kreativitas futuristik.',
    skills: ['Creative', 'Art Direction', 'Motion'],
    social: {
      github: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
]
