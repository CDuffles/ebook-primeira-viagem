import Cover           from './components/Cover'
import TableOfContents from './components/TableOfContents'
import ChapterDestino  from './components/ChapterDestino'
import {
  ChapterDocumentos,
  ChapterFinancas,
  ChapterPassagens,
  ChapterHospedagem,
} from './components/Chapters2to5'
import {
  ChapterSeguro,
  ChapterInternet,
  ChapterRoteiro,
  ChapterChecklist,
  ChapterCronograma,
} from './components/Chapters6to10'
import StickyNav from './components/StickyNav'
import Footer    from './components/Footer'

export default function App() {
  return (
    <div className="bg-paper min-h-screen">
      <StickyNav />
      <Cover />
      <TableOfContents />
      <main>
        <ChapterDestino />
        <ChapterDocumentos />
        <ChapterFinancas />
        <ChapterPassagens />
        <ChapterHospedagem />
        <ChapterSeguro />
        <ChapterInternet />
        <ChapterRoteiro />
        <ChapterChecklist />
        <ChapterCronograma />
      </main>
      <Footer />
    </div>
  )
}
