// Portfolio data

// place your screenshot in src/assets/ and then import it
import lumenScreenshot from "./assets/lumen-dashboard.png";

export const AUTHOR = {
  _id: 'author-1',
  name: 'Farhan Ansari',
  initials: 'FM',
  avatar: 'https://i.pinimg.com/736x/45/c9/30/45c930089bd6991ac39e475423a1bb61.jpg',
  description: 'I build web that builds brands.',
  summary: "I'm a full-stack developer with expertise in React, Next.js, Node.js, and MongoDB. I love creating modern, responsive web applications with a focus on user experience and performance. Currently working as a Frontend Developer at SelectSkillSet, I bring experience from my previous role as a Full Stack Developer at Tekisky.",
  location: '_',
  skills: [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
    'PHP',
    'Node.js',
    'MongoDB',
    'React',
    'VS Code',
    'Postman',
    'Git',
    'GitHub'
  ],
  social: {
    github: 'https://github.com/farhanmianj',
    linkdin:'',
    email: 'farhanminaaj@gmail.com',
  },
}

export const PROJECTS = [
  {
     _id: 'project-1',
    title: 'Lumen Dashboard',
    description: 'A clean, responsive project management dashboard (Lumen) built with vanilla HTML, CSS and JavaScript. Features a sidebar, project overviews, schedule/calendar, time-off tracking, and interactive modals for settings and notifications.',
    shortDescription: 'Responsive project-management dashboard with sidebar, calendar, and project views.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    image: lumenScreenshot,
    slug: 'lumen-dashboard',
    githubLink: 'https://github.com/farhanminaaj-blip/eccomerce-dashboard-fronend.git',
    previewUrl: 'https://lunem-dashboard.netlify.app',
    backend: {
      entry: 'server.js',
      description: 'REST API built with Node.js and Express, authentication with JWT and bcrypt, data persisted using MongoDB via Mongoose.',
      technologies: ['Node.js', 'Express', 'Mongoose', 'JWT', 'Bcrypt', 'Dotenv', 'Cors'],
      localPath: '../dashboard'
    }
  },
  {
    _id: 'project-2',
    title: 'Ecommerce Application (PHP)',
    description: 'Developed a full-stack ecommerce web application using PHP and MySQL. Responsibilities included user authentication (login/registration), product catalog management, admin dashboard with CRUD operations, and image upload handling. Implemented secure password storage and session-based login, and ensured responsive design. This project was built as part of my role at [Your Company] where I handled backend development and database design.',
    shortDescription: 'PHP & MySQL ecommerce site with admin panel and user authentication.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop',
    slug: 'php-ecommerce-app',
    githubLink: '#',
    previewUrl: '#'
  },

  {
    _id: 'project-3',
    title: 'Blockchain Voting System',
    description: 'A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.',
    shortDescription: 'A secure, transparent, and decentralized voting platform built on Ethereum with smart contract-based voting and real-time tracking.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70259b51?w=500&h=500&fit=crop',
    slug: 'blockchain-voting-system',
    githubLink: '#',
    previewUrl: '#'
  }
]
