import React from 'react'
import { AUTHOR } from '../data'
import HeroSVG from './HeroSVG'

function Hero() {
  return (
    <section
      style={{
        '--hero-width': '72rem',
        '--hero-width-phone': '100%',
      }}
      className="min-h-screen flex items-center justify-center mx-auto w-full max-w-[var(--hero-width-phone)] lg:max-w-[var(--hero-width)] fade-in"
    >
      <div className="grid grid-cols-3 md:grid-cols-5 w-full relative bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,#f43f5e,#f43f5e,transparent_40%)] before:animate-pulse">
        
        {/* Left Content Grid - col-span-3 */}
        <div className="col-span-3 grid grid-rows-5 relative order-first md:order-none">
          
          {/* Hero Title Section - row-span-2 */}
          <div className="p-8 row-span-2 flex items-center justify-center relative bg-background/40 backdrop-blur-sm">
            <h1 className="w-full text-center md:text-left font-bold translate-y-[1px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-slate-50 to-rose-500 bg-clip-text text-transparent slide-up">
              Hey{' '}
              <img
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                alt="Waving hand"
                width="55"
                height="55"
                style={{ display: 'inline', transform: 'translateY(-8px)', marginLeft: '8px' }}
              />
              <br /> I'm {AUTHOR.name}
            </h1>
          </div>

          {/* Summary Section - row-span-1 */}
          <div className="p-8 row-span-1 flex items-center justify-center relative bg-background/40 backdrop-blur-sm">
            <p className="text-base text-muted-foreground text-center md:text-left text-balance">
              {AUTHOR.summary}
            </p>
          </div>

          {/* About Section - row-span-1 */}
          <div className="p-8 row-span-1 relative bg-background/40 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground text-balance text-center md:text-left">
              I build <span className="font-semibold text-foreground">web that builds brands.</span>
            </p>
          </div>

          {/* CTA Section - row-span-2 */}
          <div className="p-8 row-span-2 flex items-center justify-center relative bg-background/40 backdrop-blur-sm">
            <div className="w-full flex flex-col gap-3 items-center md:items-start">
              <p className="text-sm text-center md:text-left text-muted-foreground">
                {AUTHOR.description}
              </p>
              
              <div className="flex items-center gap-2 flex-wrap">
                <a href="#contact">
                  <button className="w-full px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition">
                    📧 Contact Me
                  </button>
                </a>
                <button className="px-6 py-2 border border-foreground rounded-lg font-medium hover:bg-muted transition opacity-50 cursor-not-allowed">
                  ⬇️ Download CV
                </button>
              </div>

              {/* Tech Badges removed */}
            </div>
          </div>

          {/* Right vertical line removed */}
        </div>

        {/* Right SVG Section - col-span-2 on md */}
        <div className="col-span-3 md:col-span-2 z-10 flex items-center justify-center">
          <div className="w-full h-auto max-w-[460px] max-h-[600px]">
            <HeroSVG />
          </div>
        </div>

        {/* Border right removed */}
      </div>
    </section>
  )
}

export default Hero
