// Portfolio data

// place your screenshot in src/assets/ and then import it
import lumenScreenshot from "./assets/lumen-dashboard.png";
import phpEcommerceScreenshot from "./assets/image.png";
import aiCareerScreenshot from "./assets/Ai.png";

export const AUTHOR = {
  _id: 'author-1',
  name: 'Farhan Ansari',
  initials: 'FM',
  avatar: 'https://i.pinimg.com/736x/45/c9/30/45c930089bd6991ac39e475423a1bb61.jpg',
  description: 'I build web that builds brands.',
  summary: "I'm a full-stack developer with expertise in React, Node.js, and MongoDB. I love creating modern, responsive web applications with a focus on user experience and performance. Currently working as a Frontend Developer at SelectSkillSet, I bring experience from my previous role as a Full Stack Developer at Rockford .",
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
    title: 'AI Career Assistant',
    description: 'An AI-powered web application that helps developers transform their GitHub commits and repositories into professional, recruiter-ready LinkedIn posts. Features include GitHub integration, post generation, user authentication, dashboard with analytics, post history tracking, and a modern responsive UI built with React and Tailwind CSS.',
    shortDescription: 'AI-powered tool that converts GitHub work into professional LinkedIn posts for developers.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: aiCareerScreenshot,
    slug: 'ai-career-assistant',
    githubLink: 'https://github.com/farhanminaaj-blip/ai-career-assisant-react.git',
    previewUrl: 'https://ai-career-assistantt.netlify.app'
  },

  {
    _id: 'project-3',
    title: 'Ecommerce Application (PHP)',
    description: 'Built a full-stack PHP/MySQL ecommerce platform with customer login/registration, session-based shopping cart, and a responsive storefront. Implemented product catalog display, quick-buy checkout, and an admin dashboard for CRUD product management with image upload support. Managed user sessions, cart updates, order flow, and backend database operations in a LAMP-ready architecture.',
    shortDescription: 'PHP/MySQL ecommerce platform with cart workflow and admin product management.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: phpEcommerceScreenshot,
    slug: 'php-ecommerce-app',
    githubLink: 'https://github.com/farhanminaaj-blip/php-ecomerse-store',
    previewUrl: 'on process'
  }
]
