import { budgetItems, airlineSteps } from '../data'
import { ChapterHeading, Lead, Callout, CheckItem, InfoTable, Reveal } from './ui'

/* ── CAPÍTULO 2 — Documentos ── */
export function ChapterDocumentos() {
  const rows = [
    ['Passaporte',          'Validade mínima de 6 meses além do retorno. Verifique se há páginas em branco suficientes para carimbos.'],
    ['Visto',               'Consulte o site da embaixada ou o Passaporte Aberto. Se necessário, solicite com no mínimo 60–90 dias de antecedência.'],
    ['RG / CNH',            'Leve como documento de backup. Em países do Mercosul, o RG é aceito como documento de viagem principal.'],
    ['Seguro saúde intern.','Obrigatório para o Espaço Schengen (Europa). Altamente recomendado para qualquer destino internacional.'],
  ]
  return (
    <section id="documentos" className="py-20 border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="02" tag="Documentação" title="Passaporte, Visto e Documentos Essenciais" />
          <Lead>
            Ter os documentos em ordem é o requisito mínimo para embarcar — e qualquer detalhe
            negligenciado pode inviabilizar toda a viagem na porta do aeroporto.
          </Lead>
          <InfoTable headers={['Documento', 'O que verificar']} rows={rows} />
          <Callout label="📋 Espaço Schengen e ETIAS">
            Para a maioria dos países europeus, brasileiros são isentos de visto por até 90 dias. No
            entanto, o sistema <strong className="text-paper">ETIAS</strong> passou a ser obrigatório
            — uma autorização eletrônica solicitada online com taxa simples, semelhante ao ESTA
            americano. Verifique a situação atual em{' '}
            <strong className="text-paper">travel-europe.europa.eu/etias</strong>.
          </Callout>
        </Reveal>
      </div>
    </section>
  )
}

/* ── CAPÍTULO 3 — Finanças ── */
export function ChapterFinancas() {
  return (
    <section id="financas" className="py-20 border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="03" tag="Finanças" title="Quanto Vai Custar e Como se Organizar" />
          <Lead>
            Calcular o orçamento estimado <em>antes</em> de reservar qualquer coisa evita surpresas
            desagradáveis e permite comparar destinos com clareza.
          </Lead>
          <InfoTable
            headers={['Categoria', 'Estimativa por pessoa']}
            rows={budgetItems.map(b => [b.cat, b.est])}
          />
        </Reveal>

        <Reveal delay={80}>
          <h3 className="font-display text-xl font-normal mt-8 mb-3 text-ink">
            Como levar e usar dinheiro no exterior
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              <><strong>Nomad, Wise ou C6 Bank</strong> — cartões internacionais sem IOF, ideais para gastar no exterior sem taxas abusivas</>,
              'Leve uma pequena quantia em espécie (euros, dólares ou moeda local) para situações de emergência e lugares que não aceitam cartão',
              'Avise o banco principal sobre a viagem para evitar bloqueio por suspeita de fraude',
              'Nunca concentre todo o dinheiro em um único lugar — distribua entre carteira, mala e acompanhante',
              'Baixe o app do banco antes de sair e habilite notificações em tempo real para cada transação',
            ].map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
          </ul>
          <Callout label="📌 Dica importante" variant="light">
            Evite trocar dinheiro em aeroportos — as taxas costumam ser as piores disponíveis. Prefira
            saques em caixas eletrônicos locais (com cartão Wise ou Nomad) ou casas de câmbio no centro
            da cidade do destino.
          </Callout>
        </Reveal>
      </div>
    </section>
  )
}

/* ── CAPÍTULO 4 — Passagens ── */
const dotColors = [
  'bg-rust shadow-[0_0_0_1.5px_theme(colors.rust)]',
  'bg-amber shadow-[0_0_0_1.5px_theme(colors.amber)]',
  'bg-slate shadow-[0_0_0_1.5px_theme(colors.slate)]',
  'bg-forest shadow-[0_0_0_1.5px_theme(colors.forest)]',
  'bg-muted shadow-[0_0_0_1.5px_theme(colors.muted)]',
]
const tagColors = ['text-rust', 'text-amber', 'text-slate', 'text-forest', 'text-muted']

