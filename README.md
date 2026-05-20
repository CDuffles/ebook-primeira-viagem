# Primeira Viagem Internacional — E-book Interativo

E-book digital interativo construído com React + Vite + Tailwind CSS.

## Stack
- **React 18** + **Vite 5** — build ultrarrápido
- **Tailwind CSS 3** — utility-first styling
- **Fontes**: Cormorant Garamond + Outfit (Google Fonts)

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## Build para produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

### Opção 1 — Via GitHub (recomendado)
1. Faça push deste projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **New Project**
3. Importe o repositório
4. Configurações detectadas automaticamente:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy** — pronto ✅

### Opção 2 — Via Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

## Estrutura do projeto

```
src/
├── components/
│   ├── Cover.jsx           # Capa / hero
│   ├── TableOfContents.jsx # Índice
│   ├── ChapterDestino.jsx  # Cap. 01
│   ├── Chapters2to5.jsx    # Caps. 02–05
│   ├── Chapters6to10.jsx   # Caps. 06–10
│   ├── StickyNav.jsx       # Navegação lateral/mobile
│   ├── Footer.jsx
│   └── ui.jsx              # Componentes reutilizáveis
├── hooks/
│   └── useInView.js        # Scroll animation hook
├── data.js                 # Todo o conteúdo do e-book
├── App.jsx
├── main.jsx
└── index.css
```

## Personalização

- **Conteúdo**: edite `src/data.js`
- **Cores**: edite `tailwind.config.js` (seção `extend.colors`)
- **Tipografia**: troque as fontes no `index.html` e `tailwind.config.js`
