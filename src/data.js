export const chapters = [
  {
    id: 'destino',
    num: '01',
    tag: 'Primeiro passo',
    title: 'Escolhendo o Destino Certo',
    lead: 'A escolha do destino é o ponto de partida de tudo. Antes de se apaixonar por uma cidade no Instagram, é fundamental alinhar quatro variáveis práticas que vão definir a experiência.',
  },
  {
    id: 'documentos',
    num: '02',
    tag: 'Documentação',
    title: 'Passaporte, Visto e Documentos Essenciais',
    lead: 'Ter os documentos em ordem é o requisito mínimo para embarcar — e qualquer detalhe negligenciado pode inviabilizar toda a viagem na porta do aeroporto.',
  },
  {
    id: 'financas',
    num: '03',
    tag: 'Finanças',
    title: 'Quanto Vai Custar e Como se Organizar',
    lead: 'Calcular o orçamento estimado antes de reservar qualquer coisa evita surpresas desagradáveis e permite comparar destinos com clareza.',
  },
  {
    id: 'passagens',
    num: '04',
    tag: 'Passagens aéreas',
    title: 'Como Comprar as Passagens com Estratégia',
    lead: 'A passagem costuma representar a maior fatia do orçamento. Com algumas estratégias simples, é possível economizar de forma significativa.',
  },
  {
    id: 'hospedagem',
    num: '05',
    tag: 'Hospedagem',
    title: 'Onde e Como se Hospedar',
    lead: 'A escolha da hospedagem impacta tanto o orçamento quanto a qualidade da experiência. Conheça as opções e escolha a que faz mais sentido para o seu perfil.',
  },
  {
    id: 'seguro',
    num: '06',
    tag: 'Proteção',
    title: 'Seguro Viagem — Não Embarque Sem Ele',
    lead: 'Uma emergência médica no exterior sem cobertura pode custar dezenas de milhares de reais. O seguro viagem é o custo que ninguém quer ter — e que todo mundo precisa.',
  },
  {
    id: 'internet',
    num: '07',
    tag: 'Conectividade',
    title: 'Internet no Exterior — Como Ficar Conectado',
    lead: 'Ficar sem internet no exterior pode ser um problema sério: desde se perder sem Maps até não conseguir chamar ajuda em emergências. Há boas opções para todos os perfis.',
  },
  {
    id: 'roteiro',
    num: '08',
    tag: 'Roteiro',
    title: 'Montando o Roteiro de Passeios',
    lead: 'Com voo e hospedagem reservados, é hora de decidir o que fazer. O equilíbrio entre planejamento e espontaneidade define a qualidade da experiência.',
  },
  {
    id: 'checklist',
    num: '09',
    tag: 'Pré-embarque',
    title: 'Checklist Final — 1 Semana Antes',
    lead: 'A semana anterior ao embarque é crítica. Use esta lista para não esquecer nada que possa comprometer a experiência.',
  },
  {
    id: 'cronograma',
    num: '10',
    tag: 'Visão geral',
    title: 'Cronograma Completo — Linha do Tempo Ideal',
    lead: 'Organizar cada etapa dentro de um cronograma realista é o que separa viagens tranquilas de viagens estressantes. Siga esta sequência.',
  },
]

export const visaFree = [
  { flag: '🇦🇷', name: 'Argentina',     type: 'n' },
  { flag: '🇺🇾', name: 'Uruguai',       type: 'n' },
  { flag: '🇨🇱', name: 'Chile',         type: 'n' },
  { flag: '🇵🇪', name: 'Peru',          type: 'n' },
  { flag: '🇨🇴', name: 'Colômbia',      type: 'n' },
  { flag: '🇵🇹', name: 'Portugal',      type: 'e' },
  { flag: '🇪🇸', name: 'Espanha',       type: 'e' },
  { flag: '🇫🇷', name: 'França',        type: 'e' },
  { flag: '🇮🇹', name: 'Itália',        type: 'e' },
  { flag: '🇩🇪', name: 'Alemanha',      type: 'e' },
  { flag: '🇬🇷', name: 'Grécia',        type: 'e' },
  { flag: '🇲🇽', name: 'México',        type: 'a' },
  { flag: '🇹🇭', name: 'Tailândia',     type: 'a' },
  { flag: '🇯🇵', name: 'Japão',         type: 'a' },
  { flag: '🇿🇦', name: 'África do Sul', type: 'a' },
  { flag: '🇲🇦', name: 'Marrocos',      type: 'a' },
]

