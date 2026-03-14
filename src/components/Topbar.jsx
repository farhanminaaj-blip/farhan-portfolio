import React from 'react'

function Topbar({ isDark, setIsDark }) {
  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold">FM</h1>
        
        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm md:text-base hover:text-foreground/70 transition">
            Projects
          </a>
          <a href="#contact" className="text-sm md:text-base hover:text-foreground/70 transition">
            Contact
          </a>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.5 1.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V2a.5.5 0 01.5-.5zM6.146 3.146a.5.5 0 01.708 0l2.12 2.122a.5.5 0 11-.707.707L6.146 3.854a.5.5 0 010-.708zM2 10a.5.5 0 01.5-.5h3a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5zM6.146 16.854a.5.5 0 01-.707-.708l2.121-2.12a.5.5 0 01.707.707l-2.12 2.121zM10 17.5a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM13.854 16.854l-2.12-2.121a.5.5 0 01.707-.707l2.12 2.121a.5.5 0 01-.707.707zM18 10.5a.5.5 0 01-.5-.5 7.5 7.5 0 11-15 0 .5.5 0 111 0 6.5 6.5 0 1013 0 .5.5 0 01-.5.5z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
