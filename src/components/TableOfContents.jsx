import { chapters } from '../data'
import { Reveal, SectionTag } from './ui'

export default function TableOfContents() {
  return (
    <section className="bg-cream py-20 border-b border-ink/10">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTag>Conteúdo</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-ink mb-8">
            O que você vai encontrar aqui
          </h2>
        </Reveal>

        <ol className="divide-y divide-ink/8">
          {chapters.map((ch, i) => (
            <Reveal key={ch.id} delay={i * 40}>
              <li className="flex items-baseline gap-4 py-3">
                <span className="font-display text-sm italic text-amber shrink-0 w-7">{ch.num}</span>
                <span className="font-body text-sm text-ink flex-1">{ch.title}</span>
                <span className="hidden sm:block flex-1 border-b border-dotted border-ink/20 self-center mx-2" />
                <span className="font-body text-xs text-muted/60 shrink-0 hidden sm:block">{ch.tag}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
