import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Topbar from './components/Topbar'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  // ✅ DEFAULT DARK
  const [isDark, setIsDark] = useState(true)

  // ✅ Only localStorage, no system theme drama
  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      setIsDark(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }, [isDark])

  return (
    <>
      <Topbar isDark={isDark} setIsDark={setIsDark} />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <Technologies isDark={isDark} />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
