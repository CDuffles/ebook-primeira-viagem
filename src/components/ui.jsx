import { useInView } from '../hooks/useInView'

/* ── Animated wrapper ── */
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ── Section label ── */
export function SectionTag({ children }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="block w-5 h-px bg-rust" />
      <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-rust font-body">
        {children}
      </span>
    </div>
  )
}

/* ── Chapter heading ── */
export function ChapterHeading({ num, tag, title }) {
  return (
    <>
      <p className="font-display text-[5rem] leading-none font-light text-ink/[0.05] select-none -mb-3">
        {num}
      </p>
      <SectionTag>{tag}</SectionTag>
      <h2 className="font-display text-3xl md:text-4xl font-normal leading-tight mb-5 text-ink">
        {title}
      </h2>
    </>
  )
}

/* ── Lead paragraph ── */
export function Lead({ children }) {
  return (
    <p className="font-display text-xl font-light leading-relaxed text-ink/70 border-l-2 border-amber pl-4 mb-6 italic">
      {children}
    </p>
  )
}

/* ── Dark callout ── */
export function Callout({ label, children, variant = 'dark' }) {
  if (variant === 'light') {
    return (
      <div className="rounded-xl border border-ink/10 bg-cream p-5 md:p-6 my-6">
        <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-rust mb-2 font-body">{label}</p>
        <p className="text-sm text-ink/80 leading-relaxed">{children}</p>
      </div>
    )
  }
  return (
    <div className="relative rounded-xl bg-deep p-5 md:p-6 my-6 overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-amber/10 blur-2xl pointer-events-none" />
      <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-amber mb-2 font-body relative">{label}</p>
      <p className="text-sm text-paper/75 leading-relaxed relative">{children}</p>
    </div>
  )
}

/* ── Checklist item ── */
export function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3 bg-white border-l-2 border-forest rounded-lg px-4 py-3 text-sm text-ink/80 leading-relaxed">
      <span className="text-forest font-semibold text-xs mt-0.5 shrink-0">✓</span>
      {children}
    </li>
  )
}

/* ── Info table ── */
export function InfoTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-5 rounded-xl border border-ink/8 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-ink/10">
            {headers.map((h, i) => (
              <th key={i} className="text-left text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-muted px-4 py-3 font-body whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-ink/5 last:border-0 hover:bg-ink/[0.02] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 align-top leading-snug ${j === 0 ? 'font-medium text-ink whitespace-nowrap' : 'text-ink/70'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Chip ── */
const chipStyles = {
  n: 'bg-rust/10 border-rust/25 text-rust',
  e: 'bg-slate/10 border-slate/25 text-slate',
  a: 'bg-forest/10 border-forest/25 text-forest',
  g: 'bg-amber/10 border-amber/25 text-amber/90',
  def: 'bg-ink/5 border-ink/12 text-ink/70',
}

export function Chip({ children, type = 'def' }) {
  return (
    <span className={`inline-block border rounded-full px-3 py-1 text-xs font-body font-normal ${chipStyles[type] || chipStyles.def}`}>
      {children}
    </span>
  )
}

/* ── Section divider ── */
export function Divider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-ink/8" />
      <span className="text-amber/40 text-sm tracking-[0.4em]">✦ ✦ ✦</span>
      <div className="flex-1 h-px bg-ink/8" />
    </div>
  )
}
