import { useState, useEffect } from 'react'
import { chapters } from '../data'

export default function StickyNav() {
  const [visible, setVisible] = useState(false)
  const [active, setActive]   = useState('')
  const [open, setOpen]       = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7)

      // detect active chapter
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(chapters[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Desktop side progress */}
      <nav className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-2 z-40">
        {chapters.map(ch => (
          <button
            key={ch.id}
            onClick={() => scrollTo(ch.id)}
            title={ch.title}
            className="group flex items-center gap-2"
          >
            <div className={`w-1 rounded-full transition-all duration-300 ${active === ch.id ? 'h-6 bg-amber' : 'h-2 bg-ink/20 group-hover:bg-ink/40'}`} />
            <span className={`text-[0.6rem] font-body font-medium tracking-wide transition-all duration-200 origin-left ${active === ch.id ? 'opacity-100 text-amber scale-100' : 'opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-100 text-ink'}`}>
              {ch.num}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile floating button + drawer */}
      <div className="lg:hidden fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setOpen(o => !o)}
          className="w-12 h-12 rounded-full bg-deep border border-paper/10 shadow-xl flex items-center justify-center text-paper/80 hover:text-amber transition-colors"
          aria-label="Navegação"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {open && (
          <div className="absolute bottom-14 right-0 w-56 bg-deep border border-paper/10 rounded-2xl shadow-2xl p-3 flex flex-col gap-0.5">
            {chapters.map(ch => (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${active === ch.id ? 'bg-amber/15 text-amber' : 'text-paper/60 hover:text-paper/90 hover:bg-paper/5'}`}
              >
                <span className="font-display text-xs italic shrink-0">{ch.num}</span>
                <span className="font-body text-xs leading-snug">{ch.tag}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
