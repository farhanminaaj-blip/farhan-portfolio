import React from 'react'
import {
  SiGithub,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiVercel,
  SiGmail,
} from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { MdPlayArrow, MdPause } from 'react-icons/md'

// simple like button component
function LikeButton() {
  const STORAGE_KEY = 'portfolio_likes'
  const [likes, setLikes] = React.useState(0)

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored !== null) setLikes(parseInt(stored, 10) || 0)
    } catch {
      /* ignore */
    }
  }, [])

  const handleClick = () => {
    const next = likes + 1
    setLikes(next)
    try {
      localStorage.setItem(STORAGE_KEY, next.toString())
    } catch {}
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-full border-2 border-purple-500 text-purple-400
                 px-6 py-2 flex items-center gap-2 hover:bg-purple-500/10
                 transition focus:outline-none focus:ring-2 focus:ring-purple-500/50"
    >
      <AiFillHeart className="text-purple-500" />
      <span>{likes} Likes</span>
    </button>
  )
}

// music player component
function MusicPlayer({ track = null }) {
  // track expected to be Spotify track object or custom data
  const audioRef = React.useRef(null)
  const [playing, setPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [imgError, setImgError] = React.useState(false)

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
    }
  }

  // derive metadata with fallbacks
  const title = track?.name || 'No song playing'
  const artist = track?.artists?.[0]?.name || 'Unknown artist'
  const albumImage = !imgError
    ? track?.album?.images?.[0]?.url || '/fallback-album.png'
    : '/fallback-album.png'

  return (
    <div className="relative bg-neutral-900/70 backdrop-blur-sm rounded-xl p-4 w-full max-w-xs shadow-lg">
      <SiSpotify className="absolute top-2 right-2 text-green-400 text-xl" />
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={albumImage}
            alt="album cover"
            onError={() => setImgError(true)}
            className="w-16 h-16 rounded-md object-cover"
          />
          <span className="absolute bottom-0 right-0 bg-purple-600 text-xs px-2 py-0.5 rounded-full">
            Preview
          </span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-xs text-gray-400">{artist}</p>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={track?.preview_url || ''}
        onTimeUpdate={onTimeUpdate}
      />
      <div className="mt-4 flex items-center justify-between text-white">
        <MdSkipPrevious className="text-2xl cursor-pointer hover:text-green-400" />
        <button onClick={toggle} className="text-3xl">
          {playing ? <MdPause /> : <MdPlayArrow />}
        </button>
        <MdSkipNext className="text-2xl cursor-pointer hover:text-green-400" />
      </div>
      <div className="mt-2 flex items-center justify-between text-white text-xl">
        <MdAdd className="cursor-pointer hover:text-green-400" />
        <MdMoreHoriz className="cursor-pointer hover:text-green-400" />
      </div>
      <div className="h-1 bg-muted rounded-full mt-3">
        <div className="h-full bg-green-400" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()
  const STORAGE_KEY = 'portfolio_likes'
  const [likes, setLikes] = React.useState(0)
  const [hasLiked, setHasLiked] = React.useState(false)
  const [playing, setPlaying] = React.useState(false)

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored !== null) setLikes(parseInt(stored, 10) || 0)
      const session = sessionStorage.getItem(STORAGE_KEY)
      if (session === 'true') setHasLiked(true)
    } catch (e) {
      console.warn('localStorage unavailable', e)
    }
  }, [])

  const handleLike = () => {
    if (hasLiked) return
    const newCount = likes + 1
    setLikes(newCount)
    setHasLiked(true)
    try {
      localStorage.setItem(STORAGE_KEY, newCount.toString())
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch (e) {
      console.warn('storage error', e)
    }
  }

  const togglePlay = () => setPlaying((p) => !p)

  return (
    <footer className="bg-background text-muted-foreground border-t border-muted text-base">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* left section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-6 mb-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 hover:text-foreground transition transform hover:scale-110"
              >
                <SiGithub className="w-full h-full" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 hover:text-foreground transition transform hover:scale-110"
              >
                <BsLinkedin className="w-full h-full" />
              </a>
              <a
                href="mailto:example@example.com"
                className="w-8 h-8 hover:text-foreground transition transform hover:scale-110"
              >
                <SiGmail className="w-full h-full" />
              </a>
            </div>

            <LikeButton />
          </div>

          {/* right section tech stack */}
          <div className="flex flex-col items-center md:items-end space-y-3 text-base text-gray-400">
            <div className="flex items-center gap-3">
              <SiReact className="text-cyan-400 w-6 h-6" />
              <span>Built with React</span>
            </div>
            <div className="flex items-center gap-3">
              <SiVite className="text-indigo-400 w-6 h-6" />
              <span>Bundled with Vite</span>
            </div>
            <div className="flex items-center gap-3">
              <SiTailwindcss className="text-blue-400 w-6 h-6" />
              <span>Styled with TailwindCSS</span>
            </div>
            <div className="flex items-center gap-3">
              <SiVercel className="text-white w-6 h-6" />
              <span>Deployed on Netfly
                
              </span>
            </div>
          </div>

        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {currentYear} Farhan Minaj. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
