# Farhan Minaj - Portfolio (React + Vite)

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5/CSS3** - Semantic markup and styling
- **JavaScript** - Programming language
- **SVG** - Vector graphics

## 📁 Project Structure

```
src/
├── components/
│   ├── Topbar.jsx        # Navigation header
│   ├── Hero.jsx          # Hero section with intro
│   ├── Projects.jsx      # Projects grid
│   ├── ProjectCard.jsx   # Individual project card
│   ├── ContactForm.jsx   # Contact form
│   └── Footer.jsx        # Page footer
├── App.jsx               # Main app component
├── main.jsx              # Entry point
├── index.css             # Global styles
└── data.js               # Portfolio data
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "New folder (9)"
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Features

- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Dark Mode** - Theme switching with localStorage persistence
- ✅ **Portfolio Showcase** - Grid layout with modal project details
- ✅ **Contact Form** - Direct email integration
- ✅ **Smooth Animations** - CSS transitions and effects
- ✅ **Performance** - Fast load times with Vite
- ✅ **Accessible** - Semantic HTML and ARIA attributes

## 🎯 Customization

### Edit Portfolio Data
Open `src/data.js` to modify:
- Author information (name, bio, skills)
- Projects details (title, description, technologies)
- Social links

### Customize Styling
Edit `src/index.css` and `tailwind.config.js` to:
- Change color scheme
- Edit typography
- Add new components

### Modify Components
All React components are in `src/components/`. Edit them to customize the look and feel.

## 🚀 Deployment



### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repo name
2. Build the project: `npm run build`
3. Push the `dist` folder to gh-pages branch

## 📄 License

This project is private and for personal use.

---

**Author**: Farhan minaj ansari - Full Stack Developer
