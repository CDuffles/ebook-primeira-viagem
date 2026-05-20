export default function Cover() {
  return (
    <section className="relative min-h-screen bg-deep flex flex-col overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-full bg-rust/20 blur-[80px]" />
        <div className="absolute top-0 right-0 w-[50%] h-[45%] rounded-full bg-slate/15 blur-[80px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjAwIDIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSduJz48ZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nMC45JyBudW1PY3RhdmVzPSc0JyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI24pJyBvcGFjaXR5PScwLjA0Jy8+PC9zdmc+')] opacity-40" />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center flex-1 text-center px-6 py-20">
        {/* Badge */}
        <div className="animate-fade-up flex items-center gap-3 mb-10">
          <span className="h-px w-7 bg-amber/60 block" />
          <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-amber font-body">
            ✦ Edição Completa 2026
          </span>
          <span className="h-px w-7 bg-amber/60 block" />
        </div>

        {/* Title */}
        <h1 className="animate-fade-up font-display font-light text-paper leading-[1.02] text-[clamp(2.8rem,8vw,6.5rem)] max-w-[14ch] mb-2">
          Primeira Viagem{' '}
          <em className="text-amber not-italic font-light">Internacional</em>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-d font-body font-light text-paper/50 text-base md:text-lg max-w-[42ch] mt-5 leading-relaxed">
          O guia definitivo — do planejamento ao embarque — para quem vai cruzar
          fronteiras pela primeira vez com segurança e economia.
        </p>

        {/* Divider */}
        <div className="animate-fade-up-d my-8 w-14 h-px bg-gradient-to-r from-transparent via-amber to-transparent" />

        {/* Tags */}
        <div className="animate-fade-up-d2 flex flex-wrap justify-center gap-2">
          {['Passaporte & Visto','Passagens Aéreas','Hospedagem','Finanças','Roteiro','Checklist Final'].map(t => (
            <span key={t} className="border border-paper/12 rounded-full px-3 py-1 text-[0.68rem] font-body text-paper/30 tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative flex items-center justify-between px-6 md:px-10 py-4 border-t border-paper/6">
        <span className="text-[0.7rem] font-body tracking-[0.15em] uppercase text-paper/20">Guia de Viagem</span>
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-gradient-to-b from-paper/25 to-transparent animate-pulse-bar" />
          <span className="text-[0.6rem] font-body tracking-[0.2em] uppercase text-paper/20">continuar</span>
        </div>
        <span className="text-[0.7rem] font-body tracking-[0.15em] uppercase text-paper/20">v 2026</span>
      </div>
    </section>
  )
}
