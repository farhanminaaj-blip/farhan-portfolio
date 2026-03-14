import React, { useState } from 'react'
import { AUTHOR } from '../data'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:${AUTHOR.social?.email}?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
    setSubmitted(true)
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="container mx-auto px-4 lg:px-6 py-20 mb-36 overflow-x-hidden">
      <h2 className="w-full text-center font-bold translate-y-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
          Let's talk
        </span>{' '}
        about ideas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-start md:items-center">
        {/* Contact Form */}
        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/30 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/30 transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/30 transition resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-sm text-green-600">
                ✓ Opening your email client...
              </div>
            )}
          </form>
        </div>

        {/* Socials */}
        <div className="flex flex-col justify-center gap-8 px-4 lg:px-0">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              Have a project in mind? Let's work together and create something amazing.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <a
                href={`mailto:${AUTHOR.social?.email}`}
                className="text-lg font-medium text-foreground hover:text-rose-500 transition"
              >
                {AUTHOR.social?.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="text-lg font-medium text-foreground">{AUTHOR.location}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow</p>
              <div className="flex gap-4">
                <a
                  href={AUTHOR.social?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-muted rounded-lg hover:bg-muted transition"
                >
                  GitHub
                </a>
                {AUTHOR.social?.linkedin && (
                  <a
                    href={AUTHOR.social?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-muted rounded-lg hover:bg-muted transition"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
