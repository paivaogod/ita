import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'ITA Construções e Reformas',
    template: '%s | ITA Construções e Reformas'
  },
  description: 'Construção civil, reformas e manutenção com foco em qualidade, prazo e segurança.',
  openGraph: {
    title: 'ITA Construções e Reformas',
    description: 'Construção civil, reformas e manutenção.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