export const visaRequired = [
  { dest: '🇺🇸 EUA',              type: 'B1/B2 — entrevista obrigatória no consulado',       where: 'ustraveldocs.com',            time: '2 a 6 meses' },
  { dest: '🇨🇦 Canadá',           type: 'eTA (se tiver visto EUA) ou visto presencial',      where: 'canada.ca',                   time: 'eTA: dias · Visto: 4–8 sem.' },
  { dest: '🇬🇧 Reino Unido',      type: 'Standard Visitor Visa — online + biometria',         where: 'gov.uk',                      time: '3 a 8 semanas' },
  { dest: '🇦🇺 Austrália',        type: 'eVisitor gratuito (eletrônico)',                     where: 'immi.homeaffairs.gov.au',      time: 'Dias a semanas' },
  { dest: '🇳🇿 Nova Zelândia',    type: 'NZeTA + taxa IVL',                                  where: 'App oficial imigração NZ',     time: '72h a dias' },
  { dest: '🇨🇳 China',            type: 'Visto L (turismo) — presencial',                    where: 'Consulado chinês',             time: '2 a 4 semanas' },
  { dest: '🇮🇳 Índia',            type: 'e-Visa eletrônico',                                  where: 'indianvisaonline.gov.in',      time: '3 a 5 dias úteis' },
  { dest: '🇦🇪 Dubai / EAU',      type: 'Visto na chegada gratuito (30 dias)',                where: 'Aeroporto de chegada',         time: 'Na hora' },
  { dest: '🇹🇷 Turquia',          type: 'e-Visa eletrônico (pago)',                           where: 'evisa.gov.tr',                 time: 'Minutos a horas' },
  { dest: '🇰🇷 Coreia do Sul',    type: 'K-ETA (eletrônico)',                                 where: 'App K-ETA',                    time: '72 horas' },
  { dest: '🇪🇬 Egito',            type: 'Visto na chegada ou e-Visa',                        where: 'visa2egypt.gov.eg',            time: 'Minutos (on arrival)' },
]

export const budgetItems = [
  { cat: '✈️ Passagem aérea (i/v)',  est: 'R$ 3.000–9.000 (Europa) · R$ 800–2.500 (Am. Sul)' },
  { cat: '🏨 Hospedagem',            est: 'R$ 200–600 por noite (quarto duplo divide o custo)' },
  { cat: '🍽️ Alimentação',          est: 'R$ 150–350 por dia' },
  { cat: '🚌 Transporte local',      est: 'R$ 50–150 por dia' },
  { cat: '🎭 Passeios e ingressos',  est: 'R$ 100–300 por dia' },
  { cat: '🛡️ Seguro viagem',        est: 'R$ 200–600 para toda a viagem' },
  { cat: '🛍️ Compras / extras',     est: 'Variável — defina um teto antes de embarcar' },
]

export const airlineSteps = [
  { tag: 'Passo 1', title: 'Pesquise nos comparadores', text: 'Use Google Flights, Skyscanner e Kayak. Ative alertas de preço para o trecho desejado.' },
  { tag: 'Passo 2', title: 'Seja flexível com as datas', text: 'Voos em terça ou quarta-feira tendem a ser mais baratos. Evite feriados e alta temporada.' },
  { tag: 'Passo 3', title: 'Avalie voos com escalas',   text: 'Conexões podem reduzir até 40% do valor em relação a voos diretos. Vale considerar se o tempo não for crítico.' },
  { tag: 'Passo 4', title: 'Compre com antecedência',   text: 'O intervalo ideal é 2 a 5 meses antes. Abaixo de 30 dias os preços disparam consideravelmente.' },
  { tag: 'Passo 5', title: 'Atenção à bagagem',         text: 'Passagens mais baratas frequentemente não incluem mala despachada. Calcule o custo total antes de confirmar.' },
]

export const internetOptions = [
  { op: 'Chip local',              pro: 'Barato e com excelente velocidade',         con: 'Precisa comprar ao chegar no destino' },
  { op: 'eSIM internacional',      pro: 'Ativa antes de embarcar, sem trocar chip',  con: 'Nem todo celular suporta' },
  { op: 'Roaming do plano atual',  pro: 'Zero esforço — funciona automaticamente',   con: 'Caro e com limite baixo de dados' },
  { op: 'Chip de viagem (Airalo)', pro: 'Compra online antes de viajar',             con: 'Pode ser mais caro que chip local' },
]

export const timeline = [
  { when: '3 a 6 meses antes', title: 'Definições e reservas principais',  text: 'Escolha o destino, verifique necessidade de visto, compre as passagens e reserve a hospedagem com política de cancelamento flexível.' },
  { when: '2 a 3 meses antes', title: 'Seguros e documentação',            text: 'Contrate o seguro viagem, solicite visto (se necessário), confirme validade do passaporte e providencie renovação se preciso.' },
  { when: '1 mês antes',       title: 'Roteiro e finanças',                text: 'Monte o roteiro de passeios, reserve ingressos principais, abra conta/cartão internacional e defina o orçamento diário.' },
  { when: '1 semana antes',    title: 'Preparo final',                     text: 'Faça a mala, imprima documentos, avise o banco, configure chip ou eSIM e deixe o contato de emergência com pessoa de confiança.' },
  { when: 'No dia',            title: 'Decolagem 🎉',                      text: 'Chegue 3h antes, mala de mão com o essencial, documentos acessíveis. A preparação está feita — agora é só aproveitar.' },
]