export function ChapterPassagens() {
  return (
    <section id="passagens" className="py-20 border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="04" tag="Passagens aéreas" title="Como Comprar as Passagens com Estratégia" />
          <Lead>
            A passagem costuma representar a maior fatia do orçamento. Com algumas estratégias simples,
            é possível economizar de forma significativa.
          </Lead>
        </Reveal>

        {/* Timeline */}
        <Reveal delay={80}>
          <div className="relative my-6 pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-rust via-slate to-forest" />
            {airlineSteps.map((s, i) => (
              <div key={i} className="relative mb-7 last:mb-0">
                <div className={`absolute -left-[2.1rem] top-[0.4rem] w-2.5 h-2.5 rounded-full border-2 border-paper ${dotColors[i]}`} />
                <p className={`text-[0.67rem] font-semibold tracking-[0.18em] uppercase mb-1 font-body ${tagColors[i]}`}>{s.tag}</p>
                <h4 className="font-display text-base font-semibold mb-1">{s.title}</h4>
                <p className="text-sm text-ink/70">{s.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Callout label="🏆 Sites recomendados">
            <strong className="text-paper">Google Flights</strong> (melhor visualização de calendário),{' '}
            <strong className="text-paper">Skyscanner</strong> (melhores filtros e flexibilidade de datas),{' '}
            <strong className="text-paper">Kayak</strong> (alertas de preço por email),{' '}
            <strong className="text-paper">site direto da companhia</strong> (preços exclusivos às vezes).
            Para destinos europeus, vale verificar sempre a{' '}
            <strong className="text-paper">TAP Portugal</strong> — costuma oferecer tarifas competitivas
            a partir do Brasil.
          </Callout>
        </Reveal>
      </div>
    </section>
  )
}

/* ── CAPÍTULO 5 — Hospedagem ── */
const hotelCards = [
  { icon: '🏨', title: 'Hotel',            text: 'Mais confortável e com recepção 24h. Ideal para quem prioriza praticidade, segurança e serviços inclusos.' },
  { icon: '🏠', title: 'Apartamento',      text: 'Mais espaço e privacidade, além de cozinha para economizar na alimentação — ótimo para estadias longas.' },
  { icon: '🛏️', title: 'Hostel',          text: 'Opção mais econômica. Quartos privados ou compartilhados. Excelente para quem quer conhecer outros viajantes.' },
]

export function ChapterHospedagem() {
  return (
    <section id="hospedagem" className="py-20 border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="05" tag="Hospedagem" title="Onde e Como se Hospedar" />
          <Lead>
            A escolha da hospedagem impacta tanto o orçamento quanto a qualidade da experiência.
            Conheça as opções e escolha a que faz mais sentido para o seu perfil.
          </Lead>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
            {hotelCards.map(c => (
              <div key={c.title} className="bg-white rounded-xl border border-ink/8 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h4 className="font-display text-base font-semibold mb-1">{c.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="font-display text-xl font-normal mt-6 mb-3 text-ink">Como reservar com segurança</h3>
          <ul className="flex flex-col gap-2">
            {[
              <><strong>Booking.com</strong> ou <strong>Hotels.com</strong> para hotéis — compare os dois antes de decidir</>,
              <>Para apartamentos, use <strong>Airbnb</strong> — leia as avaliações mais recentes com atenção</>,
              <>Para hostels, use <strong>Hostelworld</strong> — filtre por avaliação e localização</>,
              <>Verifique sempre a <strong>política de cancelamento</strong> antes de confirmar — prefira reservas sem multa</>,
              'Escolha hospedagem bem localizada (centro ou próxima ao metrô) — a economia no transporte compensa',
              'Leia as avaliações mais recentes, não apenas a nota geral — o contexto importa',
            ].map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
