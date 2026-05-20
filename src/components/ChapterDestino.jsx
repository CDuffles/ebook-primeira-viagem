import { visaFree, visaRequired } from '../data'
import {
  ChapterHeading, Lead, Callout, CheckItem, InfoTable, Chip, Reveal
} from './ui'

const profileCards = [
  { icon: '💰', title: 'Orçamento total',    text: 'Estabeleça um valor máximo incluindo tudo: passagem, hospedagem, alimentação, passeios e imprevistos.' },
  { icon: '📅', title: 'Período disponível', text: 'Quantos dias de férias estão disponíveis? Destinos mais distantes exigem mais dias para compensar o tempo de voo.' },
  { icon: '🌍', title: 'Perfil de viagem',   text: 'Praia, cidade histórica, natureza, gastronomia ou aventura? Definir o perfil facilita — e muito — a escolha.' },
  { icon: '🛂', title: 'Visto necessário?',  text: 'Verifique antes se o país exige visto para brasileiros. Alguns precisam de meses de antecedência para a solicitação.' },
]

const chipType = { n: 'n', e: 'e', a: 'a' }

export default function ChapterDestino() {
  return (
    <section id="destino" className="py-20 border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal>
          <ChapterHeading num="01" tag="Primeiro passo" title="Escolhendo o Destino Certo" />
          <Lead>
            A escolha do destino é o ponto de partida de tudo. Antes de se apaixonar por uma cidade
            no Instagram, é fundamental alinhar quatro variáveis práticas que vão definir a experiência.
          </Lead>
        </Reveal>

        {/* Cards */}
        <Reveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            {profileCards.map(c => (
              <div key={c.title} className="bg-white rounded-xl border border-ink/8 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h4 className="font-display text-base font-semibold mb-1">{c.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Visa-free */}
        <Reveal delay={120}>
          <h3 className="font-display text-xl font-normal mt-8 mb-3 text-ink">
            Destinos sem visto para brasileiros
          </h3>
          <p className="text-sm text-ink/70 mb-3">Entrada livre com passaporte válido — sem burocracia prévia:</p>
          <div className="flex flex-wrap gap-2 my-3">
            {visaFree.map(v => (
              <Chip key={v.name} type={chipType[v.type]}>
                {v.flag} {v.name}
              </Chip>
            ))}
          </div>
        </Reveal>

        {/* Visa required table */}
        <Reveal delay={140}>
          <h3 className="font-display text-xl font-normal mt-8 mb-2 text-ink">
            Destinos que exigem visto — mas que valem cada detalhe
          </h3>
          <p className="text-sm text-ink/70 mb-1">Mais burocracia, porém experiências únicas:</p>
          <InfoTable
            headers={['Destino', 'Tipo de visto', 'Onde solicitar', 'Prazo médio']}
            rows={visaRequired.map(r => [r.dest, r.type, r.where, r.time])}
          />
        </Reveal>

        <Reveal delay={160}>
          <Callout label="⚠️ Atenção especial — Visto Americano">
            O visto dos EUA é o mais complexo: exige agendamento com meses de antecedência (a fila
            no Brasil pode superar <strong className="text-paper">400 dias</strong>), entrevista presencial
            no consulado, comprovantes financeiros sólidos e vínculo comprovado com o país. Pesquise
            a fila atual antes de qualquer planejamento em <strong className="text-paper">travel.state.gov</strong>.
          </Callout>

          <h3 className="font-display text-xl font-normal mt-8 mb-3 text-ink">
            Documentos geralmente exigidos na solicitação de visto
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              'Passaporte com validade mínima de 6 meses além da data de retorno',
              'Foto recente no padrão exigido pelo país de destino',
              'Comprovante de renda (holerites e extrato bancário dos últimos 3 meses)',
              'Comprovante de vínculo com o Brasil (emprego, imóvel, família)',
              'Reserva do hotel e passagem aérea (alguns países exigem antes de emitir o visto)',
              'Seguro viagem com cobertura válida no destino',
              'Carta de intenção explicando os motivos da viagem (quando solicitado)',
            ].map(item => <CheckItem key={item}>{item}</CheckItem>)}
          </ul>

          <Callout label="💡 Recomendação para primeiras viagens" variant="light">
            Comece por destinos <strong>sem exigência de visto</strong> — menos burocracia e mais agilidade
            para planejar. Se o destino exigir visto americano, canadense ou britânico, inicie o processo
            com pelo menos <strong>6 meses</strong> de antecedência. Use{' '}
            <strong>passaporteaberto.com.br</strong> para verificar requisitos de entrada.
          </Callout>
        </Reveal>
      </div>
    </section>
  )
}
