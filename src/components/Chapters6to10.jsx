import { internetOptions, timeline } from '../data'
import { ChapterHeading, Lead, Callout, CheckItem, InfoTable, Chip, Divider, Reveal } from './ui'

/* ── CAPÍTULO 6 — Seguro ── */
export function ChapterSeguro() {
  const insurers = ['Assist Card','Allianz Travel','GTA Seguros','Seguros Promo','Tokio Marine']
  return (
    <section id="seguro" className="py-20 border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="06" tag="Proteção" title="Seguro Viagem — Não Embarque Sem Ele" />
          <Lead>
            Uma emergência médica no exterior sem cobertura pode custar dezenas de milhares de reais.
            O seguro viagem é o custo que ninguém quer ter — e que todo mundo precisa.
          </Lead>
        </Reveal>

        <Reveal delay={80}>
          {/* Highlight boxes */}
          <div className="grid grid-cols-2 gap-3 my-6">
            <div className="bg-white rounded-xl border border-ink/8 p-5">
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-muted mb-1 font-body">Cobertura mínima recomendada</p>
              <p className="font-display text-3xl text-ink leading-none">USD 30.000</p>
              <p className="text-xs text-muted mt-1">em despesas médicas e hospitalares</p>
            </div>
            <div className="bg-white rounded-xl border border-ink/8 p-5">
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-muted mb-1 font-body">Custo médio por dia</p>
              <p className="font-display text-3xl text-ink leading-none">R$ 10–30</p>
              <p className="text-xs text-muted mt-1">dependendo do destino e cobertura</p>
            </div>
          </div>

          <h3 className="font-display text-xl font-normal mt-6 mb-3 text-ink">O que um bom seguro deve cobrir</h3>
          <ul className="flex flex-col gap-2">
            {[
              'Despesas médicas e hospitalares (mínimo USD 30.000)',
              'Extravio ou roubo de bagagem',
              'Cancelamento de voo e atraso prolongado',
              'Retorno antecipado em caso de emergências',
              'Assistência jurídica básica no exterior',
              'Translado médico de emergência (repatriação)',
            ].map(i => <CheckItem key={i}>{i}</CheckItem>)}
          </ul>

          <h3 className="font-display text-xl font-normal mt-6 mb-3 text-ink">Onde contratar</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {insurers.map(s => <Chip key={s} type="g">{s}</Chip>)}
          </div>
          <p className="text-sm text-ink/70">
            Compare preços e coberturas no <strong className="text-ink">Seguros Promo</strong> antes de
            contratar. Para a Europa, a apólice deve especificar cobertura Schengen — verifique antes de
            fechar.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ── CAPÍTULO 7 — Internet ── */
export function ChapterInternet() {
  return (
    <section id="internet" className="py-20 border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="07" tag="Conectividade" title="Internet no Exterior — Como Ficar Conectado" />
          <Lead>
            Ficar sem internet no exterior pode ser um problema sério: desde se perder sem Maps até não
            conseguir chamar ajuda em emergências. Há boas opções para todos os perfis.
          </Lead>
          <InfoTable
            headers={['Opção', 'Vantagem', 'Desvantagem']}
            rows={internetOptions.map(o => [o.op, o.pro, o.con])}
          />
          <Callout label="📱 Recomendação prática">
            Para quem viaja pela primeira vez, o <strong className="text-paper">eSIM via Airalo</strong>{' '}
            é a opção mais prática — compra feita online antes de embarcar, ativação no avião, chegada
            já conectada. Para destinos europeus, um chip local comprado no aeroporto de chegada também
            funciona bem e costuma sair mais barato. Verifique se o celular é desbloqueado antes de
            qualquer compra.
          </Callout>
        </Reveal>
      </div>
    </section>
  )
}

/* ── CAPÍTULO 8 — Roteiro ── */
const rotCards = [
  { icon: '🗺️', title: 'Google Maps',         text: 'Salve os lugares de interesse em uma lista e baixe o mapa offline — funciona sem internet.' },
  { icon: '🎟️', title: 'GetYourGuide / Viator',text: 'Reserve tours, ingressos e passeios guiados com antecedência — evita filas e esgotamento.' },
  { icon: '🌐', title: 'TripAdvisor',           text: 'Descubra atrações bem avaliadas, restaurantes e dicas de quem já visitou o destino.' },
  { icon: '📓', title: 'Notion / Google Docs',  text: 'Monte um documento compartilhado para organizar toda a viagem em um único lugar.' },
]

export function ChapterRoteiro() {
  return (
    <section id="roteiro" className="py-20 border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="08" tag="Roteiro" title="Montando o Roteiro de Passeios" />
          <Lead>
            Com voo e hospedagem reservados, é hora de decidir o que fazer. O equilíbrio entre
            planejamento e espontaneidade define a qualidade da experiência.
          </Lead>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            {rotCards.map(c => (
              <div key={c.title} className="bg-white rounded-xl border border-ink/8 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h4 className="font-display text-base font-semibold mb-1">{c.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="font-display text-xl font-normal mt-6 mb-3 text-ink">Princípios de um bom roteiro</h3>
          <ul className="flex flex-col gap-2">
            {[
              'Não tente ver tudo — prefira menos lugares com mais profundidade e aproveite cada experiência',
              <>Reserve atrações principais com antecedência: Torre Eiffel, Coliseu, Sagrada Família, museus populares — <strong>todos esgotam</strong></>,
              'Deixe pelo menos uma tarde livre por destino para imprevistos e descobertas espontâneas',
              <>Pesquise o transporte local: passes como <strong>Navigo</strong> (Paris) ou <strong>Oyster</strong> (Londres) economizam muito</>,
              'Agrupe atrações por região geográfica para evitar deslocamentos desnecessários ao longo do dia',
            ].map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ── CAPÍTULO 9 — Checklist ── */
export function ChapterChecklist() {
  const items = [
    'Passaporte com validade OK e guardado na mala de mão',
    'Impressões de: passagens, reserva da hospedagem, apólice do seguro e visto (se necessário)',
    'Cartões internacionais ativados e banco avisado sobre a viagem',
    'Quantia em espécie separada (para as primeiras horas no destino)',
    'Roupas e itens adequados ao clima e estação do destino',
    'Adaptador de tomada universal (o padrão varia por país)',
    'Carregador portátil (power bank) com carga completa',
    'Kit de medicamentos: analgésico, antidiarreico, protetor solar, curativo',
    'Cópias digitais do passaporte e documentos salvas na nuvem',
    'Número de emergência da embaixada brasileira no destino anotado',
    'Contato de emergência no Brasil informado a alguém de confiança',
  ]
  return (
    <section id="checklist" className="py-20 border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="09" tag="Pré-embarque" title="Checklist Final — 1 Semana Antes" />
          <Lead>
            A semana anterior ao embarque é crítica. Use esta lista para não esquecer nada que possa
            comprometer a experiência.
          </Lead>
          <ul className="flex flex-col gap-2">
            {items.map(i => <CheckItem key={i}>{i}</CheckItem>)}
          </ul>
          <Callout label="🛫 No dia do embarque">
            Chegue ao aeroporto com <strong className="text-paper">3 horas de antecedência</strong> para
            voos internacionais. Coloque na mala de mão o essencial: documentos originais, medicamentos,
            carregador e uma muda de roupa — caso a bagagem despachada seja extraviada, a viagem continua
            sem grandes problemas.
          </Callout>
        </Reveal>
      </div>
    </section>
  )
}

/* ── CAPÍTULO 10 — Cronograma ── */
const dotCols = [
  'bg-rust shadow-[0_0_0_1.5px_theme(colors.rust)]',
  'bg-amber shadow-[0_0_0_1.5px_theme(colors.amber)]',
  'bg-slate shadow-[0_0_0_1.5px_theme(colors.slate)]',
  'bg-forest shadow-[0_0_0_1.5px_theme(colors.forest)]',
  'bg-muted shadow-[0_0_0_1.5px_theme(colors.muted)]',
]
const tagCols = ['text-rust','text-amber','text-slate','text-forest','text-muted']

export function ChapterCronograma() {
  return (
    <section id="cronograma" className="py-20">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="10" tag="Visão geral" title="Cronograma Completo — Linha do Tempo Ideal" />
          <Lead>
            Organizar cada etapa dentro de um cronograma realista é o que separa viagens tranquilas de
            viagens estressantes. Siga esta sequência.
          </Lead>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative my-6 pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-rust via-slate to-forest" />
            {timeline.map((t, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className={`absolute -left-[2.1rem] top-[0.4rem] w-2.5 h-2.5 rounded-full border-2 border-paper ${dotCols[i]}`} />
                <p className={`text-[0.67rem] font-semibold tracking-[0.18em] uppercase mb-1 font-body ${tagCols[i]}`}>{t.when}</p>
                <h4 className="font-display text-base font-semibold mb-1">{t.title}</h4>
                <p className="text-sm text-ink/70">{t.text}</p>
              </div>
            ))}
          </div>

          <Divider />

          <Callout label="📌 Resumo executivo" variant="light">
            A primeira viagem internacional pode parecer complexa, mas é inteiramente gerenciável quando
            dividida em etapas. O segredo está no <strong>planejamento antecipado</strong>: quanto mais
            cedo as reservas forem feitas e os documentos providenciados, menores serão os custos e o
            estresse. A partir da segunda viagem, tudo fica automático.
          </Callout>
        </Reveal>
      </div>
    </section>
  )
}
